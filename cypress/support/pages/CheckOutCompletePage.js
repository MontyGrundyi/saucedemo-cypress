class CheckOutCompletePage {
  assertThankYouMessage() {
    cy.get('[data-test="complete-header"]').should("contain.text", "Thank you");
  }

  clickReturnToProductsBtn() {
    cy.get('[data-test="back-to-products"]').click();
  }
}

export default new CheckOutCompletePage();
