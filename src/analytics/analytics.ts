import { captureCampaignAttribution, getCampaignAttribution } from './attribution';
import type { CtaPosition, TrackingEvent } from './types';

const recentClicks = new Map<CtaPosition, number>();
const GOOGLE_ADS_WHATSAPP_CONVERSION =
  'AW-17354756555/Zd1wCK78jocbEMujstNA';
const createEventId = () =>
  globalThis.crypto?.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export function pushTrackingEvent(event: TrackingEvent) {
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(event);
  } catch {
    // Analytics is intentionally non-blocking.
  }
}

export function trackWhatsAppContact(position: CtaPosition) {
  const now = Date.now();
  if (now - (recentClicks.get(position) ?? 0) < 750) return false;
  recentClicks.set(position, now);
  captureCampaignAttribution();
  const trackingEvent = {
    event: 'whatsapp_contact',
    schema_version: 1,
    event_id: createEventId(),
    cta_position: position,
    page_path: window.location.pathname,
    campaign: getCampaignAttribution(),
  } satisfies TrackingEvent;
  pushTrackingEvent(trackingEvent);
  try {
    window.gtag?.('event', 'whatsapp_click', {
      event_id: trackingEvent.event_id,
      cta_position: position,
      ...trackingEvent.campaign,
    });
    window.gtag?.('event', 'conversion', {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
      event_id: trackingEvent.event_id,
      cta_position: position,
    });
    window.fbq?.(
      'track',
      'Contact',
      { cta_position: position },
      { eventID: trackingEvent.event_id },
    );
  } catch {
    // Vendor failures are intentionally non-blocking.
  }
  return true;
}

export function trackVirtualPageView(pagePath: string, pageTitle: string) {
  const trackingEvent = {
    event: 'virtual_page_view',
    schema_version: 1,
    event_id: createEventId(),
    page_path: pagePath,
    page_title: pageTitle,
  } satisfies TrackingEvent;
  pushTrackingEvent(trackingEvent);
  try {
    window.gtag?.('event', 'page_view', {
      event_id: trackingEvent.event_id,
      page_path: pagePath,
      page_title: pageTitle,
    });
    window.fbq?.('track', 'PageView', {}, { eventID: trackingEvent.event_id });
  } catch {
    // Vendor failures are intentionally non-blocking.
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => window.gtag?.('event', action, { event_category: category, event_label: label, value });

export const reportWhatsappConversion = (whatsappUrl: string) => {
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};
