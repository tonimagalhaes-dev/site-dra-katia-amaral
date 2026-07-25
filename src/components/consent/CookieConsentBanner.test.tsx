import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CONSENT_STORAGE_KEY } from '@/analytics/consent';
import { renderWithProviders } from '@/test/render';
import { CookieConsentBanner } from './CookieConsentBanner';

describe('CookieConsentBanner', () => {
  beforeEach(() => {
    localStorage.clear();
    window.gtag = vi.fn();
    document.querySelectorAll('[data-meta-pixel]').forEach((node) => node.remove());
  });

  it('rejects optional cookies without loading Meta', async () => {
    renderWithProviders(<CookieConsentBanner />);
    await userEvent.click(screen.getByRole('button', { name: 'Rejeitar não necessários' }));
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? '{}')).toEqual({
      analytics: false,
      advertising: false,
    });
    expect(document.querySelector('[data-meta-pixel]')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Preferências de cookies' })).not.toBeInTheDocument();
  });

  it('allows category configuration', async () => {
    renderWithProviders(<CookieConsentBanner />);
    await userEvent.click(screen.getByRole('button', { name: 'Configurar' }));
    await userEvent.click(screen.getByRole('checkbox', { name: /análise/i }));
    await userEvent.click(screen.getByRole('button', { name: 'Salvar escolhas' }));
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? '{}')).toEqual({
      analytics: true,
      advertising: false,
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Preferências de cookies' })).not.toBeInTheDocument();
  });
});
