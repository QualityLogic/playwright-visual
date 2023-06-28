import { test, expect } from '@playwright/test';

test('has title - visual comparison', async ({ page }) => {
  await page.goto('https://getbootstrap.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bootstrap/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot()
});