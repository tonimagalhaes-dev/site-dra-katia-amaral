import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HarmonizacaoFacial from "./pages/HarmonizacaoFacial";
import GluteosUp from "./pages/GluteosUp";
import Otomodelacao from "./pages/Otomodelacao";
import BioestimuladorColageno from "./pages/BioestimuladorColageno";
import Skinbooster from "./pages/Skinbooster";
import PreenchimentoLabial from "./pages/PreenchimentoLabial";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageview } from './lib/analytics';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  // resto do seu código...
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/harmonizacao-facial" element={<HarmonizacaoFacial />} />
          <Route path="/gluteos-up" element={<GluteosUp />} />
          <Route path="/otomodelacao" element={<Otomodelacao />} />
          <Route path="/bioestimulador-colageno" element={<BioestimuladorColageno />} />
          <Route path="/skinbooster" element={<Skinbooster />} />
          <Route path="/preenchimento-labial" element={<PreenchimentoLabial />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
