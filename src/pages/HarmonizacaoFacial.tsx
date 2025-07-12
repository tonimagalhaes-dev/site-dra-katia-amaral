import ProcedurePage from '@/components/ProcedurePage';

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
      heroImage='/lovable-uploads/harmonizacao1.jpg'
      benefitImage='/lovable-uploads/harmonizacao2.png'
    />
  );
};

export default HarmonizacaoFacial;