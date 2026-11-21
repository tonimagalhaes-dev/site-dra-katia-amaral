import { expect, test } from '@playwright/test';

test('otomodelação uses the site navigation and keeps its mobile CTAs usable', async ({ page }) => {
  await page.goto('/otomodelacao');
  await page.getByRole('button', { name: 'Rejeitar não necessários' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Otomodelação');
  const header = page.getByRole('banner');
  await expect(header.getByRole('link', { name: /Kedem Beauty/ })).toHaveAttribute('href', '/');
  const mobileMenu = header.getByRole('button', { name: 'Abrir menu' });
  if (await mobileMenu.isVisible()) {
    await mobileMenu.click();
    await expect(header.getByRole('link', { name: 'Sobre' })).toBeVisible();
    await header.getByRole('button', { name: 'Fechar menu' }).click();
  } else {
    await expect(header.getByRole('link', { name: 'Sobre' })).toBeVisible();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth)
  );

  const heroCta = page.getByRole('link', { name: 'Quero avaliar meu caso' });
  const finalCta = page.getByRole('link', { name: 'Consultar valores e agendar' });
  await expect(heroCta).toBeInViewport();
  await finalCta.scrollIntoViewIfNeeded();
  await expect(finalCta).toBeInViewport();
  await expect(finalCta).toHaveAttribute('href', /wa\.me.*valores/);
});
