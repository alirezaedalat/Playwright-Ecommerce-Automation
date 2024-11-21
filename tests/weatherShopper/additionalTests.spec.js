const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { ShopPage } = require('../../pages/ShopPage');
const { CartPage } = require('../../pages/CartPage');

test.describe('Additional Test Scenarios for Weather Shopper', () => {
  test('Validate navigation based on temperature', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    const shopType = await homePage.checkTemperatureAndNavigate();
    expect(['moisturizers', 'sunscreens']).toContain(shopType);
  });

  test('Validate product details in the shop', async ({ page }) => {
    const homePage = new HomePage(page);
    const shopPage = new ShopPage(page);
    await homePage.navigate();
    await homePage.checkTemperatureAndNavigate();
    const productCount = await shopPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
  });

  test('Verify cart item prices and total', async ({ page }) => {
    const homePage = new HomePage(page);
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    await homePage.navigate();
    await homePage.checkTemperatureAndNavigate();
    await shopPage.addProductsToCart();
    await cartPage.validateCartItems();
    await cartPage.validateCartTotal();
  });
});
