import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createWhatsAppUrl } from './lib/constants';

// --- IMPLEMENTAÇÃO DO CODE SPLITTING ---
// Em vez de importar tudo de uma vez, usamos React.lazy para carregar
// cada página apenas quando ela for necessária.

const Index = lazy(() => import('./pages/Index'));
const Otomodelacao = lazy(() => import('./pages/Otomodelacao'));
const Contato = lazy(() => import('./pages/Contato'));
const Sobre = lazy(() => import('./pages/Sobre'));
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

// Componente de "Carregando..." para ser exibido enquanto as páginas carregam
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Carregando...</p>
  </div>
);

function App() {
  const handleWhatsAppClick = () => {
    const message = 'Olá, Dra. Kátia! Vi o site e gostaria de saber mais sobre a otomodelação. Podemos conversar?';
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <Router>
      <Header />
      {/* O Suspense mostra o PageLoader enquanto o componente da rota está sendo baixado */}
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

      {/* Botão Flutuante do WhatsApp 
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50"
        aria-label="Fale Conosco pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </button> */}
    </Router>
  );
}


const WhatsAppButton = () => (
  <a
    href={createWhatsAppUrl('Olá! Vi o site e gostaria de saber mais sobre a otomodelação.')}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '999px',
      height: 48,
      padding: '0 20px',
      color: 'white',
      fontWeight: 400,
      fontSize: 18,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      transition: 'box-shadow 0.2s',
    }}
    aria-label="Fale conosco pelo WhatsApp"
  >
    <img
      src="/images/wa-ico.png"
      alt="WhatsApp"
      width={44}
      height={44}
      style={{ display: 'block' }}
    />

    <span>Fale conosco</span>
  </a>
);

export default App;
