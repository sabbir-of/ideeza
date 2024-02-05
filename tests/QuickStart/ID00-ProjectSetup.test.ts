import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";


test.describe('Ideeza Full Project Setup', () => {

        test('Projext Setup For All The Test Cases', async ({ page }) => {
                await page.goto("/")

                const pages = page.context().pages()
                console.log(pages.length);
                const loginPage = new LoginPage(pages[1])
                const metaMask = new metaMaskPage(pages[2])

                await metaMask.clickTermsAndConditionCheckBox()
                await metaMask.clickOnCreateWalletBtn()
                await metaMask.clickOnIAgreeBtn()

                await metaMask.inputNewPassword()
                await metaMask.inputConfirmPassword()
                await metaMask.clickOnCreatePasswordConfirmCheckBox()
                await metaMask.clickOnCreateNewWalletBtn()

                await metaMask.clickOnRemindeMeLateBtn()
                await metaMask.clickSkipAccountSecurityCheckBox()
                await metaMask.clickOnSkipAccountSecutrityBtn()

                await metaMask.clickOnGotItBtn()
                await metaMask.clickOnNextBtn()
                await metaMask.clickOnDoneBtn()
                await metaMask.clickOnPopupCloseBtn()

                await metaMask.clickAddedNetworkSection()
                await metaMask.clickAddNetworkBtn()
                await metaMask.clickAddNetworkManuallyBtn()
                await metaMask.inputAddNetworkName()
                await metaMask.inputAddNetworkUrl()
                await metaMask.inputAddNetworkChainId()
                await metaMask.inputAddNetworkCurrentSymbol()
                await metaMask.clickOnSaveBtn()
                await metaMask.clickOnSwitchToPoligonTestNet()
                await metaMask.clickOnGotItBtnOnAddNetwork()

                await metaMask.clickOnAccountSelectionOpenBtn()
                await metaMask.clickOnImportAccountBtn()
                await metaMask.inputAccountKay()
                await metaMask.clickOnImportBtn()

                await page.bringToFront()
                await loginPage.clickOnCookiesCheckBox()
                await loginPage.clickOnApproveBtn()
                await loginPage.login(data.email, data.password)
                // await loginPage.clickOnStartProjectBtn()
                // await loginPage.clickOnNewProjectByYourselftBtn()
                await page.waitForTimeout(8000)
                await page.goto("/user/dashboard/project/create/", { timeout: 1200000, waitUntil: "domcontentloaded" })
                await loginPage.clickTakeATourStartBtn()
                await loginPage.clickTakeATourSkipBtn()

                await loginPage.clickOnDashboardBtn()

                await loginPage.clickOnNewsFeedPage()

                await page.goto("https://metamask.github.io/test-dapp/", { timeout: 1200000, waitUntil: "domcontentloaded" })

                await page.click("#connectButton", { force: true });
                // await wallet.approve();

                const popup = await page.context().waitForEvent("page");
                await popup.getByRole("button", { name: "Next" }).click();
                await popup.getByRole("button", { name: "Connect" }).click();
                await page.waitForTimeout(4000)

                // const ele = await page.locator("//span[text()='80001']")
                // await expect(ele).toBeVisible()
        });

        test.only('demo', async ({ page }) => {
                // console.log(Math.floor(Math.random() * 10) + 1);
                // console.log(Math.floor(Math.random() * (1 - 10 + 1)) + 11);
                // const sequence = [...Array(1).keys()]
                // console.log(sequence)

                // console.log(Math.floor(Math.random() * (2 - 1 + 1)) + 5);

                console.log(Math.floor(Math.random() * 10) + 1);


        })




})