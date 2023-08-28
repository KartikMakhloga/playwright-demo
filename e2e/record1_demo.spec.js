import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password123"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await page.locator('#item_1_img_link').click();
  await page.getByText('Sauce Labs Onesie').click();
  await page.getByText('Rib snap infant onesie for the junior automation engineer in development. Reinfo').click();
  await page.getByRole('img', { name: 'Sauce Labs Onesie' }).click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('div').filter({ hasText: /^Swag Labs$/ }).first().click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});