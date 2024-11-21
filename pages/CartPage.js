class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item');
    this.cartTotal = page.locator('.total');
  }

  async validateCartItems() {
    const itemCount = await this.cartItems.count();
    if (itemCount < 2) {
      throw new Error('Not enough items in the cart');
    }
  }

  async validateCartTotal() {
    const prices = await this.page.$$eval('.cart-item .price', (priceElements) =>
      priceElements.map((el) => parseFloat(el.innerText))
    );
    const total = prices.reduce((sum, val) => sum + val, 0);
    const displayedTotal = parseFloat(await this.cartTotal.textContent());
    if (total !== displayedTotal) {
      throw new Error(`Cart total mismatch: expected ${total}, got ${displayedTotal}`);
    }
  }
}

module.exports = { CartPage };
