import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { createWhatsAppUrl } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Procedimentos', path: '#', isDropdown: true },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const procedureItems = [
    { label: 'Otomodelação', path: '/otomodelacao' },
    { label: 'Harmonização Facial', path: '/harmonizacao-facial' },
    {/*}
    { label: 'Harmonização Corporal', path: '/harmonizacao-corporal' },
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
     */}
  ];
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/drakatia_amaral/', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação.'), '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/Logo.png" 
              alt="Logo Dra. Katia Amaral"
              className="w-12 h-12 object-contain rounded-full bg-white"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair font-semibold text-lg text-foreground">Dra. Katia Amaral</h1>
              <p className="text-xs text-muted-foreground">Saúde e Estética Avançada</p>
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
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
            <Button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white mt-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
