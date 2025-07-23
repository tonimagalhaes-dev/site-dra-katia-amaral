import { MapPin, MessageCircle, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { createWhatsAppUrl } from '@/lib/constants';

const Contato = () => {
  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-gradient-to-br from-rose-50 to-gold-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-foreground mb-6">
              Agende sua avaliação ou tire suas dúvidas
            </h1>
            <p className="text-xl text-muted-foreground">
              Entre em contato diretamente pelo WhatsApp para agendar sua avaliação, tirar dúvidas sobre os procedimentos ou saber valores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-playfair">Formas de contato</h2>
              
              <div className="space-y-6">
                <Button onClick={handleWhatsAppClick} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp - Contato direto
                </Button>
                
                <div className="flex items-center space-x-3 text-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                <span>Rua Cincinato Braga, 37 - Bela Vista, São Paulo</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Av. Pereira Barreto, 1479 - Baeta Neves, São Bernardo do Campo</span>
                </div>
                
                <div className="flex items-center space-x-3 text-lg">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span>@drakatia_amaral</span>
                </div>
                
                {/* Hide email for now}
                <div className="flex items-center space-x-3 text-lg">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>contato@drakatiaamaral.com.br</span>
                </div>
                */}
              </div>
            </div>
            
            <ContactForm 
              title="Formulário de contato"
              description="Preencha os dados abaixo e entraremos em contato"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
