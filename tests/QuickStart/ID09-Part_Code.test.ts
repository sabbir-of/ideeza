import { BrowserContext, Page, chromium } from "playwright";

import test, { expect } from "@fixtures/basePages"
const path = require('path');
import newProjectPage from "@pages/NewProject.page";
import testData from "@testData/testData";
import metaMaskPage from "@pages/metamask.page";
import LoginPage from "@pages/Login.page";







test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit Code', async ({ page }) => {

        await page.goto("/user/dashboard/code/add-part", { timeout: 1200000, waitUntil: "domcontentloaded" })


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

        await test.step("Part Create With Code | Add Part Section", async () => {

                await newProjectPages.inputCodeBlockName()
                await newProjectPages.clickOnColorSection()
                await newProjectPages.clickOnCatagorySection()
                await newProjectPages.clickToSelectCodeCatagory()
                await newProjectPages.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | Block Parameters Section", async () => {

                await newProjectPages.checkValueInput()
                await newProjectPages.inputVariableName()
                await newProjectPages.checkPreviousConnector()
                await newProjectPages.checkNextConnector()
                await newProjectPages.checkIsOutput()
                await newProjectPages.checkInputInline()
                await newProjectPages.checkStatementInput()
                await newProjectPages.checkAppendValueInput()
                await newProjectPages.input2VariableName()
                await newProjectPages.clickOnPartNextStepBtn()

        })

        await test.step("Add New Part With CodePart Create With Code | General Section", async () => {

                await newProjectPages.inputCodePartName()
                await newProjectPages.inputCodePartDescription()
                await newProjectPages.clickOnCatagorySection()
                await newProjectPages.clickToSelectCodeCatagory()
                await newProjectPages.clickOnShowOnCustomizeCheckBox()
                await newProjectPages.clickOnGeneralSectionNextStepBtn()

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
        await newProjectPages.clickOnGeneralSectionNextStepBtn()


        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPages.clickOnMetaMaskBtn()
        await newProjectPages.approveMetaMask()

        await newProjectPages.clickOnContinueButton()
        await page.waitForLoadState("load")

        //Click On Agree Btn
        await newProjectPages.clickOnAGreeBtn()
        await page.waitForLoadState("load")

        // await newProjectPages.clickOnAddNewPartBtn()



});

