class CheckOutOverviewPage {
  assertPriceTotal() {
    cy.contains("Price Total");
  }

  clickFinishBtn() {
    cy.get("#finish").click();
  }
}

export default new CheckOutOverviewPage();
