import { test, expect } from  "@playwright/test";
import {LoginPage} from "../../page-objects/e2e/Login.page";




test.describe("account-activity automation", () => {
  let loginPage: LoginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);


    //navigating to url and login functions
    await loginPage.homePage.visit();
    await loginPage.accountActivity.wait(3000);               // from AbstractPage
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
  
  });

  test("asserting accounts", async ({ page }) => {
    await loginPage.navbar.clickOnTab("Account Activity");
    await loginPage.accountActivity.selectAccMethod("2");  // value 2 is checking account
    await loginPage.accountActivity.assertCheckingAcc();
    await loginPage.accountActivity.selectAccMethod("4");  // value 4 is loan account
    await loginPage.accountActivity.assertLoanAcc();
    await loginPage.accountActivity.selectAccMethod("6");  // value 6 is brokerage account
    await loginPage.accountActivity.assertBrokerageAcc();

  });
});
