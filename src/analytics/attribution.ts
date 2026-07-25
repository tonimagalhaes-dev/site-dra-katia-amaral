import type { CampaignAttribution } from './types';

const STORAGE_KEY = 'campaign_attribution_v1';
const ALLOWED_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
] as const;

const sanitize = (value: string) =>
  value.replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 100); // eslint-disable-line no-control-regex

export function captureCampaignAttribution(search = window.location.search) {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as CampaignAttribution;
    const params = new URLSearchParams(search);
    const attribution: CampaignAttribution = {};
    for (const key of ALLOWED_KEYS) {
      const value = params.get(key);
      if (value) attribution[key] = sanitize(value);
    }
    if (Object.keys(attribution).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
      return attribution;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

export function getCampaignAttribution() {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as CampaignAttribution) : undefined;
  } catch {
    return undefined;
  }
}
