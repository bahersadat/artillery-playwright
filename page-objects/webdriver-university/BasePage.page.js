const { expect, Locator, Page } = require("@playwright/test");

class BasePage {

    constructor(page){
        // this.page = page;
        this.page = page;
        
    }
    async baseUrl(url){
        await this.page.goto(`http://webdriveruniversity.com/${url}`);
    }

}
module.exports = { BasePage };