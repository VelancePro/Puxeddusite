import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
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
    <section className="relative min-h-screen mt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-[#1B2A4A] opacity-[0.02] rotate-45" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-[#1B2A4A] opacity-[0.02] rotate-45" />
      </div>

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)] relative">
        {/* Left Half - Content */}
        <div className="flex items-center justify-center px-6 lg:px-12 py-16 lg:py-24 bg-white">
          <div className="max-w-xl">
            <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-6">
              CABINET DE COURTAGE INDÉPENDANT
            </div>
            <h1 className="font-['DM_Serif_Display'] text-5xl lg:text-6xl text-[#1B2A4A] leading-tight mb-6">
              Votre avenir mérite<br />
              les meilleures solutions.
            </h1>
            <p className="text-lg text-[#333333] mb-8 leading-relaxed">
              Conseil indépendant en assurance, retraite, épargne et gestion de patrimoine — pour particuliers et professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('expertises')}
                className="bg-[#C0392B] text-white px-8 py-4 rounded-full hover:bg-[#A02F23] transition-all duration-300"
              >
                Découvrir nos solutions
              </button>
              <button 
                onClick={() => scrollToSection('qui-sommes-nous')}
                className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-4 rounded-full hover:bg-[#1B2A4A] hover:text-white transition-all duration-300"
              >
                Qui sommes-nous ?
              </button>
            </div>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 bg-[#1B2A4A] opacity-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2UlMjBvZmZpY2V8ZW58MXx8fHwxNzczMDg5MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Conseiller rencontrant des clients"
            className="w-full h-full object-cover"
          />
          
          {/* Floating Badge */}
          <div className="absolute bottom-8 left-8 lg:left-auto lg:-left-24 bg-[#1B2A4A] text-white px-8 py-6 rounded-xl shadow-2xl z-10">
            <div className="text-3xl font-bold mb-1">20+</div>
            <div className="text-sm text-gray-300">compagnies partenaires</div>
          </div>
        </div>
      </div>
    </section>
  );
}
