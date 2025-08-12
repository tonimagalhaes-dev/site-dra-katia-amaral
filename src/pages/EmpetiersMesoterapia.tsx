import ProcedurePage from '@/components/ProcedurePage';

const EmpetiersMesoterapia = () => {
  const benefits = [
    "Hidratação profunda e nutrição da pele",
    "Estimula renovação celular e produção de colágeno",
    "Reduz gordura localizada e celulite",
    "Melhora circulação e drenagem linfática"
  ];

  const indications = [
    "Flacidez facial e corporal",
    "Celulite e gordura localizada",
    "Estrias e cicatrizes",
    "Manchas e melasma",
    "Calvície e queda de cabelo",
    "Rejuvenescimento facial",
    "Olheiras e bolsas palpebrais"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Mesoterapia: Tratamento Personalizado com Ativos Potentes"
      description="A Mesoterapia é uma técnica que aplica ativos específicos através de microinjeções diretamente na área a ser tratada. Ideal para rejuvenescimento, redução de gordura localizada, tratamento de celulite e diversos outros objetivos estéticos, com resultados progressivos e duradouros."
      emoji="💊"
      benefits={benefits}
      indications={indications}
      sessions="4 a 8 sessões, conforme o protocolo"
      differentials={differentials}
      procedureName="Mesoterapia"
      heroImage="/images/empitiers.webp"
      benefitImage="/images/empitiers2.webp"
    />
  );
};

export default EmpetiersMesoterapia;