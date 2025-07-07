class CheckOutPage {
  assertPageTitle() {
    cy.get('[data-test="title"]').should("contain.text", "Checkout");
  }

  enterCustomerInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinueBtn() {
    cy.get('[data-test="continue"]').click();
  }
}

export default new CheckOutPage();
