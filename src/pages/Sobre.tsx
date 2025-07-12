import { CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createWhatsAppUrl } from '@/lib/constants';

const Sobre = () => {
  const differentials = [
    "Acompanhamento pós-procedimento individual",
    "Procedimentos sem cirurgia, com foco no natural",
    "Atendimento humanizado e técnico",
    "Consultório em São Paulo"
  ];

  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl('Olá! Gostaria de conversar com a Dra. Katia.'), '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-gradient-to-br from-rose-50 to-gold-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-foreground">
                Conheça a Dra. Katia Amaral
              </h1>
              <p className="text-xl text-muted-foreground">
                Sou enfermeira formada com especialização em estética e apaixonada por promover autoestima com responsabilidade e naturalidade.
              </p>
              <p className="text-lg text-muted-foreground">
                Atuo com foco em segurança, resultados progressivos e principalmente: no cuidado no pós-procedimento, que faz toda diferença no sucesso de cada tratamento.
              </p>
              <p className="text-lg text-muted-foreground">
                Acredito que cada paciente merece uma atenção única, com um plano personalizado de acordo com seus objetivos e suas características.
              </p>
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale comigo no WhatsApp
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-400/20 rounded-full flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center">
                    <img
                    src="/lovable-uploads/sobre1.jpg"
                    alt="Dra. Katia Amaral"
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
};

export default Sobre;
