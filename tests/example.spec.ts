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


//     mask: [page.locator('#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(3) > div.default-ltr-cache-b2rltc.ejqbulh1 > div.default-ltr-cache-7cljuy.ejqbulh3 > div'), 
//     page.locator('#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(4) > div.default-ltr-cache-51sor6.ejqbulh1 > div.default-ltr-cache-vgp0nn.ejqbulh3 > div'), 
//     page.locator('#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(6) > div.default-ltr-cache-51sor6.ejqbulh1 > div.default-ltr-cache-vgp0nn.ejqbulh3 > div > div > div.default-ltr-cache-wmj6sw.ecjxv8n5')]