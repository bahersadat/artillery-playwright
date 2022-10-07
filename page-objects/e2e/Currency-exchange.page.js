const {expect, Locator, Page} = require( "@playwright/test" );

class CurrencyExchange{
    constructor(page){
        this.page = page;
        this.PurchaseForeighnCurrLink = page.locator("#tabs > ul > li:nth-of-type(3)");
        this.assertPurchaseForeighnCurrLink = page.locator("//h2[contains(text(), 'Purchase foreign currency cash')]");
        this.currency = page.locator("#pc_currency");
        this.assertSellRate = page.locator("#sp_sell_rate");
        this.amount = page.locator("#pc_amount");
        this.UScurrency = page.locator("#pc_inDollars_true");
        this.calcCost = page.locator("#pc_calculate_costs");
        this.assertConvAmount = page.locator("#pc_conversion_amount");
        this.purchaseBtn = page.locator("#purchase_cash");
        this.assertSuccExchange = page.locator("#alert_content");

    }
    async purchaseForeighnCash(){
        await this.PurchaseForeighnCurrLink.click();
        await expect(this.assertPurchaseForeighnCurrLink).toBeVisible();
        await this.currency.selectOption("AUD");
        await expect(this.assertSellRate).toBeVisible();
        await this.amount.type("5000");
        await this.UScurrency.click();
        await this.calcCost.click();
        await expect(this.assertConvAmount).toBeVisible();
        await this.purchaseBtn.click();
        await expect(this.assertSuccExchange).toBeVisible();
        await expect(this.assertSuccExchange).toContainText("Foreign currency cash was successfully purchased");
        
    }
}
module.exports = { CurrencyExchange };