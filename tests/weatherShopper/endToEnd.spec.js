const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { ShopPage } = require('../../pages/ShopPage');
const { CartPage } = require('../../pages/CartPage');

test('Weather Shopper End-to-End Test', async ({ page }) => {
  const homePage = new HomePage(page);
  const shopPage = new ShopPage(page);
  const cartPage = new CartPage(page);

  // Navigate to the application
  await homePage.navigate();

  // Select products based on temperature
  await homePage.checkTemperatureAndNavigate();

  // Add products to the cart
  await shopPage.addProductsToCart();

  // Validate cart items
  await cartPage.validateCartItems();
});
