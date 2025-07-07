class CartPage {
  assertCartItemName() {
    cy.get('[data-test="inventory-item-name"]').should(
      "have.text",
      "Sauce Labs Backpack"
    );
  }

  assertCartItemPrice() {
    cy.get('[data-test="inventory-item-price"]').should("have.text", "$29.99");
  }

  checkOut() {
    cy.get('[data-test="checkout"]').click();
  }

  assertCheckoutPageTitle() {
    cy.get('[data-test="title"]').should("contain.text", "Your Cart");
  }
}

export default new CartPage();
