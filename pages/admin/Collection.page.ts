import { expect } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import { Page } from "playwright";
export default class CollectionPage {

    constructor(private page: Page) {
    }
    private collectionPageElements = {
        configurationText: "//h5[text()='Configurations']",

    }

    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${error}"`)
        }
    }







}