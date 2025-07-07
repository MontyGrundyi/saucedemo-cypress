class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  enterUserName(username) {
    cy.get('[data-test="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  assertErrorMessage() {
    cy.get('[data-test="error"]').should("include.text", "sadface");
  }
}

export default new LoginPage();
