import { test, expect } from '@playwright/test';

test('no image site - visual comparison', async ({ page }) => {
  await page.goto('http://www.blankwebsite.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Blank/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot()
});