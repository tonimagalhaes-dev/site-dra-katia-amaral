import { expect, test } from '@playwright/test';

test('campaign mobile journey has no horizontal overflow', async ({ page }) => {
  await page.goto('/otomodelacao');
  await page.getByRole('button', { name: 'Rejeitar não necessários' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('otomodelação');
  await expect(page.getByRole('banner').getByRole('link')).toHaveCount(0);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  const heroCta = page.locator('[data-cta-position="hero"]');
  await expect(heroCta).toBeVisible();

  await page.locator('[data-cta-position="results"]').scrollIntoViewIfNeeded();
  await expect(heroCta).not.toBeInViewport();
  await expect(page.getByRole('banner').getByRole('link', { name: 'WhatsApp' })).toBeVisible();

  await heroCta.scrollIntoViewIfNeeded();
  await expect(heroCta).toBeVisible();
  await expect(page.getByRole('banner').getByRole('link')).toHaveCount(0);
});
