import type { MouseEventHandler, ReactNode } from 'react';
import { createWhatsAppUrl, OTOMODELACAO_WHATSAPP_MESSAGE } from '@/lib/constants';
import { trackWhatsAppContact } from '@/analytics/analytics';
import type { CtaPosition } from '@/analytics/types';
import { cn } from '@/lib/utils';

interface WhatsAppCtaProps {
  position: CtaPosition;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function WhatsAppCta({ position, children, className, id }: WhatsAppCtaProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    trackWhatsAppContact(position);
  };
  return (
    <a
      id={id}
      href={createWhatsAppUrl(OTOMODELACAO_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-cta-position={position}
      className={cn(
        'inline-flex min-h-12 min-w-11 items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-center font-bold leading-tight text-white shadow-lg transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300',
        className,
      )}
    >
      {children}
    </a>
  );
}
