import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/e2e/Login.page.js";

//create a describe block
test.describe("feedback form", () => {
  let loginPage: LoginPage;


  //test.beforeEach
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    // feedbackPage = new FeedbackPage(page);
    
    await loginPage.homePage.visit();
    await loginPage.homePage.clickOnFeedbackLink();
  });
  test("reset feedback form", async ({ page }) => {
    //fill the form and reset
    await loginPage.feedbackPage.fillFeedbackForm("aRandName","randemail@gmail.com","RandomSubject","a nice comment");
    await loginPage.feedbackPage.resetForm();
    await loginPage.feedbackPage.assertReset();
  });
  test("submit feedback form", async ({ page }) => {
    //fill the form and click submit.
    await loginPage.feedbackPage.fillFeedbackForm("aRandName","randemail@gmail.com","RandomSubject","a nice comment");
    await loginPage.feedbackPage.assertFormSubmission();

  });
});
