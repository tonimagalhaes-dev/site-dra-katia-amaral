import ProcedurePage from '@/components/ProcedurePage';
import ProceduresSection from '@/components/ProceduresSection';

const proceduresHC = [
    {
      title: 'Bioestimulador de Colágeno',
      description: 'Rejuvenescimento natural e duradouro da pele',
      icon: '🧴',
      link: '/bioestimulador-colageno',
      image: '/images/bioestimulador.webp'
    },
    {
      title: 'Empetiers/Mesoterapia',
      description: 'Realce a beleza dos seus traços com a mesoterapia',
      icon: '💋',
      link: '/empetiers-mesoterapia',
      image: '/images/empitiers3.webp'
    },
    {
      title: 'Harmonização Glútea',
      description: 'Realce a beleza dos seus traços com a harmonização glútea',
      icon: '💋',
      link: '/harmonizacao-glutea',
      image: '/images/gluteo3.webp'
    },
    {
      title: 'Terapia Capilar',
      description: 'Tratamento para queda de cabelo e fortalecimento dos fios',
      icon: '💇‍♀️',
      link: '/terapia-capilar',
      image: '/images/capilar1.webp'
    }
  ];

const HarmonizacaoCorporal = () => {
  const benefits = [
    "Definição do contorno corporal",
    "Redução de medidas e celulite",
    "Técnica individualizada, sem 'corpo padrão'",
    "Resultados naturais com ácido hialurônico"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Harmonização Corporal com Naturalidade e Segurança"
      description="A Harmonização Corporal é indicada para quem deseja realçar os contornos do corpo de forma equilibrada, discreta e sem exageros."
      emoji="🏋️‍♀️"
      benefits={benefits}
      differentials={differentials}
      procedureName="Harmonização Corporal"
      heroImage='/images/empitiers3.webp'
      benefitImage='/images/empitiers1.webp'
    >
      <ProceduresSection procedures={proceduresHC} />
    </ProcedurePage>
  );
};

export default HarmonizacaoCorporal;