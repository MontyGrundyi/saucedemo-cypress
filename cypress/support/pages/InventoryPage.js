class InventoryPage {
  addItemToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  assertItemInCart() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
  }

  assertTitle() {
    cy.get('[data-test="title"]').should("have.text", "Products");
  }

  assertItemAddedToCart() {
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(Number(text)).to.be.greaterThan(0);
      });
  }

  clickOnCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}
export default new InventoryPage();
