import ProcedurePage from '@/components/ProcedurePage';

const Ozonioterapia = () => {
  const benefits = [
    "Ação Antioxidante e Anti-inflamatória",
    "Estímulo à Circulação e Oxigenação Tecidual",
    "Ação Antimicrobiana Natural",
    "Rejuvenescimento e Firmeza da Pele"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Ozonioterapia: Rejuvenescimento Natural e Antioxidante"
      description="A Ozonioterapia é um tratamento natural que promove a oxigenação celular, combate o envelhecimento e melhora a qualidade da pele através de suas propriedades antioxidantes, anti-inflamatórias e regenerativas."
      emoji="🌿"
      benefits={benefits}
      differentials={differentials}
      procedureName="Ozonioterapia"
      heroImage="/images/ozonioterapia2 - Editado.jpg"
      benefitImage="/images/Katia - 1 - Editado - Editado.png"
    />
  );
};

export default Ozonioterapia;