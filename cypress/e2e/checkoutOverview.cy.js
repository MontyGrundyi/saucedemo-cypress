import LoginPage from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CartPage from "../support/pages/CartPage";
import checkOutPage from "../support/pages/checkOutPage";
import CheckoutOverviewPage from "../support/CheckoutOverviewPage";

describe("Assert cart page", () => {
  it("Should be able to add item to cart with standard user", () => {
    LoginPage.visit();
    LoginPage.enterUserName("standard_user");
    LoginPage.enterPassword("secret_sauce");
    LoginPage.clickLoginButton();

    InventoryPage.assertTitle();
    InventoryPage.addItemToCart();
    InventoryPage.assertItemAddedToCart();
    InventoryPage.clickOnCart();

    CartPage.assertCheckoutPageTitle();
    CartPage.assertCartItemName();
    CartPage.assertCartItemPrice();
    CartPage.checkOut();

    checkOutPage.assertPageTitle();
    checkOutPage.enterCustomerInfo("test", "test", "00100");
    checkOutPage.clickContinueBtn();

    CheckoutOverviewPage.assertPriceTotal();
    CheckoutOverviewPage.clickFinishBtn();
  });
});
