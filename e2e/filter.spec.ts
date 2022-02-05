import { test, expect } from '@playwright/test';

test('Filter', async ({ page }) => {
    await page.goto('/');
    const Filter = page.locator('#listFilter');
    await Filter.click();
    await page.locator('#react-select-filter-select-listbox > div > div:nth-child(2)').click();
    const ListItems = page.locator('ul[class^="Listatoms"] > li');
    await expect(ListItems).toHaveCount(45);
});
