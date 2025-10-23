import ProcedurePage from '@/components/ProcedurePage';

const JatoDePlasma = () => {
  const benefits = [
    "Lifting instantâneo sem cirurgia",
    "Estimula renovação celular natural",
    "Reduz rugas, linhas e flacidez",
    "Melhora textura e firmeza da pele"
  ];

  const indications = [
    "Flacidez de pálpebras (blefaroplastia não cirúrgica)",
    "Rugas ao redor dos olhos e boca",
    "Linhas de expressão marcadas",
    "Estrias e cicatrizes",
    "Verrugas e pintas pequenas",
    "Manchas de idade"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Jato de Plasma: Lifting Sem Cirurgia com Resultados Imediatos"
      description="O Jato de Plasma é um procedimento inovador que utiliza energia de plasma para estimular a retração da pele, promovendo lifting instantâneo e renovação celular. Ideal para tratar flacidez, rugas e imperfeições com precisão milimétrica, sem cortes ou pontos."
      emoji="⚡"
      benefits={benefits}
      indications={indications}
      sessions="1 a 3 sessões, conforme a área tratada"
      differentials={differentials}
      procedureName="Jato de Plasma"
      heroImage='/images/plasma2.webp'
      benefitImage='/images/plasma1.webp'
    />
  );
};

export default JatoDePlasma;