import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/ContactForm';
import { appointmentMessage, createWhatsAppUrl } from '@/lib/constants';

export default function Contato() {
  const appointmentUrl = createWhatsAppUrl(appointmentMessage());

  return (
    <>
      <section className="kedem-hero">
        <div className="kedem-wrap py-14 sm:py-20">
          <p className="kedem-label">Kedem Beauty &amp; Care · Vila Mariana</p>
          <h1 className="kedem-title max-w-3xl text-5xl sm:text-6xl">Agende sua avaliação</h1>
          <p className="kedem-intro">
            Fale com o consultório para agendar ou esclarecer suas dúvidas sobre os procedimentos.
          </p>
        </div>
      </section>
      <section className="kedem-wrap grid gap-10 py-12 md:grid-cols-2 md:items-start md:py-16">
        <div className="space-y-6">
          <h2 className="kedem-title text-3xl">Formas de contato</h2>
          <Button asChild size="lg">
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Conversar no WhatsApp
            </a>
          </Button>
          <p className="flex items-start gap-3">
            <MapPin size={20} className="shrink-0 text-primary" aria-hidden="true" />
            <span>
              Rua Santa Cruz, 2105, sala 1410
              <br />
              Vila Mariana, São Paulo
            </span>
          </p>
          <a
            className="inline-flex min-h-11 items-center gap-3 underline-offset-4 hover:underline"
            href="https://instagram.com/drakatia.amaral"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} aria-hidden="true" /> @drakatia.amaral
          </a>
        </div>
        <ContactForm
          title="Formulário de contato"
          description="Ao enviar, você continua o atendimento pelo WhatsApp."
        />
      </section>
    </>
  );
}
