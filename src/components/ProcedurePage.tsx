import { type ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useAnalytics } from '@/hooks/useAnalytics';
import { appointmentMessage, createWhatsAppUrl } from '@/lib/constants';


interface ProcedurePageProps {
  title: string;
  description: string;
  emoji: string;
  whatIs?: string[];
  benefits: string[];
  differentials: string[];
  indications?: string[];
  products?: string[];
  sessions?: string;
  children?: ReactNode;
  procedureName: string;
  hideHero?: boolean;
  heroImage?: string;
  benefitImage?: string;
}

const ProcedurePage = ({
  title,
  description,
  emoji,
  whatIs,
  benefits,
  differentials,
  indications,
  products,
  sessions,
  children,
  procedureName,
  hideHero = false,
  heroImage = '/images/BackgroundHero.webp', // Default hero image
  benefitImage,
}: ProcedurePageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { trackWhatsAppClick } = useAnalytics();
  
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('procedure-page', procedureName);
    const message = appointmentMessage(procedureName);
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section - apenas se não estiver oculto */}
      {!hideHero && (
        <section className="kedem-hero">
          <div className="kedem-wrap grid items-center gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-20">
            <div className="space-y-5">
              <h1 className="kedem-title text-4xl leading-tight sm:text-5xl">{title}</h1>
              <p className="max-w-xl text-lg leading-relaxed">{description}</p>
              <Button onClick={handleWhatsAppClick} size="lg">
                <MessageCircle size={18} aria-hidden="true" /> Agendar avaliação
              </Button>
            </div>
            <figure className="kedem-image-frame">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt=""
                  className="aspect-[4/3]"
                  fetchPriority="high"
                />
              ) : (
                <div className="grid aspect-[4/3] place-items-center text-7xl" aria-hidden="true">{emoji}</div>
              )}
            </figure>
          </div>
        </section>
      )}

      {/* What Is Section */}
      {whatIs && (
        <section className="py-16 bg-[var(--kedem-sand)]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="kedem-title text-3xl sm:text-4xl mb-4">O que é {procedureName}?</h2>
              <p className="text-lg text-muted-foreground">{whatIs}</p>
            </div>
          </div>
        </section>
      )}

      {/* Indications Section */}
      {indications && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="kedem-title text-3xl sm:text-4xl mb-4">Indicado para</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {indications.map((indication, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{indication}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-[var(--kedem-sand)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        {/* Imagem à esquerda */}
        <div className="flex justify-center">
          <div className="kedem-image-frame aspect-square w-full max-w-80">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[inherit] bg-white">
          {benefitImage ? (
            <img src={benefitImage} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          ) : (
            <span className="text-5xl">{emoji}</span>
          )}
            </div>
          </div>
        </div>
        {/* Texto à direita */}
        <div>
          <div className="text-left mb-8">
            <h2 className="kedem-title text-3xl sm:text-4xl mb-4">Benefícios do procedimento</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-lg">{benefit}</span>
          </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {products && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="kedem-title text-3xl sm:text-4xl mb-4">Produtos utilizados</h2>
              <p className="text-lg text-muted-foreground">Trabalho com os melhores produtos do mercado:</p>
            </div>
            <div className="max-w-2xl mx-auto">
              {products.map((product, index) => (
                <div key={index} className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sessions Section */}
      {sessions && (
        <section className="py-16 bg-[var(--kedem-sand)]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="kedem-title text-3xl sm:text-4xl mb-4">Sessões</h2>
              <p className="text-lg text-muted-foreground">{sessions}</p>
            </div>
          </div>
        </section>
      )}

      {/* Differentials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="kedem-title text-3xl sm:text-4xl mb-4">Diferenciais</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentials.map((differential, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{differential}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      <section className="kedem-hero py-14 text-center" aria-labelledby="procedure-appointment">
        <div className="kedem-wrap">
          <h2 id="procedure-appointment" className="kedem-title text-4xl">
            Agende uma avaliação
          </h2>
          <p className="my-5 text-lg">Converse sobre suas dúvidas e as opções para o seu caso.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={handleWhatsAppClick} size="lg">
              <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contato">Ver opções de contato</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProcedurePage;
// This component can be used in different pages by passing the appropriate props
