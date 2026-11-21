import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { trackWhatsAppClick } = useAnalytics();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Procedimentos', path: '#', isDropdown: true },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const procedureItems = [
    { label: 'Otomodelação', path: '/otomodelacao' },
    { label: 'Harmonização Facial', path: '/harmonizacao-facial' },

    { label: 'Harmonização Corporal', path: '/harmonizacao-corporal' },
    /*}
    { label: 'Preenchimento Labial', path: '/preenchimento-labial' },
    { label: 'Harmonização Glútea', path: '/harmonizacao-glutea' },
    { label: 'Bioestimulador de Colágeno', path: '/bioestimulador-colageno' },
    { label: 'Skinbooster', path: '/skinbooster' },
    { label: 'Ozonioterapia', path: '/ozonioterapia' },
    { label: 'Micropigmentação', path: '/micropigmentacao' },
    { label: 'Jato de Plasma - Eletrocautério', path: '/jato-de-plasma' },
    { label: 'Empetiers/Mesoterapia', path: '/empetiers-mesoterapia' },
    { label: 'Escleroterapia', path: '/escleroterapia' },
    { label: 'Terapia Capilar', path: '/terapia-capilar' },
     */
  ];

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('header');
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fcfbf7] border-b border-[#efe8db]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/kedem-logo.webp"
              alt="Kedem Beauty & Care"
              width={200}
              height={252}
              className="h-[60px] w-auto object-contain"
            />
            <div>
              <p className="font-semibold text-base text-[#0e3157]">Dra. Kátia Amaral</p>
              <p className="text-xs text-muted-foreground">Estética avançada</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.isDropdown ? (
                  <>
                    <button className="text-foreground hover:text-primary transition-colors font-medium">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        {procedureItems.map((procedure) => (
                          <Link
                            key={procedure.path}
                            to={procedure.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          >
                            {procedure.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-foreground hover:text-primary transition-colors font-medium ${
                      location.pathname === item.path ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden lg:block">
            <Button onClick={handleWhatsAppClick} className="rounded-full bg-[#0e3157] hover:bg-[#194773] text-white">
              Agende sua avaliação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.isDropdown ? (
                    <div>
                      <div className="font-medium text-foreground mb-2">{item.label}</div>
                      <div className="ml-4 space-y-2">
                        {procedureItems.map((procedure) => (
                          <Link
                            key={procedure.path}
                            to={procedure.path}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {procedure.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;