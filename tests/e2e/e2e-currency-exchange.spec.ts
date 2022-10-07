import { test, expect } from "@playwright/test";
import {LoginPage} from "../../page-objects/e2e/Login.page";

test.describe("payment-curreny automation", () => {
  // let homepage: HomePage;
  let loginPage: LoginPage;
  // let navbar: Navbar;
  // let currencyExchange: CurrencyExchange;


  test.beforeEach(async ({ page }) => {
    // homepage = new HomePage(page);
    loginPage = new LoginPage(page);
    // navbar = new Navbar(page);
    // currencyExchange = new CurrencyExchange(page);

    //navigating to url and login functions
    await loginPage.homePage.visit();
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
  });

  
  test("currency-exchange and assertions", async ({ page }) => {
    
    await loginPage.navbar.clickOnTab("Pay Bills");
    await loginPage.currencyExchange.purchaseForeighnCash();

  });
});
