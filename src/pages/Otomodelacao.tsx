
import ProcedurePage from '@/components/ProcedurePage';
import { createWhatsAppUrl } from '@/lib/constants';

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
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-rose-50 to-gold-50">
        {/* Hero Section com imagem de fundo */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat py-20"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 30, 76, 0.7), rgba(189, 178, 172, 0.3)), url('/lovable-uploads/drv-clinic-elf-ear-filler-london.png')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-white">
                <h1 className="text-4xl lg:text-5xl font-bold font-playfair">
                  Otomodelação: Corrija orelhas de abano sem cirurgia
                </h1>
                <p className="text-xl text-white/90">
                  A Otomodelação é um procedimento estético não cirúrgico que remodela o formato das orelhas com resultados discretos e eficazes.
                </p>
                <button 
                  onClick={() => {
                    const message = `Olá! Gostaria de saber mais sobre Otomodelação e agendar uma avaliação.`;
                    window.open(createWhatsAppUrl(message), '_blank');
                  }}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Agendar Avaliação</span>
                </button>
              </div>
              
              {/* Imagem do procedimento */}
              <div className="relative">
                <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-8">
                  <img 
                    src="/lovable-uploads/Aesthetic-Innovations-8-Latest-Trends-in-Medical-Aesthetics-1024x683.jpg"
                    alt="Procedimento de Otomodelação"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restante do conteúdo usando o componente ProcedurePage sem o hero */}
      <ProcedurePage
        title=""
        description=""
        emoji=""
        benefits={benefits}
        differentials={differentials}
        procedureName="Otomodelação"
        hideHero={true}
      />
    </div>
  );
};

export default Otomodelacao;
