import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
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
  };

  return (
    <footer id="contact" className="bg-[#1B2A4A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Logo */}
        <div className="mb-12">
          <div className="mb-4">
            <img 
              src={logoImage} 
              alt="VALORYS" 
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-300 max-w-md">
            Votre cabinet de courtage indépendant en assurance, retraite, épargne et gestion de patrimoine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Coordonnées */}
          <div>
            <h3 className="text-xl font-bold mb-6">Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C0392B] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">06 69 94 56 08</p>
                  <p className="text-sm text-gray-400">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C0392B] mt-1 flex-shrink-0" />
                <a href="mailto:mpuxeddu@cabinet-valorys.com" className="text-gray-300 hover:text-white transition-colors">
                  mpuxeddu@cabinet-valorys.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C0392B] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">163 Chemin de Boudou</p>
                  <p className="text-gray-300">31140 Launaguet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan du site */}
          <div>
            <h3 className="text-xl font-bold mb-6">Plan du site</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('qui-sommes-nous')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Qui sommes-nous
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('expertises')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nos expertises
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('particuliers')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Particuliers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('professionnels')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Professionnels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Nos expertises */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos expertises</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Assurance vie</li>
              <li className="text-gray-300">Retraite & PER</li>
              <li className="text-gray-300">Épargne</li>
              <li className="text-gray-300">Investissement</li>
              <li className="text-gray-300">Gestion de patrimoine</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <a 
            href="https://linkedin.com/in/michael-puxeddu-17773918a" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C0392B] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Separator */}
        <div className="h-px bg-[#C0392B] mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2026 VALORYS. Tous droits réservés. | Cabinet de courtage en assurance inscrit à l'ORIAS.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            {' · '}
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            {' · '}
            <a href="#" className="hover:text-white transition-colors">CGU</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
