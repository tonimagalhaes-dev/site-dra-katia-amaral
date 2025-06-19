import ProcedurePage from '@/components/ProcedurePage';

const GluteosUp = () => {
  const benefits = [
    "Realçado com ácido hialurônico específico para área corporal",
    "Efeito lifting e volumizador",
    "Sem cortes, sem cirurgia",
    "Rápida recuperação"
  ];

  const indications = [
    "Perda de volume com o tempo",
    "Falta de projeção glútea",
    "Assimetrias"
  ];

  const differentials = [
    "Técnica precisa e segura",
    "Resultado visível na hora",
    "Sem necessidade de afastamento de atividades"
  ];

  return (
    <ProcedurePage
      title="Glúteos Up – Modelagem Glútea sem Cirurgia"
      description="O procedimento Glúteos Up é ideal para quem deseja levantar, projetar ou dar mais firmeza aos glúteos com um resultado natural e imediato."
      emoji="🍑"
      benefits={benefits}
      indications={indications}
      differentials={differentials}
      procedureName="Glúteos Up"
    />
  );
};

export default GluteosUp;