import { test, expect } from '@playwright/test';

import graveyard from '../graveyard.json';

test('Filter', async ({ page }) => {
    await page.goto('/');
    const Filter = page.locator('#listFilter');
    await Filter.click();
    await page.locator('#react-select-filter-select-listbox > div > div:nth-child(2)').click();
    const ListItems = page.locator('#__next > ul > li');
    await expect(ListItems).toHaveCount(Number(graveyard.filter((item) => {
        return item.type === 'app';
    }).length) + 1);
});
