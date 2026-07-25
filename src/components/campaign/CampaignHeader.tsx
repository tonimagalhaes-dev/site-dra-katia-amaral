import { useEffect, useState } from 'react';
import { WhatsAppCta } from './WhatsAppCta';

export function CampaignHeader() {
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | undefined;
    let mutationObserver: MutationObserver | undefined;
    let removeScrollFallback: (() => void) | undefined;

    const connectToHeroCta = () => {
      const heroCta = document.getElementById('hero-whatsapp-cta');
      if (!heroCta) return false;

      if (typeof IntersectionObserver !== 'undefined') {
        intersectionObserver = new IntersectionObserver(([entry]) => {
          setShowMobileCta(!entry.isIntersecting);
        });
        intersectionObserver.observe(heroCta);
      } else {
        const updateFromScroll = () => {
          setShowMobileCta(heroCta.getBoundingClientRect().bottom <= 64);
        };
        updateFromScroll();
        window.addEventListener('scroll', updateFromScroll, { passive: true });
        removeScrollFallback = () => window.removeEventListener('scroll', updateFromScroll);
      }

      return true;
    };

    if (!connectToHeroCta()) {
      mutationObserver = new MutationObserver(() => {
        if (connectToHeroCta()) mutationObserver?.disconnect();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver?.disconnect();
      mutationObserver?.disconnect();
      removeScrollFallback?.();
    };
  }, []);

  const compactCta = (
    <WhatsAppCta position="header" className="min-h-11 shrink-0 px-3 py-2 text-sm">
      <img src="/images/wa-ico.png" alt="" className="h-5 w-5" />
      <span>WhatsApp</span>
    </WhatsAppCta>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2" aria-label="Dra. Katia Amaral">
          <img src="/images/logo_v2.jpg" alt="" className="h-11 w-11 rounded-full object-cover" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">Dra. Katia Amaral</p>
            <p className="text-xs text-slate-600">COREN-SP 310.193</p>
          </div>
        </div>
        {showMobileCta && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 md:hidden">
            {compactCta}
          </div>
        )}
        <div className="hidden md:block">
          {compactCta}
        </div>
      </div>
    </header>
  );
}
