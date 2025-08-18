import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createWhatsAppUrl } from './lib/constants';
import { MessageCircle } from 'lucide-react'; // Ícone para o botão

// --- O Code Splitting continua a funcionar ---
const Index = lazy(() => import('./pages/Index'));
const Otomodelacao = lazy(() => import('./pages/Otomodelacao'));
const Contato = lazy(() => import('./pages/Contato'));
const Sobre = lazy(() => import('./pages/Sobre'));
// ... (restante das importações lazy)
const BioestimuladorColageno = lazy(
  () => import('./pages/BioestimuladorColageno'),
);
const EmpetiersMesoterapia = lazy(
  () => import('./pages/EmpetiersMesoterapia'),
);
const Escleroterapia = lazy(() => import('./pages/Escleroterapia'));
const HarmonizacaoCorporal = lazy(
  () => import('./pages/HarmonizacaoCorporal'),
);
const HarmonizacaoFacial = lazy(() => import('./pages/HarmonizacaoFacial'));
const HarmonizacaoGlutea = lazy(() => import('./pages/HarmonizacaoGlutea'));
const JatoDePlasma = lazy(() => import('./pages/JatoDePlasma'));
const Micropigmentacao = lazy(() => import('./pages/Micropigmentacao'));
const Ozonioterapia = lazy(() => import('./pages/Ozonioterapia'));
const PreenchimentoLabial = lazy(() => import('./pages/PreenchimentoLabial'));
const Skinbooster = lazy(() => import('./pages/Skinbooster'));
const TerapiaCapilar = lazy(() => import('./pages/TerapiaCapilar'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Componente de "Carregando..."
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Carregando...</p>
  </div>
);

function App() {
  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Gostaria de agendar uma consulta.';
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <Router>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/otomodelacao" element={<Otomodelacao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route
              path="/bioestimulador-de-colageno"
              element={<BioestimuladorColageno />}
            />
            <Route
              path="/mesoterapia-emptiers"
              element={<EmpetiersMesoterapia />}
            />
            <Route path="/escleroterapia" element={<Escleroterapia />} />
            <Route
              path="/harmonizacao-corporal"
              element={<HarmonizacaoCorporal />}
            />
            <Route
              path="/harmonizacao-facial"
              element={<HarmonizacaoFacial />}
            />
            <Route
              path="/harmonizacao-glutea"
              element={<HarmonizacaoGlutea />}
            />
            <Route path="/jato-de-plasma" element={<JatoDePlasma />} />
            <Route path="/micropigmentacao" element={<Micropigmentacao />} />
            <Route path="/ozonioterapia" element={<Ozonioterapia />} />
            <Route
              path="/preenchimento-labial"
              element={<PreenchimentoLabial />}
            />
            <Route path="/skinbooster" element={<Skinbooster />} />
            <Route path="/terapia-capilar" element={<TerapiaCapilar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
      <Toaster />

      {/* BOTÃO FLUTUANTE ATUALIZADO COM TEXTO */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-5 right-5 bg-green-500 text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center gap-2"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <img src="/images/wa-ico.png" alt="WhatsApp" className="w-6 h-6" />
        <span className="hidden sm:inline">Fale Conosco</span>
      </button>
    </Router>
  );
}

export default App;

