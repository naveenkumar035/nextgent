const puppeteer = require('puppeteer');

const login = async (url, username, password, usernameSelector, passwordSelector, loginButtonSelector) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url); // Use the provided URL

  await page.type(usernameSelector, username);
  await page.type(passwordSelector, password);
  await page.click(loginButtonSelector);

  await page.waitForNavigation();

  await page.screenshot({ path: `${username}.png` });

  return browser;
};

const loginMultipleAccounts = async (accounts) => {
  const browsers = [];
  for (const account of accounts) {
    const browser = await login(account.url, account.username, account.password, account.usernameSelector, account.passwordSelector, account.loginButtonSelector);
    browsers.push(browser);
  }
  return browsers;
};

module.exports = { loginMultipleAccounts };
