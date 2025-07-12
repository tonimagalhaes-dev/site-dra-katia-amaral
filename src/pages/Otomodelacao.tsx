
import ProcedurePage from '@/components/ProcedurePage';

const Otomodelacao = () => {
  const benefits = [
    "Corrige orelhas proeminentes (abano)",
    "Procedimento rápido, sem cortes",
    "Não é necessário repouso",
    "Realizado em crianças a partir de 7 adolescentes",
    "Não é necessário sedação",
    "Baixo custo"
  ];

  const differentials = [
    "Técnica precisa e segura",
    "Resultado visível na hora",
    "Sem necessidade de afastamento de atividades",
    "Sem necessidade de anestesia",
    "Resultado permanente"
  ];

  return (
    <ProcedurePage
      title="Chega de esconder as suas orelhas!"
      description="Transforme sua vida hoje mesmo com a Otomodelação, o procedimento que corrige orelhas proeminentes de forma rápida e eficaz. Ideal para adultos e adolescentes, sem necessidade de cirurgia."
      emoji="👂"
      benefits={benefits}
      differentials={differentials}
      procedureName="Otomodelação"
      hideHero={false}
      heroImage="/lovable-uploads/Otomodelacao.jpg" // Caminho para a imagem de fundo
      benefitImage="/lovable-uploads/Katia6 - Editado.png" // Caminho para a imagem de benefícios
    />
  );
};

export default Otomodelacao;
