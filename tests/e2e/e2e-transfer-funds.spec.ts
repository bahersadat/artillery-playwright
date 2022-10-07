import { test, expect } from "@playwright/test";
import {LoginPage} from "../../page-objects/e2e/Login.page";



test.describe("Transfer-funds automation", () => {
  // let homepage: HomePage;
  let loginPage: LoginPage;
  // let navbar: Navbar;
  // let transferFundsPage: TransferFundsPage;
  
  test.beforeEach(async ({ page }) => {
    //initializing variables
    loginPage = new LoginPage(page);



    //navigating to url and login functions
    await loginPage.homePage.visit();
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
  });

  test("transfer funds and assertion", async ({ page }) => {

    await loginPage.navbar.clickOnTab("Transfer Funds");
    await loginPage.transferFundsPage.transferFunds();
    await loginPage.transferFundsPage.clickOnSubmitBtn();
    await loginPage.transferFundsPage.assertBoardMsgMethod();
    await loginPage.transferFundsPage.clickOnSubmitBtn();
    await loginPage.transferFundsPage.assertSuccMethod();

  });
});
