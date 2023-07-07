import { test, expect } from '@playwright/test';

test('Visual regression - Masking', async ({ page }) => {
  //Testing NetFlix
  await page.goto('https://www.netflix.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Netflix/);
  
  // Perform visual comparison, while excluding the dynamic elements
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole('presentation')]
  })
});