import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'; // Importando o novo componente
import {
  CheckCircle2,
//  Heart,
  ShieldCheck,
//  Smile,
//  ThumbsUp,
//  UserCheck,
  Award,
  Clock,
//  Moon,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { createWhatsAppUrl } from '@/lib/constants';
import React from 'react';

// Componente auxiliar para cards de benefícios
const BenefitCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
    <div className="text-primary mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{children}</p>
  </div>
);

// Componente principal da página de Otomodelação
const OtomodelacaoPage = () => {
  
  return (
    <>
      <Helmet>
        <title>Otomodelação Sem Cirurgia | Dra. Kátia Amaral</title>
        <meta
          name="description"
          content="Diga adeus às orelhas de abano com a otomodelação, uma técnica segura, não cirúrgica e com resultados imediatos. Agende sua avaliação."
        />
      </Helmet>

      <div className="flex flex-col">
        {/* Seção 1: Hero de Alta Conversão */}
        <section
          className="relative text-white py-20 px-4 text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/BackgroundHero.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Diga Adeus às Orelhas de Abano, Sem Cirurgia.
            </h1>
            <p className="text-lg md:text-xl mb-2">
              Resultados naturais e seguros com a técnica de otomodelação.
            </p>
            <p className="font-semibold bg-primary/80 inline-block px-3 py-1 rounded-md mb-6">
              Dra. Kátia Amaral | Enfermeira Esteta | COREN-SP 310.393
            </p>
            <div>
                <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"

                //className="bg-primary hover:bg-primary/90 text-white font-bold text-lg py-3 px-8 rounded-full transition-transform hover:scale-105"
                onClick={() =>
                  window.open(
                  createWhatsAppUrl('Olá! Vi o site e gostaria de saber mais sobre a otomodelação.'),
                  '_blank'
                  )
                }
                >
                Agende sua Avaliação
                    <img
                src="/images/wa-ico.png"
                alt="WhatsApp"
                width={44}
                height={44}
                style={{ display: 'block' }}
              />
                </Button>
            </div>
          </div>
        </section>

        {/* Seção 2: Prova Visual Imediata (Antes e Depois) */}
        <section id="resultados" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Resultados que Falam por Si
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              ➡️ Role para o lado e veja o poder da otomodelação em transformar não apenas a aparência,
              mas a confiança de nossos pacientes.
            </p>
            <BeforeAfterSlider />
          </div>
        </section>

        {/* Seção 3: Conexão com a Dor (Empatia) */}
        <section id="empatia" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Você também se sente assim?
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Se você se identifica com alguma destas situações, saiba que não
              está sozinho(a) e existe uma solução para recuperar sua
              autoestima.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>Evita prender o cabelo ou usar certos penteados?</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>Sente-se desconfortável em fotos ou eventos sociais?</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>
                  A aparência de suas orelhas afeta sua confiança e bem-estar?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Apresentando a Solução Segura */}
        <section id="solucao" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Otomodelação: A Evolução da Correção de Orelhas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={<ShieldCheck size={40} />}
                title="Procedimento Seguro"
              >
                Técnica não cirúrgica, realizada em consultório com anestesia
                local, minimizando riscos e desconforto.
              </BenefitCard>
              <BenefitCard icon={<Clock size={40} />} title="Recuperação Rápida">
                Sem cortes e sem necessidade de repouso. Volte para suas
                atividades no mesmo dia.
              </BenefitCard>
              <BenefitCard icon={<Award size={40} />} title="Resultados Imediatos">
                Veja a diferença assim que o procedimento termina. Os
                resultados são naturais e permanentes.
              </BenefitCard>
            </div>
          </div>
        </section>

        {/* Seção 5: Conheça a Especialista */}
        <section id="especialista" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 text-center">
                <img
                  src="/images/katia6.webp"
                  alt="Dra. Kátia Amaral"
                  className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Sua Confiança nas Mãos de uma Especialista
                </h2>
                <p className="text-muted-foreground mb-4">
                  "Minha paixão é realçar a beleza única de cada paciente,
                  utilizando as técnicas mais avançadas e seguras. Como
                  Enfermeira Esteta, meu compromisso é com a sua segurança, seu
                  conforto e, claro, com um resultado que traga a autoestima e
                  a felicidade que você merece. Cada procedimento é realizado
                  com o máximo cuidado e atenção aos detalhes, porque entendo
                  que estou cuidando de um sonho."
                </p>
                <p className="font-semibold text-gray-700">
                  - Dra. Kátia Amaral, Enfermeira Esteta
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 7: Perguntas Frequentes (FAQ) */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Qual a diferença entre otomodelação e otoplastia?
                </AccordionTrigger>
                <AccordionContent>
                  A otomodelação é uma técnica não cirúrgica que remodela a
                  cartilagem com fios, sem cortes. A otoplastia é uma cirurgia
                  plástica tradicional, mais invasiva e com um tempo de
                  recuperação maior. A otomodelação é uma alternativa moderna,
                  segura e com retorno imediato à rotina.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Por que escolher uma Enfermeira Esteta para este
                  procedimento?
                </AccordionTrigger>
                <AccordionContent>
                  A Enfermagem Estética é uma especialidade regulamentada que
                  foca em procedimentos minimamente invasivos. Uma Enfermeira
                  Esteta qualificada possui profundo conhecimento da anatomia
                  facial e das técnicas mais seguras, garantindo um
                  procedimento ético, seguro e com excelentes resultados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">O resultado é permanente?</AccordionTrigger>
                <AccordionContent>
                  Sim, os resultados da otomodelação são considerados
                  permanentes. Os fios utilizados são biocompatíveis e projetados
                  para manter a cartilagem na nova posição de forma definitiva.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">O procedimento dói?</AccordionTrigger>
                <AccordionContent>
                  O procedimento é realizado com anestesia local, tornando-o
                  muito confortável para o paciente. Pode haver um leve
                  desconforto nos dias seguintes, que é facilmente controlado
                  com analgésicos comuns.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Seção 8: O Convite Final para a Ação */}
        <section id="cta-final" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dê o primeiro passo para uma nova autoestima.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Chega de se esconder. Chegou a hora de se sentir livre e
              confiante em qualquer situação. Nossa equipe está pronta para
              tirar todas as suas dúvidas.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
              onClick={() => window.open(
                                createWhatsAppUrl('Olá! Vi o site e gostaria de saber mais sobre a otomodelação.'),
                                '_blank'
                              )}
            >
              Quero Agendar Minha Avaliação
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default OtomodelacaoPage;

