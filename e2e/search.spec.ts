import { test, expect } from '@playwright/test';

test('Search Field', async ({ page }) => {
  await page.goto('/');
  await page.fill('input#searchBox', 'Inbox by Gmail');
  const ListItems = page.locator('#__next > ul > li');
  await expect(ListItems).toHaveCount(2);
});

