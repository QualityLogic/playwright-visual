import { test, expect } from '@playwright/test';

test('Visual regression - Masking', async ({ page }) => {
  await page.goto('https://www.nytimes.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The New York Times/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot({
    mask: [page.locator('//*[@id="app"]/div[1]/div/div')]
  })
});