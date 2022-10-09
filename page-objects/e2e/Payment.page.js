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
    // payee can be: Bank of America, Wells Fargo, Apple
    async payBill(payee, amount, date ){
        await this.payee.selectOption(payee);
        await this.payeeDetail.click();
        await expect(this.payeeDetailAppear).toBeVisible();
        await this.accSelection.selectOption("6");
        await this.amount.type(amount);
        await this.inputDate.type(date);
        await this.inputDescription.type("a beautiful description");
        await this.payBtn.click();
        await expect(this.successAlert).toBeVisible();
        await expect(this.successAlert).toContainText("The payment was successfully submitted");

    }
}
module.exports = { PaymentPage };