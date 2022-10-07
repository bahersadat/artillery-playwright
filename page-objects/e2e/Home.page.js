const {expect, Locator, Page} = require( '@playwright/test' );

class HomePage{
    constructor(page){
        this.page =page;
        this.signInButton = page.locator('#signin_button');
        this.searchBox = page.locator('#searchTerm');
        this.feedbackLink = page.locator("#feedback");
    }
    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/");
    }
    async clickSignIn() {
        await this.signInButton.click();
    }
    async clickOnFeedbackLink(){
        await this.feedbackLink.click();
    }
    
    //a workaround to bypass the certificate error due to ssl protocol::
    async hackToBypassSignIn() {
        await this.page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html'); 
    }
    async searchFor(phrase) {
        await this.searchBox.type(phrase);
        await this.page.keyboard.press('Enter'); 
    }
}
module.exports = { HomePage };