import { test, expect } from '@playwright/test';

test('Visual regression - Masking', async ({ page }) => {
  await page.goto('https://www.netflix.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Netflix/);

  // Perform visual comparison
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole('presentation')]
  })
});