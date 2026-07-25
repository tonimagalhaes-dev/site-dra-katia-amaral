import { useEffect, useState } from 'react';
import { WhatsAppCta } from './WhatsAppCta';

export function PersistentWhatsAppCta() {
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  );
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const hero = document.getElementById('hero-whatsapp-cta');
    const final = document.getElementById('cta-final');
    if (!hero || !final) return;
    let heroVisible = true;
    let finalVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === final) finalVisible = entry.isIntersecting;
      });
      setVisible(!heroVisible && !finalVisible);
    });
    observer.observe(hero);
    observer.observe(final);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 px-4 pt-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgba(0,0,0,.12)] md:hidden">
      <WhatsAppCta position="persistent" className="w-full">
        Tirar dúvidas no WhatsApp
      </WhatsAppCta>
    </div>
  );
}
