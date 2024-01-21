import dappwright, { Dappwright, MetaMaskWallet } from "@tenkeylabs/dappwright";
import { BrowserContext, expect, test as baseTest } from "@playwright/test";

export const test = baseTest.extend<{
  context: BrowserContext;
  wallet: Dappwright;
}>({
  context: async ({ }, use) => {
    // Launch context with extension
    const [wallet, _, context] = await dappwright.bootstrap("", {
      wallet: "metamask",
      version: MetaMaskWallet.recommendedVersion,
      seed: "test test test test test test test test test test test junk", // Hardhat's default https://hardhat.org/hardhat-network/docs/reference#accounts
      headless: false,
    });

    // Add Hardhat as a custom network
    await wallet.addNetwork({
      networkName: "Polygon Testnet",
      rpc: "https://polygon-mumbai.infura.io/v3/4ca16cf92c974dde8f9487c7d32b953a",
      chainId: 80001,
      symbol: "MATIC",
    });

    await use(context);
  },

  wallet: async ({ context }, use) => {
    const metamask = await dappwright.getWallet("metamask", context);

    // await metamask.createAccount()

    // await metamask.importPK("93be487cea0fb39c26e6bda2b01b55b015b617eea74cb45cff3f73e9b0c15d90")
    await use(metamask);

  },

});