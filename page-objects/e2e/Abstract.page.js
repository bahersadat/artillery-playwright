const { Page } = require("@playwright/test");


class AbstractPage{

    constructor(page){
        this.page = page;
    }
    async wait(time){
        await this.page.waitForTimeout(time);
    }

}
module.exports = { AbstractPage };