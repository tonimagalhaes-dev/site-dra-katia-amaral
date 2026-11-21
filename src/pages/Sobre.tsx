import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { appointmentMessage, createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Sobre() {
  const { trackWhatsAppClick } = useAnalytics();
  const appointmentUrl = createWhatsAppUrl(appointmentMessage());

  return (
    <>
      <section className="kedem-hero">
        <div className="kedem-wrap grid items-center gap-8 py-12 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="kedem-label">Enfermeira esteta · COREN-SP 310.193</p>
            <h1 className="kedem-title text-5xl leading-none sm:text-6xl lg:text-7xl">
              Conheça a Dra. Kátia Amaral
            </h1>
            <p className="kedem-intro">
              Sou enfermeira esteta, formada pela Universidade Federal de São Paulo, com mais de 20
              anos de experiência em cuidados com a saúde.
            </p>
            <Button asChild size="lg">
              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('sobre-page', 'sobre')}
              >
                <MessageCircle size={18} aria-hidden="true" /> Fale comigo no WhatsApp
              </a>
            </Button>
          </div>
          <figure className="kedem-image-frame mx-auto w-full max-w-[440px]">
            <img
              src="/images/kedem-katia.webp"
              srcSet="/images/kedem-katia-550.webp 550w, /images/kedem-katia.webp 1020w"
              sizes="(min-width: 960px) 426px, (min-width: 768px) 45vw, calc(100vw - 54px)"
              width={1020}
              height={1275}
              fetchPriority="high"
              alt="Retrato da Dra. Kátia Amaral sentada em uma poltrona"
            />
          </figure>
        </div>
      </section>

      <section className="kedem-wrap py-12 md:py-16" aria-labelledby="care-title">
        <div className="max-w-2xl space-y-5 leading-relaxed">
          <h2 id="care-title" className="kedem-title text-4xl">
            Como conduzo o atendimento
          </h2>
          <p>
            Meu trabalho é voltado para a harmonização facial e a modelação das orelhas. Na
            avaliação, conversamos sobre suas necessidades para definir um plano que respeite suas
            características e objetivos.
          </p>
          <p>
            Também acompanho o pós-procedimento para orientar os cuidados e esclarecer dúvidas
            durante a recuperação.
          </p>
        </div>
      </section>
    </>
  );
}
