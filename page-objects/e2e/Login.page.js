const { expect, Locator, Page } = require("@playwright/test");
const { AbstractPage } = require("../e2e/Abstract.page.js");
const { AccountActivity } = require("../e2e/Account-activity.page.js");
const { CurrencyExchange } = require("../e2e/Currency-exchange.page.js");
const { HomePage } = require("../e2e/Home.page.js");
const { PaymentPage } = require("../e2e/Payment.page.js");
const { FeedbackPage } = require("../e2e/Submit-Form.page.js");
const { TransferFundsPage } = require("../e2e/Transfer-funds.page.js");
const { Navbar } = require("../e2e/components/navbar.js");


class LoginPage {
  constructor(page) {
    this.page = page;
    this.abstract = new AbstractPage(page);
    this.accountActivity = new AccountActivity(page);
    this.currencyExchange = new CurrencyExchange(page);
    this.homePage = new HomePage(page);
    this.paymentPage = new PaymentPage(page);
    this.feedbackPage = new FeedbackPage(page);
    this.transferFundsPage = new TransferFundsPage(page);
    this.navbar = new Navbar(page);
    this.usernameInput = page.locator("#user_login");
    this.passwordInput = page.locator("#user_password");
    this.submitButton = page.locator('input[name="submit"]');
    this.errorMessage = page.locator(".alert-error");
    this.accountSummaryTab = page.locator('#account_summary_tab');
    this.loginForm = page.locator("#login_form");
  }

  //define login page methods
  async login(username, password){
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.submitButton.click();
  }
  async assertErrorMsg() {
    await expect(this.errorMessage).toContainText('Login and/or password are wrong.');
  }

  //asserting if we are logged in or not by locating an element to be visible.
  async loggedInAssertion() {
    await expect(this.accountSummaryTab).toBeVisible();
  }
  //a simple way to log out using url
  async logout() {
    await this.page.goto('http://zero.webappsecurity.com/logout.html');
    await expect(this.page).toHaveURL('http://zero.webappsecurity.com/index.html');
  }
  // visual testing methods
  async snapshotLoginForm(){
    await expect(await this.loginForm.screenshot()).toMatchSnapshot("login-form.png");
  }
  async snapshotErrorMsg(){
    await expect(await this.errorMessage.screenshot()).toMatchSnapshot("login-error.png");
  }
}

module.exports = { LoginPage };