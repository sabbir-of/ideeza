import { BrowserContext, Page, chromium } from "playwright";
import * as data from "@testData/login.cred.json";
import { test } from "@playwright/test";
const path = require('path');
import newProjectPage from "@pages/NewProject.page";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import LoginPage from "@pages/Login.page";
// `--use-file-for-fake-video-capture=${__dirname}/testData/videos/mobile.y4m`
test.describe('User | Quick Start | New Project', () => {
        let context: BrowserContext;
        let page: Page;
        const pathToExtension = path.join(__dirname, '/MyMetamaskExtension');
        const userDirData = path.join(__dirname, '/tests/QuickStart/User-Data-Dir/Chrome/User Data/Default/Extensions/nkbihfbeogaeaoehlefnkodbefgpgknn/10.35.1_0');
        test.beforeAll(async () => {
                context = await chromium.launchPersistentContext(userDirData, {
                        headless: false,
                        channel: 'chrome',
                        baseURL: "https://frontdev.ideeza.com/",
                        viewport: { width: 1700, height: 920 },
                        timeout: 1 * 30 * 40000,
                        slowMo: 50,
                        args: [
                                `--disable-extensions-except=${pathToExtension}`,
                                `--load-extension=${pathToExtension}`,
                                // `--disable-extensions-except=${path.join(__dirname, '/MyMetamaskExtension')}`,
                                // `--load-extension=${path.join(__dirname, '/MyMetamaskExtension')}`,
                        ],
                });
                page = await context.newPage();
                test.setTimeout(120000)
                // const newProjectPages = new newProjectPage(page)

        });




        test('ID-024 | User | Validate User Can Successfully Send Project To Manufacture', async () => {

                await page.goto("/user/cart/", { timeout: 1200000, waitUntil: "domcontentloaded" })
                await page.waitForNavigation()

                const pages = page.context().pages()
                console.log(pages.length);

                //page configaration here
                const newProjectPages = new newProjectPage(pages[1])
                const metaMask = new metaMaskPage(pages[2])

                // await page.pause()
                await test.step("Unlock MetaMask", async () => {
                        await metaMask.metaMaskUnlockHelper()
                        // await metaMask.inputUnlockPassword()
                        // await metaMask.clickOnUnlockBtn()
                })
                await page.bringToFront()




                await newProjectPages.clickOnSendedProjectThreeDotOnTable()
                await newProjectPages.clickOnChoseAndEditManufactureBtn()
                await newProjectPages.clickToSelectManufacture()
                await newProjectPages.clickToExpandSelectedManufacturePanel()
                await newProjectPages.clickOnSendOfferToManufacture()

                // await newProjectPages.clickOnAvaterBtn()
                // await newProjectPages.clickOnLogoutBtn()


                // //click to my project section
                // await newProjectPages.clickOnMyProjectPage()



        })


});
