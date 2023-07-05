import { test, expect } from '@playwright/test';

test('Visual regression - Masking', async ({ page }) => {
  await page.goto('https://www.nytimes.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The New York Times/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot({
    mask: [page.locator('//*[@id="app"]/div[1]/div/div'), page.locator('//*[@id="site-content"]/div/div[1]/div/div[1]/div/div[2]/div/div/div[1]/div/section/a/figure/div/div/video')]
  })
});