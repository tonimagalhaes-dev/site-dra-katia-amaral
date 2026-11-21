import ProcedurePage from '@/components/ProcedurePage';
import ProceduresSection from '@/components/ProceduresSection';

const proceduresHF = [
    {
      title: 'Lobuloplastia',
      description: 'Conheça as opções de avaliação para alterações no lóbulo da orelha.',
      link: '/lobuloplastia',
      image: '/images/kedem-sala.webp'
    },
    {
      title: 'Pacotes de Harmonização Facial',
      description: 'Entenda como Botox, preenchimento, bioestimulador e fios podem compor um plano individual.',
      link: '/pacotes-de-harmonizacao',
      image: '/images/facial3.webp'
    },
    {
      title: 'Bioestimulador de Colágeno',
      description: 'Rejuvenescimento natural e duradouro da pele',
      icon: '🧴',
      link: '/bioestimulador-de-colageno',
      image: '/images/bioestimulador1.webp'
    },
    {
      title: 'Preenchimento Labial',
      description: 'Lábios naturais, definidos e hidratados',
      icon: '💋',
      link: '/preenchimento-labial',
      image: '/images/labios1.webp'
    },
    {
      title: 'Micro Pigmentação',
      description: 'Realce a beleza dos seus traços com a micro pigmentação',
      icon: '💋',
      link: '/micropigmentacao',
      image: '/images/micro2.webp'
    },
    {
    title: 'Jato de Plasma',
      description: 'Tratamento para flacidez e rejuvenescimento da pele',
      icon: '💨',
      link: '/jato-de-plasma',
      image: '/images/plasma2.webp'
    }
  ];

const HarmonizacaoFacial = () => {
  const benefits = [
    "Definição do contorno facial",
    "Preenchimento de olheiras, lábios, mandíbula e mento",
    "Técnica individualizada, sem 'rosto padrão'",
    "Resultados naturais com ácido hialurônico"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Harmonização Facial com Naturalidade e Segurança"
      description="A Harmonização Facial é indicada para quem deseja realçar os traços do rosto de forma equilibrada, discreta e sem exageros."
      emoji="💉"
      benefits={benefits}
      differentials={differentials}
      procedureName="Harmonização Facial"
      heroImage='/images/facial3.webp'
      benefitImage='/images/facial6.webp'
    >
      <ProceduresSection procedures={proceduresHF} />
    </ProcedurePage>
  );
};

export default HarmonizacaoFacial;