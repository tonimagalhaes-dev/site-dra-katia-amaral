import { useState } from 'react';
import {
  CONSENT_STORAGE_KEY,
  readConsent,
  saveConsent,
  type ConsentPreferences,
} from '@/analytics/consent';

const rejectAll: ConsentPreferences = { analytics: false, advertising: false };
const acceptAll: ConsentPreferences = { analytics: true, advertising: true };

export function CookieConsentBanner() {
  const storedConsent = readConsent();
  const [visible, setVisible] = useState(() => !storedConsent);
  const [configuring, setConfiguring] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(
    storedConsent ?? rejectAll,
  );

  if (!visible) {
    return null;
  }

  const choose = (choice: ConsentPreferences) => {
    saveConsent(choice);
    setVisible(false);
  };

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 shadow-2xl sm:inset-x-6"
    >
      <h2 id="cookie-consent-title" className="text-lg font-bold">
        Sua privacidade importa
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Usamos cookies opcionais para entender o uso do site e medir campanhas. Cookies necessários permanecem ativos. Você pode aceitar, rejeitar ou escolher as categorias.
      </p>

      {configuring && (
        <div className="mt-4 space-y-3 rounded-xl bg-slate-50 p-4">
          <label className="flex min-h-11 items-center justify-between gap-4">
            <span>
              <strong className="block text-sm">Análise</strong>
              <span className="text-xs text-slate-600">Mede visitas e uso do site.</span>
            </span>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
              className="h-5 w-5"
            />
          </label>
          <label className="flex min-h-11 items-center justify-between gap-4">
            <span>
              <strong className="block text-sm">Publicidade</strong>
              <span className="text-xs text-slate-600">Mede campanhas no Google e na Meta.</span>
            </span>
            <input
              type="checkbox"
              checked={preferences.advertising}
              onChange={(event) => setPreferences((current) => ({ ...current, advertising: event.target.checked }))}
              className="h-5 w-5"
            />
          </label>
        </div>
      )}

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => choose(acceptAll)}
          className="min-h-11 rounded-full bg-primary px-4 py-2 font-semibold text-white focus-visible:ring-4"
        >
          Aceitar todos
        </button>
        <button
          type="button"
          onClick={() => choose(rejectAll)}
          className="min-h-11 rounded-full border border-slate-400 px-4 py-2 font-semibold focus-visible:ring-4"
        >
          Rejeitar não necessários
        </button>
        {configuring ? (
          <button
            type="button"
            onClick={() => choose(preferences)}
            className="min-h-11 rounded-full border border-primary px-4 py-2 font-semibold text-primary focus-visible:ring-4"
          >
            Salvar escolhas
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setConfiguring(true)}
            className="min-h-11 rounded-full px-4 py-2 font-semibold text-primary underline focus-visible:ring-4"
          >
            Configurar
          </button>
        )}
      </div>
      <span className="sr-only">Preferência salva em {CONSENT_STORAGE_KEY}</span>
    </section>
  );
}
