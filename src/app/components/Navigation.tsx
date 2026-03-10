import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="focus:outline-none">
              <img 
                src={logoImage} 
                alt="VALORYS - Assurance, Retraite, Épargne, Investissement, Patrimoine" 
                className="h-12 lg:h-14 w-auto cursor-pointer"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('expertises')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors relative group py-2"
            >
              Nos Expertises
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0392B] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('particuliers')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors relative group py-2"
            >
              Particuliers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0392B] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('professionnels')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors relative group py-2"
            >
              Professionnels
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0392B] group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('qui-sommes-nous')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors relative group py-2"
            >
              Qui sommes-nous
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C0392B] group-hover:w-full transition-all duration-300" />
            </button>
            <button
              onClick={handleContactClick}
              className="bg-[#C0392B] text-white px-6 py-2 rounded-full hover:bg-[#A02E24] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#1B2A4A] p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '80px' }}
        >
          <div className="flex flex-col p-6 space-y-4">
            <button 
              onClick={() => scrollToSection('expertises')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors text-left py-2"
            >
              Nos Expertises
            </button>
            <button 
              onClick={() => scrollToSection('particuliers')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors text-left py-2"
            >
              Particuliers
            </button>
            <button 
              onClick={() => scrollToSection('professionnels')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors text-left py-2"
            >
              Professionnels
            </button>
            <button 
              onClick={() => scrollToSection('qui-sommes-nous')}
              className="text-[#333333] hover:text-[#C0392B] transition-colors text-left py-2"
            >
              Qui sommes-nous
            </button>
            <button
              onClick={handleContactClick}
              className="bg-[#C0392B] text-white px-6 py-3 rounded-full hover:bg-[#A02E24] transition-colors text-center"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
