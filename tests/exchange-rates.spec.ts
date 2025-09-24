import { test, expect } from '@playwright/test';

test('renders exchange rates and converts value', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page.getByText('Foreign Exchange Rates')).toBeVisible();

  await page.getByLabel(/Amount in CZK/i).fill('100');

  await page.getByLabel('Currency').click();

  await page.getByRole('option', { name: 'USD' }).click();

  await expect(page.getByTestId('converted-result')).toHaveText(/^\d+(\.\d{1,4})?$/);
});
