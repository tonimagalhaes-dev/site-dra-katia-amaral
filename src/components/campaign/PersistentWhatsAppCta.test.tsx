import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { PersistentWhatsAppCta } from './PersistentWhatsAppCta';

describe('PersistentWhatsAppCta', () => {
  it('keeps a usable fallback when IntersectionObserver is unavailable', () => {
    renderWithProviders(<PersistentWhatsAppCta />);
    expect(screen.getByRole('link', { name: 'Conversar sobre otomodelação' })).toBeVisible();
  });
});
