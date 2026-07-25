import { WhatsAppCta } from './WhatsAppCta';

export function CampaignHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <div className="flex min-w-0 items-center gap-2" aria-label="Dra. Katia Amaral">
          <img src="/images/logo_v2.jpg" alt="" className="h-11 w-11 rounded-full object-cover" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">Dra. Katia Amaral</p>
            <p className="text-xs text-slate-600">Enfermeira Esteta</p>
          </div>
        </div>
        <WhatsAppCta position="header" className="shrink-0 px-3 text-sm sm:px-5">
          <img src="/images/wa-ico.png" alt="" className="h-5 w-5" />
          <span className="hidden min-[370px]:inline">WhatsApp</span>
        </WhatsAppCta>
      </div>
    </header>
  );
}
