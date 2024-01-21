import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: "utils/global-set.ts",
  testDir: "./tests",
  // testMatch: [
  //   // "Component.test.ts",
  //   "metamask01.test.ts",
  //   "test.test.ts",
  //   "ProjectSetup.test.ts",
  //   "PC.test.ts",
  //   "PMF.test.ts",
  //   // "ProjectCreate.test.ts",

  //   "GWC_PC.test.ts",
  //   "projectCreate_GWC.test.ts",
  //   "projectCreate_Sell.test.ts",

  //   "projectCreateForManufacture.test.ts",
  //   "projectSendToManufacture.test.ts",
  //   "projectAcceptByManufacture.test.ts",
  //   "projectPaymentFromUserSide.test.ts",

  //   "part_3dCase.test.ts",
  //   "part_Electronics.test.ts",
  //   "part_Code.test.ts",

  //   "component_3dCase.test.ts",
  //   "component_Electronics.test.ts",
  //   "component_Code.test.ts",

  //   "buyProject.test.ts"

  // ],

  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 6000

  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: process.env.CI ? [["junit", {
    outputFile: "results.xml"
  }]] : [["json", {
    outputFile: "report.json"
  }], ["html", {
    open: "never"
  }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://frontdev.ideeza.com/",
    launchOptions: {
      args: [
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--no-sandbox',
        '--disable-features=UseOzonePlatform',
        // `--use-file-for-fake-video-capture=${__dirname}/testData/videos/mobile.y4m`,
        // `--user-data-dir=${userDataDir}`,
        // `--disable-extensions-except=${pathToExtension}`,
        // `--load-extension=${pathToExtension}`,

      ],
      slowMo: 100

    },

    permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1700, height: 920 },
    ignoreHTTPSErrors: true,
    // permissions: ["camera"],

    // storageState: "./auth.json",
    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "off",
    screenshot: process.env.CI ? "off" : "on",
  },


  /* Configure projects for major browsers */
  // projects: [
  // {
  //   name: 'chromium',
  //   use: { ...devices['Desktop Chrome'] },
  // },

  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },

  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
