
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
    `A otomodelação é uma técnica inovadora e não cirúrgica, 
    ideal para corrigir orelhas proeminentes (de abano) 
    sem os traumas e o longo tempo de recuperação de uma otoplastia tradicional. 
    Realizado em consultório com anestesia local, o procedimento utiliza 
    fios estéreis e biocompatíveis para remodelar a cartilagem de forma segura, 
    sem deixar cicatrizes visíveis. É a solução perfeita para adultos e crianças 
    (a partir de 8 anos) que buscam um resultado imediato, permanente e 
    que não exige repouso, permitindo o retorno à rotina no mesmo dia. 
    Como Enfermeira Esteta especialista e seguindo as regulamentações do COFEN, 
    a Dra. Kátia Amaral realiza a técnica com máxima segurança, utilizando materiais 
    de ponta e seguindo rigorosos protocolos de higiene e cuidado para garantir não 
    apenas a sua estética, mas a sua tranquilidade.`,];

  return (
    <ProcedurePage
      title="Diga Adeus às Orelhas de Abano, Sem Cirurgia"
      description="Resultados definitivos, naturais e seguros com a técnica de otomodelação."
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
