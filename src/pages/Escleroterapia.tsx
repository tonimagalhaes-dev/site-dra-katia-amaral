import ProcedurePage from '@/components/ProcedurePage';

const Escleroterapia = () => {
  const benefits = [
    "Eliminação de varizes e microvarizes",
    "Melhora da circulação sanguínea",
    "Redução de dores e inchaço nas pernas",
    "Resultado estético imediato e duradouro"
  ];

  const indications = [
    "Varizes de pequeno e médio calibre",
    "Microvarizes (vasinhos)",
    "Telangiectasias",
    "Dor e sensação de peso nas pernas",
    "Inchaço e cansaço frequente",
    "Questões estéticas relacionadas aos vasos"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Escleroterapia: Adeus às Varizes e Microvarizes"
      description="A Escleroterapia é o tratamento padrão-ouro para eliminação de varizes e microvarizes. Através de microinjeções de substâncias esclerosantes, os vasos indesejados são fechados e absorvidos pelo organismo, melhorando tanto o aspecto estético quanto os sintomas como dor e inchaço."
      emoji="🩺"
      benefits={benefits}
      indications={indications}
      sessions="2 a 4 sessões, conforme extensão das varizes"
      differentials={differentials}
      procedureName="Escleroterapia"
      heroImage="/lovable-uploads/escleroterapia1.jpg"
      benefitImage="/lovable-uploads/escleroterapia.jpg"
    />
  );
};

export default Escleroterapia;