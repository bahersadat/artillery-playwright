import { expect, Locator, Page } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    


    constructor(page:Page){
        this.page = page;
        
    }
    async baseUrl(url){
        await this.page.goto(`http://webdriveruniversity.com/${url}`);
    }

}