import { Link } from 'react-router-dom';
import { MapPin, Instagram, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

const Footer = () => {
  const { trackWhatsAppClick } = useAnalytics();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer');
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  const handleInstagramClick = () => {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', 'instagram_click', {
      event_category: 'engagement',
      event_label: window.location.pathname,
      value: 1,
      });
    }
    window.open('https://instagram.com/drakatia.amaral', '_blank');
  };

  return (
    <footer className="bg-[var(--kedem-ivory)] border-t border-[var(--kedem-sand)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
              src="/images/kedem-logo.webp"
              alt="Kedem Beauty & Care"
              width={200}
              height={252}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain"
              />
              <div>
              <h2 className="font-semibold text-lg">Dra. Kátia Amaral</h2>
              <p className="text-xs text-muted-foreground">Enfermeira esteta · COREN-SP 310.193</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Procedimentos estéticos personalizados, realizados por enfermeira especializada 
              e focada no seu bem-estar.
            </p>
          </div>

          {/* Menu Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Menu</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/otomodelacao" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Otomodelação
              </Link>
              <Link to="/harmonizacao-facial" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Harmonização Facial
              </Link>
               
              <Link to="/harmonizacao-corporal" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Harmonização Corporal
              </Link>
              {/*
              <Link to="/preenchimento-labial" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Preenchimento Labial
              </Link>
              <Link to="/harmonizacao-glutea" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Harmonização Glútea
              </Link>
              <Link to="/bioestimulador-colageno" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Bioestimulador de Colágeno
              </Link>
              <Link to="/ozonioterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Ozonioterapia
              </Link>
              <Link to="/micropigmentacao" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Micropigmentação
              </Link>
              <Link to="/jato-de-plasma" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Jato de Plasma - Eletrocautério
              </Link>
              <Link to="/empetiers-mesoterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Empetiers/Mesoterapia
              </Link>
              <Link to="/escleroterapia" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Escleroterapia
              </Link>
              <Link to="/terapia-capilar" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terapia Capilar
              </Link>
              */}
              
              <Link to="/sobre" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link to="/contato" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Cruz%2C+2105%2C+Sala+1410%2C+Vila+Mariana%2C+S%C3%A3o+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir endereço no Google Maps"
                className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Rua Santa Cruz, 2105 Sala 1410 - Vila Mariana, São Paulo</span>
              </a>

              <button 
                onClick={handleWhatsAppClick}
                className="kedem-button-outline inline-flex items-center gap-2 px-3 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>(11) 94224-2893</span>
              </button>
              
              <button 
                onClick={handleInstagramClick}
                className="kedem-button-outline inline-flex items-center gap-2 px-3 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary" />
                <span>@drakatia.amaral</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KedemTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
