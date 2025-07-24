
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

    const whatIs = [
    "É uma técnica que permite remodelar a cartilagem das orelhas sem que haja danos, corrigindo deformidades ou assimétrias de maneira definitiva, sem a necessidade de cortes ou longos períodos de recuperação. Podendo ser realizada em adultos e crianças a partir de 8 anos de idade. É realizada através de fios estéreis e biocompatíveis, sem a necessidade de cirurgia."
    
  ];

  return (
    <ProcedurePage
      title="Chega de esconder as suas orelhas!"
      description="Você merece sentir-se incrível todos os dias, e a Otomodelação é a solução inovadora para corrigir orelhas proeminentes, proporcionando uma confiança renovada."
      emoji="👂"
      whatIs={whatIs}
      indications={["Indicado para falta de curvatura da anti-hélice da orelha. Neste caso, muitas vezes é possível reconstruir curvatura sem a necessidade de cortes atrás da orelha, apenas por meio da confecção de pontos de sutura.",
        "A Otomodelação também é indicada para pacientes que já fizeram cirurgia de Otoplastia e querem fazer alguma melhora no posicionamento da orelha.",
      ]}
      benefits={benefits}
      differentials={differentials}
      procedureName="Otomodelação"
      hideHero={false}
      heroImage="/lovable-uploads/otomodelacao5.jpg" // Caminho para a imagem de fundo
      benefitImage="/lovable-uploads/katia6.png" // Caminho para a imagem de benefícios
    />
  );
};

export default Otomodelacao;
