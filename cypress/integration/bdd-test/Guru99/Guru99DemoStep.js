import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Guru99Demo from './Guru99Demo'

let signedInAs = Guru99Demo.emailId;  

Given(`launch the URL & logged in successful with credentials: username as {string} and password as {string}`, (userName, password)=>{
    Guru99Demo.launchApplication();
    Guru99Demo.login(userName, password);
});

And(`User enters the valid credentials`, ()=>{
    Guru99Demo.loginSuccess();
});

Then(`User should log-in successful`, ()=>{
    Guru99Demo.validateloginSuccess(signedInAs);
});

Then(`User should be not logged-in successful`, ()=> {
    cy.get(Guru99Demo.logError).should('have.text','Enter your Email address and password correct');
});

Then(`Validate the Home Page`, ()=>{
    cy.get(Guru99Demo.homeTab).should('be.visible');
});

Then(`Validate the Error page`, ()=>{
    cy.get(Guru99Demo.logError).should('be.visible');
});

When(`user access the Request Quotation`, ()=> {
    cy.get(Guru99Demo.requestQuotation).click();
})

Then(`Request Quotation page should be displayed`, ()=> {
    cy.get(Guru99Demo.selectedTab).should('have.text', 'Request Quotation');
}); 

And(`Validate the Request Quotation page`, ()=> {
    cy.get(`select#quotation_breakdowncover`).should('be.visible');
    cy.get(`input[value='Reset form']`).should('be.visible');
    cy.get(`input[value='Save Quotation']`).should('be.visible');
});

When(`user access the Retrieve Quotation`, ()=> {
    cy.get(Guru99Demo.retrieveQuotation).click();
});

Then(`Retrieve Quotation page should be displayed`, ()=> {
    cy.get(Guru99Demo.selectedTab).should('have.text', 'Retrieve Quotation');
});

And(`Validate the Retrieve Quotation page`, ()=> {
    cy.get(`input[placeholder='identification number']`).should('be.visible');
    cy.get(`input[value='Retrieve']`).should('be.visible');
});

When(`user access the Profile Page`, ()=> {
    cy.get(Guru99Demo.profile).click();
});

Then(`Profile page should be displayed`, ()=> {
    cy.get(Guru99Demo.selectedTab).should('have.text', 'Profile');
});

And(`Validate the Profile Page section`, ()=> {
    let profileValues = [`Title:`, `Firstname:`, `Surname:`,`Phone:`,`Dataofbirth:`,`License type:`,`License period:`,`Occupation:`,`Driver History:`,`ADDRESS:`],i=0;
    cy.xpath(`//div[@id='tabs-4']//strong[1]`).should('have.text', 'Title:');
});

When(`user access the Edit Profile Page`, ()=> {
    cy.get(Guru99Demo.editProfile).click();
});

Then(`Edit Profile page should be displayed`, ()=> {
    cy.get(Guru99Demo.selectedTab).should('have.text', 'Edit Profile');
});

And(`Validate the Edit Profile Page section`, ()=> {
    cy.get(`h1`).should('have.text', 'Editing user profile');
});

