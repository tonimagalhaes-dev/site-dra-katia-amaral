import ProcedurePage from '@/components/ProcedurePage';

const BioestimuladorColageno = () => {
  const benefits = [
    "Estímulo de colágeno a longo prazo",
    "Melhora da firmeza e elasticidade da pele",
    "Tratamento sem cortes ou cirurgia",
    "Indicado para rosto, pescoço, braços, glúteos e outras regiões",
    "Resultados progressivos e visíveis"
  ];

  const products = [
    "Ellansé (base de policaprolactona)",
    "Rennova Diamond (hidroxiapatita de cálcio)",
    "Sculptra (ácido poli-L-láctico)"
  ];

  const differentials = [
    "Técnica personalizada para cada tipo de pele",
    "Acompanhamento durante todo o processo",
    "Resultados duradouros e naturais"
  ];

  return (
    <ProcedurePage
      title="Reative seu colágeno naturalmente com bioestimuladores"
      description="Com o passar do tempo, nosso corpo reduz a produção natural de colágeno, causando flacidez e perda de firmeza. Os bioestimuladores atuam diretamente na causa, promovendo rejuvenescimento profundo e gradual, com resultados duradouros e naturais."
      emoji="🧴"
      benefits={benefits}
      products={products}
      sessions="De 1 a 3 sessões, conforme avaliação."
      differentials={differentials}
      procedureName="Bioestimulador de Colágeno"
      heroImage="/images/bioestimulador1.webp"
      benefitImage="/images/bioestimulador4.webp"
    />
  );
};

export default BioestimuladorColageno;