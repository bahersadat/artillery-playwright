
async function FillForm( page ) {
    // go to webdriveruniversity/contactus
    await page.goto( 'http://webdriveruniversity.com/Contact-Us/contactus.html' );
    // fill the form
    await page.fill( "form#contact_form > input[name='first_name']", "Jhon" );
    await page.fill( "form#contact_form > input[name='last_name']", "Smith" );
    await page.fill( "form#contact_form > input[name='email']", "jhone_smith123@gmail.com");
    await page.fill( "form#contact_form > textarea[name='message']", "a nice comment" );
    await page.click( "div#form_buttons > input:nth-of-type(2)" );
};

module.exports = { FillForm };