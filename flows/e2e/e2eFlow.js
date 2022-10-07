const { expect } = require('@playwright/test');
const { LoginPage } = require ('../../page-objects/e2e/Login.page');

async function search( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();

    // search the word bank
    await loginPage.homePage.searchFor("bank");
    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
}
async function loginNegative( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();

    // login - negative scenario
    await loginPage.homePage.clickSignIn();
    await loginPage.login("invalid username", "invalid password");
    const response = await request.get('http://zero.webappsecurity.com/login.html');
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
    await loginPage.assertErrorMsg();
}

async function loginPositive( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();

    // login - positive scenario
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
    await loginPage.loggedInAssertion();
    await loginPage.logout(); 
}
async function accActivity( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
    // account activity
    await loginPage.navbar.clickOnTab("Account Activity");
    await loginPage.accountActivity.selectAccMethod("2");  // value 2 is checking account
    await loginPage.accountActivity.assertCheckingAcc();
    await loginPage.accountActivity.selectAccMethod("4");  // value 4 is loan account
    await loginPage.accountActivity.assertLoanAcc();
    await loginPage.accountActivity.selectAccMethod("6");  // value 6 is brokerage account
    await loginPage.accountActivity.assertBrokerageAcc();

}
async function currencyExchange( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
    // currency exchange
    await loginPage.navbar.clickOnTab("Pay Bills");
    await loginPage.currencyExchange.purchaseForeighnCash();

}
async function payment( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
    // payment - filling form and submission
    await loginPage.navbar.clickOnTab("Pay Bills");
    await loginPage.paymentPage.payBill();
}
async function resetFeedbackForm( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();

    // fill the form and reset
    await loginPage.feedbackPage.fillFeedbackForm("aRandName","randemail@gmail.com","RandomSubject","a nice comment");
    await loginPage.feedbackPage.resetForm();
    await loginPage.feedbackPage.assertReset();
}
async function submitFeedbackForm( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();

    //fill the form and click submit.
    await loginPage.feedbackPage.fillFeedbackForm("aRandName","randemail@gmail.com","RandomSubject","a nice comment");
    await loginPage.feedbackPage.assertFormSubmission();
}
async function transferFunds( page ) {
    const loginPage = new LoginPage( page );
    await loginPage.homePage.visit();
    // login
    await loginPage.accountActivity.wait(3000);
    await loginPage.homePage.clickSignIn();
    await loginPage.login("username", "password");
    await loginPage.homePage.hackToBypassSignIn();
    // transfer funds and assertion
    await loginPage.navbar.clickOnTab("Transfer Funds");
    await loginPage.transferFundsPage.transferFunds();
    await loginPage.transferFundsPage.clickOnSubmitBtn();
    await loginPage.transferFundsPage.assertBoardMsgMethod();
    await loginPage.transferFundsPage.clickOnSubmitBtn();
    await loginPage.transferFundsPage.assertSuccMethod();
}
module.exports = { loginNegative, loginPositive, search, accActivity, currencyExchange, payment,
     resetFeedbackForm, submitFeedbackForm, transferFunds };