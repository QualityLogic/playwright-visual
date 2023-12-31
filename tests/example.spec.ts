import { test, expect } from '@playwright/test';

test('has title - visual comparison', async ({ page }) => {
  await page.goto('https://playwright.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot()
});

test('get started link - visual comparison', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot()
});
