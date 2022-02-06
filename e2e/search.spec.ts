import { test, expect } from '@playwright/test';

test('Search Field', async ({ page }) => {
  await page.goto('/');
  await page.fill('input#searchBox', 'Google+');
  const ListItems = page.locator('#__next > ul > li');
  await expect(ListItems).toHaveCount(2);
});

