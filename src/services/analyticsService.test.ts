import { beforeEach, describe, expect, it, vi } from 'vitest';
import { analyticsService } from './analyticsService';

describe('analyticsService without GTM', () => {
  beforeEach(() => {
    window.gtag = vi.fn();
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  it('sends institutional WhatsApp clicks directly to Google Analytics', () => {
    analyticsService.trackWhatsAppClick({
      source: 'footer',
      procedureName: 'otomodelacao',
    });

    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'whatsapp_click',
      expect.objectContaining({
        event_source: 'footer',
        procedure_name: 'otomodelacao',
      }),
    );
  });

  it('opens conversions immediately without waiting for GTM', () => {
    analyticsService.trackConversion('https://wa.me/5511942242893');

    expect(window.open).toHaveBeenCalledWith(
      'https://wa.me/5511942242893',
      '_blank',
      'noopener,noreferrer',
    );
  });
});
