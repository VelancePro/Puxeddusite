import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhoWeAre() {
  return (
    <section id="qui-sommes-nous" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462848-31a39258dbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZHZpc29yJTIwZGVzayUyMG9mZmljZXxlbnwxfHx8fDE3NzMwODkyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cabinet Valorys"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute top-6 left-6 bg-[#1B2A4A] text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1B2A4A] to-[#C0392B] rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded" />
              </div>
              <span className="font-semibold">Cabinet Valorys</span>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-4">
              QUI SOMMES-NOUS ?
            </div>
            <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-[#1B2A4A] mb-6">
              VALORYS, VOTRE CABINET DE COURTAGE INDÉPENDANT
            </h2>
            <div className="border-l-4 border-[#C0392B] pl-6 mb-6">
              <p className="text-lg text-[#333333] leading-relaxed mb-4">
                Depuis plus de 15 ans, Valorys accompagne particuliers et professionnels dans leurs décisions les plus importantes : protéger leur famille, préparer leur retraite, faire fructifier leur épargne et optimiser leur patrimoine.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed mb-4">
                En tant que courtier indépendant, nous ne sommes liés à aucune compagnie d'assurance. Notre seul engagement : vous proposer les meilleures solutions du marché, adaptées à votre situation unique.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">
                Notre équipe d'experts vous offre un accompagnement personnalisé, transparent et réactif à chaque étape de votre parcours.
              </p>
            </div>
            <button className="bg-[#C0392B] text-white px-8 py-4 rounded-full hover:bg-[#A02F23] transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
