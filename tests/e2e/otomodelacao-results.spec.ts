import { expect, test } from '@playwright/test';

test('results controls and campaign footer remain usable', async ({ page }) => {
  await page.goto('/otomodelacao');
  await page.getByRole('button', { name: 'Rejeitar não necessários' }).click();
  await page.getByText('Resultados em diferentes casos').scrollIntoViewIfNeeded();
  await expect(page.getByText('Caso 1 de 9')).toBeVisible();
  const next = page.getByRole('button', { name: 'Próximo caso' });
  await next.click();
  await expect(page.getByText('Caso 2 de 9')).toBeVisible();
  await expect(page.getByText('Os resultados podem variar de pessoa para pessoa.')).toBeVisible();
  const footer = page.getByRole('contentinfo');
  await expect(footer.getByRole('link')).toHaveCount(1);
  await expect(footer.getByRole('link', { name: /abrir endereço no google maps/i })).toHaveAttribute(
    'href',
    /google\.com\/maps/,
  );
});
