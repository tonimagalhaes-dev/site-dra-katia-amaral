import { useEffect } from 'react';
import { Award, Clock, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ResultsCarousel } from '@/components/campaign/ResultsCarousel';
import { WhatsAppCta } from '@/components/campaign/WhatsAppCta';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Avaliação individual',
    text: 'A indicação depende de avaliação profissional e das características de cada pessoa.',
  },
  {
    icon: Clock,
    title: 'Procedimento em consultório',
    text: 'A profissional explica as etapas, os cuidados e a recuperação esperada para o seu caso.',
  },
  {
    icon: Award,
    title: 'Acompanhamento profissional',
    text: 'Você recebe orientações antes e depois do procedimento e pode esclarecer suas dúvidas.',
  },
];

const frequentlyAskedQuestions = [
  {
    value: 'o-que-e',
    question: 'O que é a otomodelação?',
    answer:
      'A otomodelação é um procedimento estético minimamente invasivo que busca corrigir e reposicionar as orelhas sem cirurgia convencional. O objetivo é melhorar a harmonia e a simetria facial. A indicação, a técnica e os resultados esperados dependem da anatomia e da avaliação individual.',
  },
  {
    value: 'recuperacao',
    question: 'Fiz uma otomodelação, a recuperação é demorada?',
    answer:
      'A recuperação costuma ser rápida, mas varia conforme cada pessoa e a técnica empregada. Em muitos casos, é possível retomar atividades leves logo após o procedimento. Exercícios sem impacto direto nas orelhas geralmente exigem uma pausa de aproximadamente três dias, conforme orientação profissional.',
  },
  {
    value: 'duracao',
    question: 'Quanto tempo leva o procedimento de otomodelação?',
    answer:
      'O procedimento costuma levar entre 30 minutos e uma hora, dependendo da complexidade e do planejamento de cada caso.',
  },
  {
    value: 'avaliacao',
    question: 'Por que é necessária uma avaliação antes da otomodelação?',
    answer:
      'A avaliação permite conhecer o histórico do paciente, entender suas queixas e expectativas e analisar as características individuais. Com essas informações, a profissional pode indicar e planejar o tratamento de forma personalizada.',
  },
  {
    value: 'internacao',
    question: 'O paciente precisa ficar internado para realizar a otomodelação?',
    answer:
      'Não. A otomodelação é realizada em consultório e normalmente não exige internação.',
  },
  {
    value: 'trabalho',
    question: 'Em quanto tempo o paciente pode voltar a trabalhar após a otomodelação?',
    answer:
      'Muitos pacientes conseguem retornar a atividades leves no mesmo dia. É importante seguir as orientações recebidas e evitar esforços físicos intensos, calor e exposição solar excessiva durante o período recomendado para cada caso.',
  },
];

export default function OtomodelacaoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Otomodelação | Dra. Kátia Amaral</title>
        <link rel="preload" as="image" href="/images/otomodelacao5.webp" media="(max-width: 768px)" />
        <link rel="preload" as="image" href="/images/otomodelacao4.webp" media="(min-width: 769px)" />
        <meta
          name="description"
          content="Conheça a otomodelação com a Dra. Kátia Amaral e converse pelo WhatsApp para entender indicação, cuidados e avaliação."
        />
      </Helmet>

      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-slate-950 text-white">
        <picture className="absolute inset-0 -z-20 h-full w-full">
          <source media="(max-width: 768px)" srcSet="/images/otomodelacao5.webp" />
          <source media="(min-width: 769px)" srcSet="/images/otomodelacao4.webp" />
          <img
            src="/images/otomodelacao5.webp"
            alt=""
            width="1200"
            height="900"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 -z-10 bg-slate-950/65" />
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-green-300">
              Otomodelação em São Paulo
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Entenda se a otomodelação faz sentido para você
            </h1>
            <p className="mt-4 text-lg text-slate-100">
              Converse sobre objetivos, indicação, cuidados e expectativas em uma avaliação individual.
            </p>
            <p className="mt-4 font-semibold">
              Dra. Kátia Amaral · Enfermeira Esteta · COREN-SP 310.193
            </p>
            <WhatsAppCta
              id="hero-whatsapp-cta"
              position="hero"
              className="mt-7 w-full max-w-md whitespace-normal sm:w-auto"
            >
              Conversar sobre uma avaliação
            </WhatsAppCta>
            <p className="mt-3 text-sm text-slate-200">Atendimento inicial pelo WhatsApp.</p>
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900">Resultados em diferentes casos</h2>
          <p className="mx-auto mb-8 mt-3 max-w-2xl text-center text-slate-600">
            Veja comparativos agrupados por paciente. A avaliação considera características e objetivos individuais.
          </p>
          <ResultsCarousel />
          <div className="mt-8 text-center">
            <WhatsAppCta position="results">Tirar dúvidas sobre o procedimento</WhatsAppCta>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900">Uma conversa clara antes de decidir</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[280px_1fr]">
          <img
            src="/images/katia6.webp"
            alt="Dra. Kátia Amaral"
            width="280"
            height="280"
            loading="lazy"
            className="mx-auto aspect-square rounded-full object-cover shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Dra. Kátia Amaral</h2>
            <p className="mt-2 font-semibold text-primary">Enfermeira Esteta · COREN-SP 310.193</p>
            <p className="mt-4 text-slate-600">
              Atendimento na Vila Mariana, em São Paulo, com orientação individual sobre o procedimento e seus cuidados.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Perguntas frequentes</h2>
          <Accordion type="single" collapsible>
            {frequentlyAskedQuestions.map(({ value, question, answer }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-600">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="cta-final" className="bg-primary px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Quer entender o seu caso?</h2>
          <p className="mt-3 text-lg text-blue-100">Envie uma mensagem e tire suas dúvidas sobre avaliação e próximos passos.</p>
          <WhatsAppCta position="final" className="mt-7 w-full sm:w-auto">
            Conversar com a Dra. Kátia
          </WhatsAppCta>
        </div>
      </section>
    </>
  );
}
