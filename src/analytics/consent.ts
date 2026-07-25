export interface ConsentPreferences {
  analytics: boolean;
  advertising: boolean;
}

export const CONSENT_STORAGE_KEY = 'site_cookie_consent_v1';
const META_PIXEL_ID = '1537157407293376';
let metaInitialized = false;

function initializeMetaPixel() {
  if (metaInitialized || typeof document === 'undefined') return;
  metaInitialized = true;
  const fbq = ((...args: unknown[]) => {
    (fbq.queue = fbq.queue ?? []).push(args);
  }) as ((...args: unknown[]) => void) & { queue?: unknown[][] };
  window.fbq = window.fbq ?? fbq;
  window.fbq('init', META_PIXEL_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/pt_BR/fbevents.js';
  script.dataset.metaPixel = 'true';
  document.head.appendChild(script);
}

export function applyConsent(preferences: ConsentPreferences) {
  window.gtag?.('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
  });
  if (preferences.advertising) initializeMetaPixel();
}

export function saveConsent(preferences: ConsentPreferences) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Storage failure must not affect site navigation.
  }
  applyConsent(preferences);
}

export function readConsent(): ConsentPreferences | undefined {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ConsentPreferences) : undefined;
  } catch {
    return undefined;
  }
}

export function initializeStoredConsent() {
  const stored = readConsent();
  if (stored) applyConsent(stored);
}
