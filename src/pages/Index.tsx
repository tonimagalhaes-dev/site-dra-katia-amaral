import { Link } from 'react-router-dom';
import { Shield, Heart, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import ProceduresSection from '@/components/ProceduresSection';
import { createWhatsAppUrl } from '@/lib/constants';

const Index = () => {
  const procedures = [
    {
      title: 'Otomodelação',
      description: 'Corrija orelhas de abano sem procedimento cirúrgico',
      icon: '👂',
      link: '/otomodelacao',
      image: '/images/otomodelacao3.webp'
    },
    {
      title: 'Harmonização Facial',
      description: 'Realce seus traços naturais com segurança e naturalidade',
      icon: '💉',
      link: '/harmonizacao-facial',
      image: '/images/facial12.webp'
    },
    {
      title: 'Harmonização Corporal',
      description: 'Transforme seu corpo com segurança e naturalidade',
      icon: '🏋️‍♀️',
      link: '/harmonizacao-corporal',
      image: '/images/empitiers1.webp'
    },

  ];

  { /*
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
*/}

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-gold-400" />,
      title: "Naturalidade",
      description: "Resultados que respeitam sua beleza natural"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Segurança",
      description: "Procedimentos realizados por enfermeira especializada"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-400" />,
      title: "Sem Cirurgia",
      description: "Tratamentos minimamente invasivos"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-900 to-blue-400 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="/minha-imagem.webp" 
            alt="Profissional de estética" 
            className="w-full h-full object-cover opacity-30"
            loading="eager"        
            fetchpriority="high"   
            decoding="async"       
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium">
                  Estética Avançada
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-white leading-tight">
                  Realce sua beleza com <span className="text-gold-400">segurança</span> e <span className="text-gold-400">naturalidade</span>
                </h1>
                <p className="text-3xl text-blue-100 leading-relaxed">
                  Você merece sentir-se incrível todos os dias, e a Otomodelação é a solução inovadora para corrigir orelhas proeminentes, proporcionando uma confiança renovada.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="bg-gold-400 hover:bg-gold-400/90 text-blue-900 px-8 py-6 text-lg font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Avaliação
                </Button>
                
               <Button variant="outline" size="lg" asChild className="px-8 py-6 text-lg border-white text-blue-900 hover:bg-white hover:bg-gold-400/90 text-blue-900">
                  <Link to="/otomodelacao">Saiba Mais</Link>
               </Button>

              </div>
            </div>
            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-gold-400/30 rounded-2xl transform rotate-6"></div>
                <img 
                  src="/images/facial3.webp"
                  alt="Dra. Katia Amaral - Enfermeira Estética" 
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Hide 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Dra. Katia Amaral
                </span>
                <h2 className="text-4xl font-bold font-playfair text-foreground">
                  Especialista em Estética Avançada
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Enfermeira com especialização em estética facial e corporal, atendendo em São Paulo com mais de 5 anos de experiência em procedimentos estéticos minimamente invasivos.
                  </p>
                  <p>
                    Minha missão é valorizar a beleza natural de cada paciente com segurança, técnica apurada e cuidado integral no pós-procedimento.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">Enfermeira Especializada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">Certificações Internacionais</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">Produtos Premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">Resultados Naturais</span>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/sobre">Conheça minha história</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold-400/20 rounded-2xl transform -rotate-6"></div>
                <img 
                  src="/images/sobre4.webp" 
                  alt="Consultório de estética profissional" 
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        */}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="text-4xl font-bold font-playfair mb-6">Por que escolher nossos procedimentos?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combinamos expertise técnica, produtos de alta qualidade e cuidado personalizado para entregar resultados excepcionais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-playfair">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ProceduresSection procedures={procedures} />
      {/* Procedures Section Hide for now
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Tratamentos
            </span>
            <h2 className="text-4xl font-bold font-playfair mb-6">Procedimentos em destaque</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada procedimento é personalizado para valorizar sua beleza natural com técnicas avançadas e produtos premium.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={procedure.image}
                        alt={procedure.title}
                        className="w-20 h-20 object-contain mx-auto rounded-xl shadow"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair group-hover:text-primary transition-colors duration-300">{procedure.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{procedure.description}</p>
                    <Button asChild variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Link to={procedure.link}>Saiba mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nosso Espaço
            </span>
            <h2 className="text-4xl font-bold font-playfair mb-6">Ambiente profissional e acolhedor</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um espaço pensado para proporcionar conforto, segurança e bem-estar durante seus tratamentos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/images/clinovi_recepcao2.webp"
                alt="Consultório de estética - Recepção" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Recepção Acolhedora</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/images/clinovi_sala3.webp" 
                alt="Sala de procedimentos" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Sala de Procedimentos 1</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="/images/clinovi_sala4.webp" 
                alt="Equipamentos modernos" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold">Sala de Procedimentos 2</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section hide
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-4xl font-bold font-playfair mb-6">O que nossas pacientes dizem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A satisfação e confiança das nossas pacientes são nosso maior reconhecimento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-6">
                  <div className="flex space-x-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <blockquote className="text-center">
                    <p className="text-lg text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  </blockquote>
                  <div className="text-center pt-4 border-t border-slate-200">
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Paciente verificada</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-gold-400/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Agende Agora
            </span>
            <h2 className="text-4xl font-bold font-playfair mb-6">Pronta para transformar sua beleza?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Agende sua avaliação e descubra como podemos realçar sua beleza natural com segurança e resultados excepcionais.
            </p>
            {/*
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2 p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="font-semibold text-lg">Atendimento Personalizado</span>
                <span className="text-sm text-muted-foreground text-center">Cada tratamento é único para você</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="font-semibold text-lg">Procedimentos Seguros</span>
                <span className="text-sm text-muted-foreground text-center">Minimamente invasivos</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="font-semibold text-lg">Localização Conveniente</span>
                <span className="text-sm text-muted-foreground text-center">Consultório em São Paulo</span>
              </div>
            </div>
            */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-playfair">Agendamento Rápido</h3>
                <p className="text-muted-foreground">
                  Entre em contato via WhatsApp ou formulário e receba atendimento personalizado em até 2 horas.
                </p>
              </div>
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                <MessageCircle className="w-6 h-6 mr-2" />
                Conversar no WhatsApp
              </Button>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <ContactForm 
                title="Ou preencha o formulário"
                description="Retornaremos seu contato em breve"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
