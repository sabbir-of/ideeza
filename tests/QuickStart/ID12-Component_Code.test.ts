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
                        viewport: { width: 1680, height: 860 },
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



        test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async () => {

                await page.goto("/user/dashboard/code/add-component", { timeout: 1200000, waitUntil: "domcontentloaded" })
                await page.waitForNavigation()

                const pages = page.context().pages()
                console.log(pages.length);

                const newProjectPages = new newProjectPage(pages[1])
                const metaMask = new metaMaskPage(pages[2])

                // await page.pause()
                await test.step("Unlock MetaMask", async () => {
                        await metaMask.metaMaskUnlockHelper()
                        // await metaMask.inputUnlockPassword()
                        // await metaMask.clickOnUnlockBtn()
                })
                await page.bringToFront()


                await newProjectPages.clickTakeATourStartBtn()
                await newProjectPages.clickTakeATourSkipBtn()

                await test.step("Component Create With Code | Add Part Section", async () => {

                        await newProjectPages.clickOnComponentWithCodeBuiltInSearchBtn()
                        await newProjectPages.clickOnBuiltInBtn()
                        await newProjectPages.clickOnSystemDefineBuildInLogicCode()
                        await newProjectPages.clickOnSystemDefineBuildInFirstLogicCode()
                        await newProjectPages.clickOnUseBtn()
                        await newProjectPages.clickNextBtn()

                })

                await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {

                        //input part name
                        await newProjectPages.inputComponentName()

                        //input descripitin
                        await newProjectPages.inputPartDescriptoin()

                        //click on Select Catagory Selection
                        await newProjectPages.clickOnSelectCatagorySection()

                        //clickToSelectCatagory
                        await newProjectPages.clickToSelectCodeCatagory()

                        //click OnShowOnCustomizeBtn
                        await newProjectPages.clickOnShowOnCustomizeBtn()

                        //click on the next step button
                        await newProjectPages.clickOnNextStepBtn()
                        //Choose Block Chain Mint
                        await newProjectPages.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
                        //Click on Choose Collection section
                        await newProjectPages.clickToChooseProjectCollections()
                        //select collection
                        await newProjectPages.clickToChooseProjectCollection("1")

                        //input Part Privet Price
                        await newProjectPages.inputPartPrivetPrice()

                        //input Commarcial Price
                        await newProjectPages.inputCommarcialPrice()
                        //click on the confirm checkbox
                        await newProjectPages.clickOnTheConfirmCheckBox()
                        //click on the next step button
                        await newProjectPages.clickOnNextStepBtn()


                        await newProjectPages.clickOnConnectWalletBtn()
                        //Click On metamask button
                        // let newOne = null;
                        await newProjectPages.clickOnMetaMaskBtn()


                        await newProjectPages.clickOnContinueButton()
                        // await page.waitForLoadState("load")



                        //Click On Agree Btn
                        await newProjectPages.clickOnAGreeBtn()

                        // await newProjectPages.clickOnAddNewPartBtn()


                })
        })




});
