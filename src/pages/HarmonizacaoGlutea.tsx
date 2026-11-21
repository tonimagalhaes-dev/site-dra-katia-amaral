import ProcedurePage from '@/components/ProcedurePage';

const HarmonizacaoGlutea = () => {
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
      title="Harmonização Glútea – Modelagem Glútea sem Cirurgia"
      description="O procedimento de harmonização Glútea é ideal para quem deseja levantar, projetar ou dar mais firmeza aos glúteos com um resultado natural e imediato."
      emoji="🍑"
      benefits={benefits}
      indications={indications}
      differentials={differentials}
      procedureName="Harmonização Glútea"
      hideHero={false}
      heroImage="/images/gluteo2.webp"
      benefitImage="/images/gluteo1.webp"
      sessions="1 sessão, com retoques conforme necessidade"
    />
  );
};

export default HarmonizacaoGlutea;