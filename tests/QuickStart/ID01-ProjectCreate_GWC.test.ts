import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";



test('Add New Project With Give With Community', async ({ page, newProjectPage, loginPage, wallet }) => {

        await page.goto("https://frontdev.ideeza.com/user/dashboard/project/create", { timeout: 1200000, waitUntil: "domcontentloaded" })


        const pages = page.context().pages()
        console.log(pages.length);

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(data.email, data.password)

        //     await pages[0].close()

        //page configaration here
        // const newProjectPages = new newProjectPage(pages[1])
        // const metaMask = new metaMaskPage(pages[2])

        // // await page.pause()
        // await test.step("Unlock MetaMask", async () => {
        //         await metaMask.metaMaskUnlockHelper()
        //         // await metaMask.inputUnlockPassword()
        //         // await metaMask.clickOnUnlockBtn()
        // })
        // await page.bringToFront()


        await newProjectPage.clickTakeATourStartBtn()
        await newProjectPage.clickTakeATourSkipBtn()

        await newProjectPage.clickAddPartsOrComponentsSearchIcon()
        // //search parts and components
        // await newProjectPage.searchPartsAndComponents(" ")
        //click to select atmega search result for parts and components
        await newProjectPage.clickOnQAElectronicsPartsComponent()


        //click on the atmega public option to select a parts
        await newProjectPage.clickOnAtmegaPublicOption()
        // //click atmega first parts
        await newProjectPage.clickOnPremiumPart()
        // //click parts use button
        await newProjectPage.clickUseBtn()

        // await page.getByText('dmeo part 11').click();
        // await page.getByRole('button', { name: 'use' }).click();
        // await page.getByRole('button', { name: 'No' }).click();

        await newProjectPage.IfAlertTextIsVisibleThenClickOnIt()


        await newProjectPage.clickAddPartsOrComponentsSearchIcon()

        await newProjectPage.clickOnLoadPriveousProjectNoBtn()


        //click on add parts or component search button **There is an issue, after click on use button then should collapse the parts and componets modal
        await newProjectPage.clickAddPartsOrComponentsSearchIcon()

        //click on electron page next button
        await newProjectPage.clickOnNextBtn()
        //click on electron section submit button
        await newProjectPage.clickOnElectroncisSectionSubmitBtn()
        await newProjectPage.clickOnElectroncisSectionSubmitBtn()

        //***code section***
        //click on code section
        await newProjectPage.clickOnCodeSection()
        //click on code section search button
        await newProjectPage.clickCodeSectionAddPartsOrComponentsSearchIcon()
        // //search parts and components
        // await newProjectPage.searchCodePartsAndComponents("System Defined")
        //click system defined build in code section
        await newProjectPage.clickOnSystemDefineBuildInCode()
        //click system defined build in Logic code section
        await newProjectPage.clickOnSystemDefineBuildInLogicCode()
        //click system defined build in Logic First code section
        await newProjectPage.clickOnSystemDefineBuildInFirstLogicCode()
        //click parts use button
        await newProjectPage.clickUseBtn()
        //click on add parts or component search button **There is an issue, after click on use button then should collapse the parts and componets modal
        await newProjectPage.clickCodeSectionAddPartsOrComponentsSearchIcon()
        //click on code section create button
        await newProjectPage.clickOnCodeSectionCreateBtn()


        //start cover section
        //click on cover section
        await newProjectPage.clickOnCoverSection()
        //click on cover section search button
        await newProjectPage.clickOnCoverSectionSearchBtn()
        //search parts and components
        await newProjectPage.searchCoverPartsAndComponents("ALL 3D Models")
        // //click on the all 3d model part btn
        // await newProjectPage.clickOnCoverSectionAll3DModelPartBtn()
        // //click on the Cover Section All 3D Model Part public option to select a parts
        // await newProjectPage.clickOnAtmegaPublicOption()
        // //click to select cover section parts
        // await newProjectPage.clickToSelectionCoverSectio3DPart()
        // //click parts use button
        // await newProjectPage.clickUseBtn()


        //click on general section button
        await newProjectPage.clickOnGeneralTab()
        await newProjectPage.clickOnYesButtonIfVisible()
        //click on general section create button
        await newProjectPage.clickOnGeneralSectonCreateProjectBtn()


        //click give to the cmunity button
        await newProjectPage.clickGiveToTheComunityBtn()
        //click to choose project
        await newProjectPage.clickChooseProjectBtn("CREATE NEW")
        //Input Name Of the Project
        await newProjectPage.inputNameOfProject("Demo Project Name")
        //choose Project License
        await newProjectPage.clickToChooseLicense()
        //click to select mit license
        await newProjectPage.clickToSelectMITLicense()
        //Choose Block Chain Mint
        await newProjectPage.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPage.clickToChooseProjectCollections()
        //select collection
        await newProjectPage.clickToChooseProjectCollection("1")
        //Input Descriptions
        await newProjectPage.inputProjectDescription("Lorem Ipsum is simply dummy text of the printing")
        //Click Step One Next Button
        await newProjectPage.clickStepOneNextBtn()

        //Verify Step Two Title Text
        // await newProjectPage.verifyProjectSocialPreviewText("Project social Preview")

        // //Click On Video Edit Button
        // await newProjectPage.clickVideoEditBtn()
        // //Click On Video Edit Section Save Button ***Video Editor Does Not Work Properly***
        // await newProjectPage.clickVideoEditSectionSaveBtn()
        // //click on video editor close btn
        // await newProjectPage.clickToCloseVideoEditor()

        //Click To Disable New Feed Share
        await newProjectPage.clickToDisableNewsFeedShare()
        //Click On Confirm Check Box
        await newProjectPage.clickToConfirmConditionCheckBox()
        //Click On Step Two Give The Comunity Button
        await newProjectPage.clickStepTwoGiveTheComunityBtn()
        //click on connect wallet button
        await newProjectPage.clickOnConnectWalletBtn()
        //Click On metamask button
        await newProjectPage.clickOnMetaMaskBtn()

        await wallet.approve()

        await newProjectPage.clickOnContinueButton()

        await newProjectPage.clickOnCheckOutBtn()

        await newProjectPage.clickOnPaypalSectionConfirmCheckBox()


        const newTab = await test.step("New Tab", async () => {
                return await newProjectPage.clickOnPayWithPaypalBtn()
        })

        await test.step("New Tab", async () => {
                const payPalPage = new LoginPage(newTab)
                await payPalPage.inputPaypalEmail("payer-wauya15573283@personal.example.com")
                await payPalPage.clickOnPayPalSectionNextBtn()
                await payPalPage.inputPaypalPassword("XN=EWv1/")
                await payPalPage.clickOnPayPalLoginBtn()



                await payPalPage.clickOnPaypalPaymentConfirmBtn()

        })
        await newProjectPage.clickOnMyProjectPage()
        await page.waitForLoadState("load")


});
