const { expect, Locator, Page } = require("@playwright/test");
const { BasePage } = require("./BasePage.page");


class ContactUsPage extends BasePage{

    constructor(page){
        super(page);
        this.submitBtn = page.locator('input[value="SUBMIT"]');
        this.assertBody = page.locator('body');
        this.firstName = page.locator('input[name="first_name"]');
        this.lasttName = page.locator('input[name="last_name"]');
        this.email = page.locator('input[name="email"]');
        this.message = page.locator('textarea[name="message"]');
        this.successfulSubmission = page.locator('h1');
        this.unsuccessfulSubmission = page.locator('body');
        
    }
    async navigateToContactUsUrl(){
        await super.baseUrl('Contact-Us/contactus.html');
    }
    async submitEmptyForm(){
        await this.submitBtn.click();
    }
    async assertEmptyForm(){
        await expect(this.assertBody).toContainText('Error: all fields are required');
    }
    async takeScrnshotFromFailedSubmission(){
        await this.assertBody.screenshot({path:"Data/webdriver-university/screenshots/empty.png"});
    }
    async fillTheForm(fname, lname, email, comment){
        await this.firstName.type(fname);
        await this.lasttName.type(lname);
        await this.email.type(email);
        await this.message.type(comment);
        await this.page.screenshot({path:"Data/webdriver-university/screenshots/filled-form.png", fullPage:true});
        await this.submitBtn.click();

    }
    async assertSuccessfulSubmission(){
        await expect(this.successfulSubmission).toContainText('Thank You for your Message!');
        await this.successfulSubmission.screenshot({path: "Data/webdriver-university/screenshots/success-message.png"});

    }
    async assertUnsuccessfulSubmission(){
        await expect(this.unsuccessfulSubmission).toContainText('all fields are required');
    }

    
}
module.exports = { ContactUsPage };