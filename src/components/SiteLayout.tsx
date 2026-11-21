import type { ReactNode } from 'react';
import { usePageView } from '@/analytics/usePageView';
import Header from './Header';
import Footer from './Footer';

export function SiteLayout({ children }: { children: ReactNode }) {
  usePageView();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
