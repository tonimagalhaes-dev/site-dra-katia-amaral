import { screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { PersistentWhatsAppCta } from './PersistentWhatsAppCta';

describe('PersistentWhatsAppCta', () => {
  const originalObserver = globalThis.IntersectionObserver;

  afterEach(() => {
    globalThis.IntersectionObserver = originalObserver;
  });

  it('keeps a usable fallback when IntersectionObserver is unavailable', () => {
    globalThis.IntersectionObserver = undefined as unknown as typeof IntersectionObserver;
    renderWithProviders(<PersistentWhatsAppCta />);
    expect(screen.getByRole('link', { name: 'Tirar dúvidas no WhatsApp' })).toBeVisible();
  });

  it('starts hidden when visibility can be observed', () => {
    const hero = document.createElement('a');
    hero.id = 'hero-whatsapp-cta';
    const final = document.createElement('section');
    final.id = 'cta-final';
    document.body.append(hero, final);

    renderWithProviders(<PersistentWhatsAppCta />);

    expect(screen.queryByRole('link', { name: 'Tirar dúvidas no WhatsApp' })).not.toBeInTheDocument();
  });
});
