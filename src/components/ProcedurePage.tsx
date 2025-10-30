import { ReactNode } from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
//import Header from './Header';
//import Footer from './Footer';
import ContactForm from './ContactForm';  
import { useEffect } from 'react';


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
  const handleWhatsAppClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: window.location.pathname,
        value: 1,
      });
    }
    const message = `Olá! Gostaria de saber mais sobre ${procedureName} e agendar uma avaliação.`;
    window.open(`https://wa.me/5511942242893?text=${encodeURIComponent(message)}`, '_blank');
 };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section - apenas se não estiver oculto */}
      {!hideHero && (
        <section
          className="relative py-20"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 30, 76, 0.7), rgba(189, 178, 172, 0.3)), url('/images/BackgroundHero.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold font-playfair">
                  {title}
                </h1>
                <p className="text-xl text-white/90">
                  {description}
                </p>
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Avaliação
                </Button>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-8">
                  <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center">
                    {heroImage ? (
                      <img src={heroImage} alt="Hero" className="w-full h-full object-cover rounded-full shadow-lg" />
                    ) : (
                      <span className="text-8xl">{emoji}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What Is Section */}
      {whatIs && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-playfair mb-4">O que é {procedureName}?</h2>
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
              <h2 className="text-3xl font-bold font-playfair mb-4">Indicado para</h2>
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
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        {/* Imagem à esquerda */}
        <div className="flex justify-center">
          <div className="aspect-square w-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center">
          {benefitImage ? (
            <img src={benefitImage} alt="Benefits" className="w-full h-full object-cover rounded-full shadow-lg" />
          ) : (
            <span className="text-5xl">{emoji}</span>
          )}
            </div>
          </div>
        </div>
        {/* Texto à direita */}
        <div>
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold font-playfair mb-4">Benefícios do procedimento</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold font-playfair mb-4">Produtos utilizados</h2>
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
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-playfair mb-4">Sessões</h2>
              <p className="text-lg text-muted-foreground">{sessions}</p>
            </div>
          </div>
        </section>
      )}

      {/* Differentials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Diferenciais</h2>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-gold-400/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-playfair mb-4">Pronto para transformar sua beleza?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma avaliação personalizada e descubra como podemos realçar sua beleza natural.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center lg:text-left">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-500 hover:bg-green-600 text-white mb-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground">
                Resposta rápida e atendimento personalizado
              </p>
            </div>
            
            <ContactForm 
              defaultProcedure={procedureName}
              title="Ou preencha o formulário"
              description="Entraremos em contato em breve"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProcedurePage;
// This component can be used in different pages by passing the appropriate props
