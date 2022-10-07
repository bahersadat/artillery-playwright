// const { test } = require('@playwright/test');
const { ContactUsPage } = require('../../page-objects/webdriver-university/ContactUs.page');


async function EmptyForm(page) {
        // modify page
        const contactUsPage = new ContactUsPage(page);
        // visit webpage
        await contactUsPage.navigateToContactUsUrl();

        await contactUsPage.submitEmptyForm();
        await contactUsPage.assertEmptyForm();
        await contactUsPage.takeScrnshotFromFailedSubmission();
}
async function FillForm( page ) {
    // modify page
    const contactUsPage = new ContactUsPage(page);
    // visit webpage
    await contactUsPage.navigateToContactUsUrl();

    await contactUsPage.fillTheForm("Brock", "Lesner", "brocklesner@gmail.com", "Brock Lesner is not a champion");
    await contactUsPage.assertSuccessfulSubmission();
}
async function PartialFillForm( page ) {
    // modify page
    const contactUsPage = new ContactUsPage(page);
    // visit webpage
    await contactUsPage.navigateToContactUsUrl();

    await contactUsPage.fillTheForm("Lolo", "Khan", "", "");
    await contactUsPage.assertUnsuccessfulSubmission();
}
module.exports = { EmptyForm, FillForm, PartialFillForm };