import type { ReactNode } from 'react';
import { MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CampaignHeader } from './CampaignHeader';
import { usePageView } from '@/analytics/usePageView';

export function CampaignShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const campaign = location.pathname === '/otomodelacao';
  usePageView();
  return (
    <div className="flex min-h-screen flex-col">
      {campaign ? <CampaignHeader /> : <Header />}
      <main className="flex-grow">{children}</main>
      {campaign ? (
        <footer className="border-t bg-slate-50 px-4 py-8 text-center text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Dra. Katia Amaral</p>
          <p className="mt-1">COREN-SP 310.193</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Cruz%2C+2105%2C+Sala+1410%2C+Vila+Mariana%2C+S%C3%A3o+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir endereço no Google Maps"
            className="mx-auto mt-4 inline-flex min-h-11 max-w-md items-center justify-center gap-2 rounded-lg px-3 py-2 font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-4"
          >
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Rua Santa Cruz, 2105, sala 1410 — Vila Mariana, São Paulo</span>
          </a>
          <p className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </footer>
      ) : <Footer />}
    </div>
  );
}
