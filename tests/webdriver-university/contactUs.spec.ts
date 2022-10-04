import {test, expect} from '@playwright/test';
import {ContactUsPage} from '../../page-objects/webdriver-university/ContactUs.page';

test.describe("Contact Us Page Automations", () => {
    //declaring Variables (for page objects)
    let contactUsPage: ContactUsPage;

    
    test.beforeEach(async ({page}) => {
        //initializing variables
        contactUsPage = new ContactUsPage(page);

        //essential functions before each tests
        await contactUsPage.navigateToContactUsUrl();

    })
    test('asserting an empty form submission', async({page}) => {
        await contactUsPage.submitEmptyForm();
        await contactUsPage.assertEmptyForm();
        await contactUsPage.takeScrnshotFromFailedSubmission();
    });

    test('filling form and asserting', async({page}) => {
        await contactUsPage.fillTheForm("Brock", "Lesner", "brocklawda@gmail.com", "Brock Lesner is not a champion");
        await contactUsPage.assertSuccessfulSubmission();
        
    });

    test('filling first Name and last name and assertion', async({page}) => {
        await contactUsPage.fillTheForm("Lolo", "Khan", "", "");
        await contactUsPage.assertUnsuccessfulSubmission();
    });
    
})