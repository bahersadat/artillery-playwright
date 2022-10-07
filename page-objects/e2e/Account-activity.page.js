const {expect, Locator, Page} = require( "@playwright/test");
const {AbstractPage} = require( "./Abstract.page");

class AccountActivity extends AbstractPage{
    constructor(page){
        super(page);
        this.selectAcc = page.locator("#aa_accountId");
        this.assertAccTbl = page.locator("#all_transactions_for_account tbody tr");
        this.assertNoResult = page.locator(".well");
    }

    async selectAccMethod(value){
        await this.selectAcc.selectOption(value);
    }
    async assertCheckingAcc(){
        await expect(this.assertAccTbl).toHaveCount(3);
    }
    async assertLoanAcc(){
        await expect(this.assertAccTbl).toHaveCount(2);
    }
    async assertBrokerageAcc(){
        await expect(this.assertNoResult).toBeVisible();
    }

}
module.exports = { AccountActivity };