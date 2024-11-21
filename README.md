# Playwright-Ecommerce-Automation

## 🌟 Overview
This project automates end-to-end testing for the **Weather Shopper** web application using **Playwright**. The framework is designed with the **Page Object Model (POM)** design pattern, providing modular and reusable components.

---

## 📋 Features
- Comprehensive test coverage for product selection, cart validation, and checkout.
- Modular design with reusable components using Page Object Model.
- Cross-browser compatibility (Chromium, Firefox, WebKit).
- Fully documented setup and execution instructions.

---

## 🛠️ Prerequisites
1. **Node.js**: Install from [Node.js Official Website](https://nodejs.org/).
2. **Playwright**: Installed automatically via `npm install`.

---

## 🚀 Setup Instructions

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Playwright-Ecommerce-Automation
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Tests
- **Run All Tests**:
  ```bash
  npx playwright test
  ```

- **Run Specific Tests**:
  ```bash
  npx playwright test tests/weatherShopper/endToEnd.spec.js
  ```

---

## 🧪 Test Structure
### Directory Layout
```
Playwright-Ecommerce-Automation/
├── tests/
│   ├── weatherShopper/
│   │   ├── endToEnd.spec.js         # Main end-to-end tests
├── pages/
│   ├── HomePage.js                 # Page Object for Home
│   ├── ShopPage.js                 # Page Object for Shop
│   ├── CartPage.js                 # Page Object for Cart
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project metadata and dependencies
├── README.md                       # Documentation
└── node_modules/                   # Node.js dependencies
```

---

## 🧑‍💻 Contribution
Feel free to fork this repository and submit pull requests. For queries or suggestions, reach out to:
**[alirezaaedalat@gmail.com](mailto:alirezaaedalat@gmail.com)**.

---

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
