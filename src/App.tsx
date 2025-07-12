
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HarmonizacaoFacial from "./pages/HarmonizacaoFacial";
import HarmonizacaoGlutea from "./pages/HarmonizacaoGlutea";
import Otomodelacao from "./pages/Otomodelacao";
import BioestimuladorColageno from "./pages/BioestimuladorColageno";
import Skinbooster from "./pages/Skinbooster";
import PreenchimentoLabial from "./pages/PreenchimentoLabial";
import Micropigmentacao from "./pages/Micropigmentacao";
import Ozonioterapia from "./pages/Ozonioterapia";
import JatoDePlasma from "./pages/JatoDePlasma";
import EmpetiersMesoterapia from "./pages/EmpetiersMesoterapia";
import Escleroterapia from "./pages/Escleroterapia";
import TerapiaCapilar from "./pages/TerapiaCapilar";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageview } from './lib/analytics';
import { BUILD_TRIGGER, FORCE_REBUILD, REBUILD_VERSION } from './lib/build-trigger';
import React from 'react';


const queryClient = new QueryClient();

// Componente interno para tracking (precisa estar dentro do BrowserRouter)
const AppTracker = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
    // Reference all build triggers to ensure clean compilation
    console.log('Build trigger:', BUILD_TRIGGER, 'Force rebuild:', FORCE_REBUILD, 'Version:', REBUILD_VERSION);
  }, [location]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppTracker>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/harmonizacao-facial" element={<HarmonizacaoFacial />} />
            <Route path="/harmonizacao-glutea" element={<HarmonizacaoGlutea />} />
            <Route path="/otomodelacao" element={<Otomodelacao />} />
            <Route path="/bioestimulador-colageno" element={<BioestimuladorColageno />} />
            <Route path="/skinbooster" element={<Skinbooster />} />
            <Route path="/preenchimento-labial" element={<PreenchimentoLabial />} />
            <Route path="/ozonioterapia" element={<Ozonioterapia />} />
            <Route path="/micropigmentacao" element={<Micropigmentacao />} />
            <Route path="/jato-de-plasma" element={<JatoDePlasma />} />
            <Route path="/empetiers-mesoterapia" element={<EmpetiersMesoterapia />} />
            <Route path="/escleroterapia" element={<Escleroterapia />} />
            <Route path="/terapia-capilar" element={<TerapiaCapilar />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppTracker>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

