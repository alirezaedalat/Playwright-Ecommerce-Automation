class ShopPage {
  constructor(page) {
    this.page = page;
    this.productButtons = page.locator('.btn-primary');
    this.products = page.locator('.text-center.col-4');
  }

  async addProductsToCart() {
    await this.productButtons.nth(0).click();
    await this.productButtons.nth(1).click();
  }

  async getProductCount() {
    return await this.products.count();
  }
}

module.exports = { ShopPage };
