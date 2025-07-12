import ProcedurePage from '@/components/ProcedurePage';

const Skinbooster = () => {
  const benefits = [
    "Pele mais firme, luminosa e hidratada",
    "Pode ser combinado com outros tratamentos",
    "Recuperação rápida",
    "Resultado natural e progressivo"
  ];

  const indications = [
    "Rosto cansado ou opaco",
    "Linhas finas ao redor dos olhos e da boca",
    "Ressecamento excessivo",
    "Primeiros sinais de envelhecimento"
  ];

  const differentials = [
    "Hidratação profunda de dentro para fora",
    "Ácido hialurônico específico para hidratação dérmica",
    "Técnica minimamente invasiva",
    "Resultados visíveis desde a primeira sessão"
  ];

  return (
    <ProcedurePage
      title="Hidratação profunda e viço com Skinbooster"
      description="O Skinbooster é um procedimento injetável que hidrata profundamente a pele, melhora sua textura, suaviza linhas finas e devolve o viço perdido com o tempo. Diferente de cremes ou séruns, ele atua de dentro para fora, com ácido hialurônico específico para hidratação dérmica."
      emoji="💧"
      benefits={benefits}
      indications={indications}
      differentials={differentials}
      procedureName="Skinbooster"
      heroImage='/lovable-uploads/skinbooster1.png'
      benefitImage='/lovable-uploads/skinbooster2.png'
    />
  );
};

export default Skinbooster;