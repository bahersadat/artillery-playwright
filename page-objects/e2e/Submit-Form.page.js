const {expect, Locator, Page} = require( '@playwright/test' );

class FeedbackPage{
    constructor(page){
        this.page = page;
        this.inputName = page.locator("#name");
        this.inputEmail = page.locator("#email");
        this.inputSubject = page.locator("#subject");
        this.inputComment = page.locator("#comment");
        this.clearBtn = page.locator('input[name="clear"]');
        this.submitBtn = page.locator('input[type="submit"]');
        this.feedbackTitle = page.locator('#feedback-title');
    }
    async fillFeedbackForm(name, email, subject, comment){
        await this.inputName.type(name);
        await this.inputEmail.type(email);
        await this.inputSubject.type(subject);
        await this.inputComment.type(comment);
    }
    async resetForm(){
        await this.clearBtn.click();
    }
    async submitForm(){
        await this.submitBtn.click();
    }
    async assertReset(){
        await expect(this.inputName).toBeEmpty();
        await expect(this.inputComment).toBeEmpty();
    }
    async assertFormSubmission(){
        await expect(this.feedbackTitle).toBeVisible();
    }

}
module.exports = { FeedbackPage };