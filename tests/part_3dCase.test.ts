
import test, { expect } from "@fixtures/basePages"
import ENV from "@utils/env";

test.beforeEach(async ({ page, wallet }) => {
        // await page.goto("https://frontdev.ideeza.com/")
        // await page.waitForLoadState("networkidle")
        // await wallet.createAccount()


});

test.only('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async ({ page, loginPage, wallet, newProjectPage }) => {

        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "networkidle" })

        await wallet.switchNetwork("Polygon Testnet")
        await wallet.importPK(ENV.TOKEN)
        // await wallet.createAccount()

        // await wallet.importPK(data.token)
        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.USERNAME, ENV.PASSWORD)
        await page.waitForLoadState("networkidle")
        // await newProjectPage.clickOnApproveBtn()
        await newProjectPage.clickTakeATourStartBtn()
        await newProjectPage.clickTakeATourSkipBtn()

        await newProjectPage.clickQuickStartBtn()
        await newProjectPage.clickOnNewPartBtn()
        await newProjectPage.clickOn3CCaseBtn()
        //click search btn
        await newProjectPage.clickOnPartsSectionSearchBtn()

        //click on parts catagory sectoin
        await newProjectPage.clickOnPartCatagorySection()
        //click on catagory public button
        await newProjectPage.clickOnCatagoryPublicBtn()

        //click on catagory public button
        await newProjectPage.clickOnPartBtn()

        //click on catagory public button
        await newProjectPage.clickOnUseBtn()

        //click search btn
        await newProjectPage.clickOnPartsSectionSearchBtn()

        await newProjectPage.IfAlertTextIsVisibleThenClickOnIt()

        //click on electron page next button
        await newProjectPage.clickNextBtn()

        //input part name
        await newProjectPage.inputPartName()

        //input descripitin
        await newProjectPage.inputPartDescriptoin()

        //click on Select Catagory Selection
        await newProjectPage.clickOnSelectCatagorySection()

        //clickToSelectCatagory
        await newProjectPage.clickToSelectCatagory()

        //click OnShowOnCustomizeBtn
        await newProjectPage.clickOnShowOnCustomizeBtn()

        //click on the next step button
        await newProjectPage.clickOnNextStepBtn()
        //Choose Block Chain Mint
        await newProjectPage.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPage.clickToChooseProjectCollections()
        //select collection
        await newProjectPage.clickToChooseProjectCollection("1")

        //input Part Privet Price
        await newProjectPage.inputPartPrivetPrice()

        //input Commarcial Price
        await newProjectPage.inputCommarcialPrice()
        //click on the confirm checkbox
        await newProjectPage.clickOnTheConfirmCheckBox()
        //click on the next step button
        await newProjectPage.clickOnNextStepBtn()


        await newProjectPage.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPage.clickOnMetaMaskBtn()

        await wallet.approve()

        await newProjectPage.clickOnContinueButton()
        // await page.waitForLoadState("load")



        //Click On Agree Btn
        await newProjectPage.clickOnAGreeBtn()

        // await newProjectPage.clickOnAddNewPartBtn()



});

