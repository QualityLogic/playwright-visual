import { test, expect } from '@playwright/test';

test('no image site - visual comparison', async ({ page }) => {
  await page.goto('http://www.blankwebsite.com');

  // Perform visual comparison
  await expect(page).toHaveScreenshot()
});