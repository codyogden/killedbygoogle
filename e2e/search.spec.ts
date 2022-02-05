import { test, expect } from '@playwright/test';

test('Search Field', async ({ page }) => {
  await page.goto('/');
  await page.fill('input#searchBox', 'Google+');
  const ListItems = page.locator('ul[class^="Listatoms"] > li');
  await expect(ListItems).toHaveCount(2);
});

