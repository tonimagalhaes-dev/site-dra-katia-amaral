import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { WhatsAppCta } from './WhatsAppCta';

describe('WhatsAppCta', () => {
  it('is a resilient native link and records its position', async () => {
    window.dataLayer = [];
    renderWithProviders(<WhatsAppCta position="hero">Conversar</WhatsAppCta>);
    const link = screen.getByRole('link', { name: 'Conversar' });
    expect(link).toHaveAttribute('href', expect.stringContaining('https://wa.me/'));
    expect(link).toHaveAttribute('target', '_blank');
    await userEvent.click(link);
    expect(window.dataLayer?.at(-1)).toMatchObject({ event: 'whatsapp_contact', cta_position: 'hero' });
  });
});
