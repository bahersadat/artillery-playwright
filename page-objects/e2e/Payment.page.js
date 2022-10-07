const {expect, Locator, Page} = require( "@playwright/test" );

class PaymentPage{
    constructor(page){
        this.page = page;
        this.payee = page.locator("#sp_payee");
        this.payeeDetail = page.locator("#sp_get_payee_details");
        this.payeeDetailAppear = page.locator("#sp_payee_details");
        this.accSelection = page.locator("#sp_account");
        this.amount = page.locator("#sp_amount");
        this.inputDate = page.locator("#sp_date");
        this.inputDescription = page.locator("#sp_description");
        this.payBtn = page.locator("#pay_saved_payees");
        this.successAlert = page.locator("#alert_content > span");

    }
    async payBill(){
        await this.payee.selectOption("apple");
        await this.payeeDetail.click();
        await expect(this.payeeDetailAppear).toBeVisible();
        await this.accSelection.selectOption("6");
        await this.amount.type("5000");
        await this.inputDate.type("2022-09-10");
        await this.inputDescription.type("a beautiful description");
        await this.payBtn.click();
        await expect(this.successAlert).toBeVisible();
        await expect(this.successAlert).toContainText("The payment was successfully submitted");

    }
}
module.exports = { PaymentPage };