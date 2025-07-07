import LoginPage from "../support/pages/LoginPage";

describe("Login Tests", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("Should log in successfully with standard user", () => {
    cy.contains("Swag Labs");
    LoginPage.enterUserName("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLoginButton();
  });

  it("Should show error for invalid login", () => {
    cy.contains("Swag Labs");
    LoginPage.enterUserName("error_user");
    LoginPage.enterPassword("erruser");
    LoginPage.clickLoginButton();
    LoginPage.assertErrorMessage();
  });
});
