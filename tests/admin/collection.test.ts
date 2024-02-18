import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import componentPage from "@pages/Component.page";
import * as data from "@testData/login.cred.json";
import CollectionPage from "pages/admin/Collection.page";
import ENV from "@utils/env";

const getNumber = Math.floor(Math.random() * 10)

test.describe('demo data', () => {
        test.afterAll(async () => {
                console.log("afterall");
                await new Promise(f => setTimeout(f, 5000));
        });
test('Projext Setup For All The Test Cases', async ({ page }) => {
        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);
        const loginPage = new LoginPage(page)
        const collectionPage = new CollectionPage(pages[2])

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.ADMINEMAIL, ENV.ADMINPASSWORD)

});

})