import ProcedurePage from '@/components/ProcedurePage';

const Micropigmentacao = () => {
  const benefits = [
    "Sobrancelhas definidas e naturais por até 2 anos",
    "Técnica fio a fio para resultado realista",
    "Correção de falhas e assimetrias",
    "Disfarce de cicatrizes e imperfeições"
  ];

  const indications = [
    "Sobrancelhas ralas ou com falhas",
    "Reconstrução de auréola após cirurgias",
    "Camuflagem de cicatrizes corporais",
    "Correção de formato e assimetrias",
    "Micropigmentação capilar para calvície",
    "Contorno de lábios desbotado"
  ];

  const differentials = [
    "Técnica segura realizada por enfermeira especializada",
    "Foco no pós-procedimento e acompanhamento",
    "Avaliação completa para entender o que você realmente precisa"
  ];

  return (
    <ProcedurePage
      title="Micropigmentação: Beleza e Autoestima Restauradas"
      description="A micropigmentação vai muito além das sobrancelhas. É uma técnica versátil que reconstrói auréolas após mastectomia, camufla cicatrizes, realiza micropigmentação capilar e corrige imperfeições em diversas partes do corpo. Cada procedimento é personalizado para restaurar sua autoestima com naturalidade e segurança."
      emoji="🎨"
      benefits={benefits}
      indications={indications}
      differentials={differentials}
      procedureName="Micropigmentação"
      heroImage="/lovable-uploads/micro3.jpg"
      benefitImage="/lovable-uploads/micro1.jpg"
    />
  );
};

export default Micropigmentacao;