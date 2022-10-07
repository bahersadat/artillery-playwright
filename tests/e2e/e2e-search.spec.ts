import {test, expect} from '@playwright/test';
import {HomePage} from '../../page-objects/e2e/Home.page';


test.describe("e2e search automation", () => {

test("search using keyboard key", async ({page}) => {
    let homePage: HomePage = new HomePage(page);

    await homePage.visit();
    await homePage.searchFor("bank");

    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
});

});
