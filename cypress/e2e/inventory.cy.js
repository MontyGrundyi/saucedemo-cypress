import InventoryPage from "../support/pages/InventoryPage";
import LoginPage from "../support/pages/LoginPage";

describe("Add items to cart", () => {
  it("Should be able to add item to cart with standard user", () => {
    LoginPage.visit();
    LoginPage.enterUserName("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLoginButton();

    InventoryPage.assertTitle();
    InventoryPage.addItemToCart();
    InventoryPage.assertItemAddedToCart();
    InventoryPage.clickOnCart();
  });
});
