import { expect, test } from '@playwright/test';

test('institutional route keeps its navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Rejeitar não necessários' }).click();
  await expect(page.getByRole('navigation')).toBeVisible();
  await expect(page.getByRole('contentinfo').getByRole('link')).not.toHaveCount(0);
});
