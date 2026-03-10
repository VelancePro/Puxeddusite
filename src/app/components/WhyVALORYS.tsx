import { Users, Zap, DollarSign, Target } from 'lucide-react';

export function WhyVALORYS() {
  const advantages = [
    {
      icon: Users,
      title: "Conseils personnalisés",
      description: "Un accompagnement sur-mesure adapté à votre situation unique et vos objectifs."
    },
    {
      icon: Zap,
      title: "Réactivité",
      description: "Une équipe disponible et réactive pour répondre à toutes vos questions rapidement."
    },
    {
      icon: DollarSign,
      title: "Tarifs compétitifs",
      description: "Les meilleures offres du marché grâce à notre indépendance et notre réseau."
    },
    {
      icon: Target,
      title: "Solutions sur-mesure",
      description: "Des stratégies personnalisées qui s'adaptent à votre profil et vos besoins."
    }
  ];

  return (
    <section className="bg-[#1B2A4A] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-white text-center mb-16">
          Les avantages de notre cabinet
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="text-center relative">
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-0 w-px h-full bg-[#C0392B]" />
                )}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
