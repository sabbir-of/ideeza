import { BrowserContext, Page, chromium } from "playwright";
import * as data from "@testData/login.cred.json";
import { test } from "@playwright/test";
const path = require('path');
import newProjectPage from "@pages/NewProject.page";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import LoginPage from "@pages/Login.page";
// import Wallet from "@tenkeylabs/dappwright/dist/wallets/wallet";

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



        test('ID-Component-Electronics-001 | User |  Validate User Can Successfully Part Wit 3D Case', async () => {

                await page.goto("/user/dashboard/electronics/add-component", { timeout: 1200000, waitUntil: "domcontentloaded" })
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

                await test.step("Add New Part With Electronics", async () => {

                        await newProjectPages.clickOnEletronicsLayer()
                        await newProjectPages.clickToSelectPublicPackage()
                        await newProjectPages.clickOnConfigarationSectionNextBtn()
                        await newProjectPages.clickOnChartConfigration()
                        await newProjectPages.clickToSelectGraphType()
                        // await newProjectPages.clickNextBtn()

                        await newProjectPages.inputXChartLabel()
                        await newProjectPages.inputYChartLabel()
                        await newProjectPages.inputCatagoryData()
                        await newProjectPages.inputParcentageData()
                        await newProjectPages.clickElectronicsSectionNextBtn()
                        await newProjectPages.codeSectionNextBtn()

                        await newProjectPages.inputPartNameForAddedPart()
                        await newProjectPages.clickOnElectronicsCatagorySelectionField()
                        await newProjectPages.clickToSelectElectronicsCatagory()
                        await newProjectPages.inputFreeStyleCatagory()
                        await newProjectPages.clickToSelectPublicType("Public")
                        await newProjectPages.inpuDesctiption()


                        // await newProjectPages.clickToAttachDataSheet()

                        await newProjectPages.clickOnCustomizeCheckBox()
                        await newProjectPages.clickToOpenLanguageTypeSelectOption("JavaScript")

                        // await newProjectPages.jsonFileUploadHelper()
                        await newProjectPages.clickToUPloadLanguage()
                        await newProjectPages.clickToSubmitElectronicsPart()





                })


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
                await newProjectPages.clickOnFinishBtn()


                await newProjectPages.clickOnConnectWalletBtn()
                //Click On metamask button
                // let newOne = null;
                await newProjectPages.clickOnMetaMaskBtn()


                await newProjectPages.clickOnContinueButton()
                await page.waitForLoadState("load")



                //Click On Agree Btn
                await newProjectPages.clickOnAGreeBtn()

                
                await newProjectPages.clickOnAddNewPartBtn()



        });




});
