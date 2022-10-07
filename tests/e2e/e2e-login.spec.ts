import { test, expect } from "@playwright/test";
import {LoginPage} from '../../page-objects/e2e/Login.page';


test.describe.parallel("Login / Logout flow", () => {
  let loginPage: LoginPage;
  // let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    // homePage = new HomePage(page);

    await loginPage.homePage.visit();  
  });
  //negative scenario
  test("negative scenario for login", async ({ page, request }) => {
    await loginPage.homePage.clickSignIn(); //POM
    await loginPage.login("invalid username", "invalid password"); //POM
    const response = await request.get('http://zero.webappsecurity.com/login.html');
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    await loginPage.assertErrorMsg();  // POM

  });

  //positive scenario + Logout
  test("positive scenario login and logout", async ({ page }) => {
    await loginPage.homePage.clickSignIn();                      //POM
    await loginPage.login("username", "password");     //POM
    await loginPage.homePage.hackToBypassSignIn();               //POM
    await loginPage.loggedInAssertion();               //POM
    await loginPage.logout();                          //POM
  });
});
