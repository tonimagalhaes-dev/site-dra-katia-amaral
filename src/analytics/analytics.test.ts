import { beforeEach, describe, expect, it, vi } from 'vitest';
import { trackVirtualPageView, trackWhatsAppContact } from './analytics';

describe('analytics contract', () => {
  beforeEach(() => {
    window.dataLayer = [];
    sessionStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-25T12:00:00Z'));
  });

  it('pushes one non-sensitive WhatsApp event per deliberate action', () => {
    expect(trackWhatsAppContact('hero')).toBe(true);
    expect(trackWhatsAppContact('hero')).toBe(false);
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer?.[0]).toMatchObject({
      event: 'whatsapp_contact',
      schema_version: 1,
      cta_position: 'hero',
    });
    expect(JSON.stringify(window.dataLayer)).not.toMatch(/message|phone|health/i);
  });

  it('pushes a sanitized virtual page view', () => {
    trackVirtualPageView('/otomodelacao', 'Otomodelação');
    expect(window.dataLayer?.[0]).toMatchObject({
      event: 'virtual_page_view',
      page_path: '/otomodelacao',
    });
  });
});
