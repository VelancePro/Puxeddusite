import { useState } from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';
import logoImage from 'figma:asset/73d47321ff41c63afea534a872ded3d176a15ea0.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <div className="px-6 lg:px-12 py-6">
        <button onClick={() => navigate('/')} className="focus:outline-none">
          <img 
            src={logoImage} 
            alt="VALORYS" 
            className="h-12 w-auto cursor-pointer"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-12">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Form */}
          <div className="flex flex-col justify-center">
            <h1 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl mb-4">
              Soyez <span className="text-[#C0392B]">recontacté</span> sous{' '}
              <span className="text-[#C0392B]">24h</span>
            </h1>
            <p className="text-gray-600 mb-8">
              En soumettant ce formulaire, j'adhère à la{' '}
              <a href="#" className="text-[#C0392B] hover:underline">
                politique de confidentialité
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="nom@société.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C0392B] transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="n° de téléphone (facultatif)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C0392B] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#C0392B] text-white py-3 px-6 rounded-full hover:bg-[#A02E24] transition-colors font-medium"
              >
                Envoyer mes coordonnées
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2 text-[#C0392B]">
              <FileText className="w-5 h-5" />
              <a href="#" className="hover:underline">
                Télécharger le document d'entrée en relation
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info with Vertical Line */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#C0392B]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-[#C0392B] rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#C0392B]" />
              </div>
            </div>

            {/* Contact Blocks */}
            <div className="lg:pl-16">
              {/* VALORYS - Bureau Principal */}
              <div>
                <h3 className="font-['DM_Serif_Display'] text-2xl text-[#1B2A4A] mb-2">
                  VALORYS
                </h3>
                <p className="font-medium text-[#1B2A4A] mb-4">
                  Cabinet de Courtage en Assurance
                </p>
                <p className="text-[#C0392B] mb-4">
                  163 Chemin de Boudou<br />31140 Launaguet
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Michael Puxeddu :</span>
                    <a href="tel:0669945608" className="text-[#C0392B] hover:underline">
                      06 69 94 56 08
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email :</span>
                    <a href="mailto:mpuxeddu@cabinet-valorys.com" className="text-[#C0392B] hover:underline">
                      mpuxeddu@cabinet-valorys.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1B2A4A] text-white py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-[#C0392B] transition-colors"
          >
            Retour à l'accueil
          </button>
          <p>© 2026 VALORYS</p>
          <a href="#" className="hover:text-[#C0392B] transition-colors">
            Politique de confidentialité
          </a>
        </div>
      </footer>
    </div>
  );
}