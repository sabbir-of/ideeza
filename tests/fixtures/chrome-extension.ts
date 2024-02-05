import { test as base, chromium } from "@playwright/test";


export type ChromeExtensionOptions = {
  chromeExtensions: {
    paths: Array<string>;
    userDataDir?: string;
  };
};

export const test = base.extend<ChromeExtensionOptions>({
  chromeExtensions: [{ paths: [] }, { option: true }],
  context: [
    async ({ chromeExtensions }, use) => {
      const { paths, userDataDir = "C:/Users/sabbir/AppData/Local/Google/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.34.5_0" } = chromeExtensions;
      const launchOptions = {
        headless: false,
        args:
          paths.length === 0
            ? []
            : [
              //  `--user-data-dir=${userDataDir}`,
              `--disable-extensions-except=${paths.join("/MyMetamaskExtension")}`,
              ...paths.map((path) => `--load-extension=${path}`),
            ],
      };
      const context = await chromium.launchPersistentContext(
        userDataDir,
        launchOptions
      );
      await use(context);
      const Page = await context.newPage()
      // await context.close();
    },
    { scope: "test", timeout: 40000 },
    //                        ^
    //                        This is my preference. The default 30s timeout is too long to wait if there is a manifest issue.
  ],
});