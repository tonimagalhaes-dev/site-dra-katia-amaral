import ProcedurePage from '@/components/ProcedurePage';

const TerapiaCapilar = () => {
  const benefits = [
    "Estimula crescimento de novos fios",
    "Melhora circulação do couro cabeludo",
    "Fortalece fios existentes",
    "Reduz queda capilar progressiva"
  ];

  const indications = [
    "Alopecia androgenética (calvície)",
    "Queda capilar excessiva",
    "Cabelos finos e enfraquecidos",
    "Áreas com falhas ou rarefação",
    "Couro cabeludo com pouca vascularização",
    "Estresse capilar pós-química"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Terapia Capilar: Recupere a Densidade dos seus Cabelos"
      description="A Terapia Capilar com micro-agulhamento estimula a regeneração folicular através de microlesões controladas que ativam fatores de crescimento. Combinada com ativos específicos, promove vascularização do couro cabeludo, fortalece os fios existentes e estimula o crescimento de novos cabelos de forma natural e eficaz."
      emoji="💇‍♀️"
      benefits={benefits}
      indications={indications}
      sessions="6 a 12 sessões, com intervalos semanais"
      differentials={differentials}
      procedureName="Terapia Capilar"
      heroImage="/images/capilar5.jpg"
      benefitImage="/images/capilar2.jpg"
    />
  );
};

export default TerapiaCapilar;