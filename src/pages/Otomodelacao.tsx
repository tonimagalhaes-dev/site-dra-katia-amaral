import ProcedurePage from '@/components/ProcedurePage';

const Otomodelacao = () => {
  const benefits = [
    "Corrige orelhas proeminentes (abano)",
    "Técnica com ácido hialurônico ou fios de sustentação",
    "Procedimento rápido, sem cortes",
    "Indicado para adultos e adolescentes"
  ];

  const differentials = [
    "Técnica precisa e segura",
    "Resultado visível na hora",
    "Sem necessidade de afastamento de atividades"
  ];

  return (
    <ProcedurePage
      title="Otomodelação: Corrija orelhas de abano sem cirurgia"
      description="A Otomodelação é um procedimento estético não cirúrgico que remodela o formato das orelhas com resultados discretos e eficazes."
      emoji="👂"
      benefits={benefits}
      differentials={differentials}
      procedureName="Otomodelação"
    />
  );
};

export default Otomodelacao;