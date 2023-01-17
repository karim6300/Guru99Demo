/// <reference types="cypress" />

class Guru99Demo {
  static url = `https://demo.guru99.com/insurance/v1/index.php`;
  static emailId = `testuser@cypresstest.com`;
  static invalidEmail = `testuser123@cypresstest.com`
  static password = `Hello@1234`

  static emailTxt = `input[id='email']`;
  static passwordTxt = `input[id='password']`;
  static loginBtn = `input[value='Log in'][name='submit']`;

  static logError = `span b`;
  static loggedIn = `div[class='content'] h4`;
  static selectedTab = `ul li[aria-selected='true'] a`

  static homeTab = `ul li[id='home'] a`
  static requestQuotation = `ul li[id='newquote'] a`
  static retrieveQuotation = `ul li[id='retrieve'] a`
  static profile = `ul li[id='profile'] a`
  static editProfile = `ul li[id='editprofile'] a`
  
  static pageHeader  = `div#tabs-1 h2`;
  static logOut = `input[value='Log out']`
  
  static launchApplication(){
    cy.visit(this.url)
  }

  static validateloginSuccess(signedInAs){
    cy.get(this.loggedIn).should('have.text', signedInAs);
  }

  static login(userName, password){
    cy.get(this.emailTxt).type(userName);
    cy.get(this.passwordTxt).type(password);

    cy.on('uncaught:exception', (err, runnable) => { return false; });
    cy.get(this.loginBtn).click();
    cy.wait(2000);
  } 
}

export default Guru99Demo;