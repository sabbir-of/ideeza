import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";




test('ID-Component-3DCase-001 | User |  Validate User Can Successfully Component Wit 3D Case', async ({ page }) => {

        await page.goto("/user/dashboard/cover/add-component", { timeout: 1200000, waitUntil: "domcontentloaded" })


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

        //click search btn
        await newProjectPages.clickOnPartsSectionSearchBtn()

        //click on parts catagory sectoin
        await newProjectPages.clickOnPartCatagorySection()
        //click on catagory public button
        await newProjectPages.clickOnCatagoryPublicBtn()

        await page.waitForLoadState("load")
        //click on catagory public button
        await newProjectPages.clickOnPartBtn()

        //here is an issue so that the part selection function use two times
        await newProjectPages.clickOnPartBtn()


        //click on catagory public button
        await newProjectPages.clickOnUseBtn()

        //click search btn
        await newProjectPages.clickOnPartsSectionSearchBtn()

        await newProjectPages.IfAlertTextIsVisibleThenClickOnIt()

        //click on electron page next button
        await newProjectPages.clickNextBtn()

        //input part name
        await newProjectPages.inputComponentName()

        //input descripitin
        await newProjectPages.inputPartDescriptoin()

        //click on Select Catagory Selection
        await newProjectPages.clickOnSelectCatagorySection()

        //clickToSelectCatagory
        await newProjectPages.clickToSelectCatagory()

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
        await page.waitForLoadState("load")

        await newProjectPages.clickOnAddNewPartBtn()



});



