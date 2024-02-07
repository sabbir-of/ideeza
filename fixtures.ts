import { BrowserContext, expect, test as baseTest } from "@playwright/test";
import dappwright, { Dappwright, MetaMaskWallet } from "@tenkeylabs/dappwright";

export const test = baseTest.extend<{
  context: BrowserContext;
  wallet: Dappwright;
}>({
  context: async ({}, use) => {
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

    await wallet.importPK('17a75569989837200a68b0e0a41a19d0bd9996104011f098fecf912b6fcd8c20');



    await use(context);
  },

  wallet: async ({ context }, use) => {
    const metamask = await dappwright.getWallet("metamask", context);

    await use(metamask);
  },
});