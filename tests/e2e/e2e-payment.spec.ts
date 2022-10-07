import { test, expect } from "@playwright/test";
import {LoginPage} from "../../page-objects/e2e/Login.page";


test.describe("payment-automation", () => {
  // let homepage: HomePage;
  let loginPage: LoginPage;
  // let paymentPage: PaymentPage;
  // let navbar: Navbar;

  //login
  test.beforeEach(async ({ page }) => {
    // homepage = new HomePage(page);
    loginPage = new LoginPage(page);
    // paymentPage = new PaymentPage(page);
    // navbar = new Navbar(page);

    //navigating to url and login functions
    await loginPage.homePage.visit();
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
  });


  test("payment- filling form and submission", async ({ page }) => {

    await loginPage.navbar.clickOnTab("Pay Bills");
    await loginPage.paymentPage.payBill();

  });
});
