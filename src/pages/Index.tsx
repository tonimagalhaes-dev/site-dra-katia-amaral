import { Link } from 'react-router-dom';
import { Star, Shield, Heart, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const procedures = [
    {
      title: 'Harmonização Facial',
      description: 'Realce seus traços naturais com segurança e naturalidade',
      icon: '💉',
      link: '/harmonizacao-facial'
    },
    {
      title: 'Glúteos Up',
      description: 'Modelagem glútea sem cirurgia, com resultado imediato',
      icon: '🍑',
      link: '/gluteos-up'
    },
    {
      title: 'Otomodelação',
      description: 'Corrija orelhas de abano sem procedimento cirúrgico',
      icon: '👂',
      link: '/otomodelacao'
    },
    {
      title: 'Bioestimulador de Colágeno',
      description: 'Rejuvenescimento natural e duradouro da pele',
      icon: '🧴',
      link: '/bioestimulador-colageno'
    },
    {
      title: 'Skinbooster',
      description: 'Hidratação profunda e viço para sua pele',
      icon: '💧',
      link: '/skinbooster'
    },
    {
      title: 'Preenchimento Labial',
      description: 'Lábios naturais, definidos e hidratados',
      icon: '💋',
      link: '/preenchimento-labial'
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Me senti segura e acolhida durante todo o processo. Resultado incrível!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Resultados incríveis e naturais, recomendo demais!",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Naturalidade",
      description: "Resultados que respeitam sua beleza natural"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Segurança",
      description: "Procedimentos realizados por enfermeira especializada"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Sem Cirurgia",
      description: "Tratamentos minimamente invasivos"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-gold-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold font-playfair text-foreground">
                ✨ Realce sua beleza com <span className="text-primary">segurança</span> e <span className="text-primary">naturalidade</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Procedimentos estéticos personalizados, realizados por enfermeira especializada e focada no seu bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary hover:bg-primary/90">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Avaliação
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/sobre">Conheça a Dra. Katia</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-400/20 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-6xl">👩‍⚕️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Quem é a Dra. Katia Amaral</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sou enfermeira com especialização em estética e atendo em São Paulo, oferecendo tratamentos que valorizam a sua beleza natural com segurança, técnica e cuidado no pós-procedimento.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Por que escolher nossos procedimentos?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Procedimentos em destaque</h2>
            <p className="text-lg text-muted-foreground">Cada procedimento é personalizado para valorizar sua beleza natural</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{procedure.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{procedure.title}</h3>
                  <p className="text-muted-foreground mb-4">{procedure.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={procedure.link}>Saiba mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Depoimentos de pacientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair mb-4">Agendamento fácil</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Atendimento personalizado</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sem cirurgia</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Consultório em São Paulo</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto">
            <ContactForm 
              title="Agende sua avaliação gratuita"
              description="Entre em contato e descubra qual procedimento é ideal para você"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
