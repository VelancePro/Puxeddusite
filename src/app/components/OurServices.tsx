import { Shield, Wallet, TrendingUp, Building2, Award, ArrowRight } from 'lucide-react';

export function OurServices() {
  const services = [
    {
      icon: Shield,
      title: "Assurance Vie",
      description: "Protection et transmission de patrimoine pour sécuriser l'avenir de vos proches."
    },
    {
      icon: Wallet,
      title: "Retraite",
      description: "Plans d'épargne retraite optimisés pour maintenir votre niveau de vie."
    },
    {
      icon: TrendingUp,
      title: "Épargne",
      description: "Solutions d'investissement adaptées à vos objectifs et votre profil."
    },
    {
      icon: Building2,
      title: "Investissement",
      description: "Opportunités immobilières et financières pour faire fructifier votre capital."
    },
    {
      icon: Award,
      title: "Patrimoine",
      description: "Gestion globale et optimisation fiscale de votre patrimoine."
    }
  ];

  return (
    <section id="expertises" className="bg-[#F4F6F9] py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B2A4A] opacity-[0.03] rotate-45 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-4">
            NOS DOMAINES D'EXPERTISE
          </div>
          <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-[#1B2A4A] mb-6">
            Des solutions pour chaque besoin
          </h2>
          <p className="text-lg text-[#333333]">
            Particulier, professionnel ou entreprise — nous trouvons l'offre adaptée à votre situation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-[#C0392B] rounded-xl p-8 flex items-center justify-center hover:bg-[#A02F23] transition-colors cursor-pointer group">
            <div className="text-center">
              <div className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                Voir toutes nos solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
