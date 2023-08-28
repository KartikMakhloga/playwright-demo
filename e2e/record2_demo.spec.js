const {test,expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test("record demo 2",async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('about:blank');
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('#item_4_title_link').click();
  await page.getByRole('img', { name: 'Sauce Labs Fleece Jacket' }).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.getByText('Sauce Labs Fleece Jacket').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').dblclick();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromis').click();
  await page.locator('div:nth-child(2) > .inventory_item_description').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
});