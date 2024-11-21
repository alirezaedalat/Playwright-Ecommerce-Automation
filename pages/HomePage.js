class HomePage {
  constructor(page) {
    this.page = page;
    this.temperatureElement = page.locator('#temperature');
    this.buyMoisturizersButton = page.locator('text=Buy moisturizers');
    this.buySunscreensButton = page.locator('text=Buy sunscreens');
  }

  async navigate() {
    await this.page.goto('http://weathershopper.pythonanywhere.com/');
  }

  async checkTemperatureAndNavigate() {
    const temperatureText = await this.temperatureElement.textContent();
    const temperature = parseInt(temperatureText, 10);
    if (temperature < 19) {
      await this.buyMoisturizersButton.click();
      return 'moisturizers';
    } else {
      await this.buySunscreensButton.click();
      return 'sunscreens';
    }
  }
}

module.exports = { HomePage };
