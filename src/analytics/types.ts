/* eslint-disable no-unused-vars */
export type CtaPosition =
  | 'header'
  | 'hero'
  | 'results'
  | 'persistent'
  | 'final';

export interface CampaignAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

export interface WhatsAppContactEvent {
  event: 'whatsapp_contact';
  schema_version: 1;
  event_id: string;
  cta_position: CtaPosition;
  page_path: string;
  campaign?: CampaignAttribution;
}

export interface VirtualPageViewEvent {
  event: 'virtual_page_view';
  schema_version: 1;
  event_id: string;
  page_path: string;
  page_title: string;
}

export type TrackingEvent = WhatsAppContactEvent | VirtualPageViewEvent;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}
