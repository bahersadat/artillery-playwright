const {expect, Locator, Page} = require( "@playwright/test" );

class TransferFundsPage{
    constructor(page){
        this.page = page;
        this.fromAcc = page.locator("#tf_fromAccountId");
        this.toAcc = page.locator("#tf_toAccountId");
        this.amount = page.locator("#tf_amount");
        this.description = page.locator("#tf_description");
        this.submitBtn = page.locator("#btn_submit");
        this.assertBoardMsg = page.locator("h2.board-header");
        this.assertSuccess = page.locator(".alert-success");
    }
    async transferFunds(){
        await this.fromAcc.selectOption("2");
        await this.toAcc.selectOption("3");
        await this.amount.type("500");
        await this.description.type("a beautiful description");  
    }
    async clickOnSubmitBtn(){
        await this.submitBtn.click();
    }
    async assertBoardMsgMethod(){
        await expect(this.assertBoardMsg).toContainText("Verify");
    }
    async assertSuccMethod(){
        await expect(this.assertSuccess).toContainText("You successfully submitted your transaction");
    }
    
}
module.exports = { TransferFundsPage };