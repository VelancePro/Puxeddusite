import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Heart, Home, PiggyBank, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export function ServiceDetails() {
  return (
    <>
      {/* Block A - Assurance & Prévoyance */}
      <section id="particuliers" className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721042235332-45f89689cfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWUlMjBpbnN1cmFuY2V8ZW58MXx8fHwxNzczMDAyNTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Famille protégée"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating icon badge */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content Right */}
            <div>
              <div className="border-l-4 border-[#C0392B] pl-6 mb-6">
                <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-4">
                  ASSURANCE & PRÉVOYANCE
                </div>
                <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-[#1B2A4A] mb-6">
                  Protégez ce qui compte vraiment
                </h2>
                <p className="text-lg text-[#333333] leading-relaxed mb-8">
                  La vie est pleine d'imprévus. Nous vous aidons à sécuriser votre avenir et celui de vos proches avec des solutions d'assurance et de prévoyance adaptées à chaque étape de votre vie.
                </p>
              </div>

              <Accordion.Root type="single" collapsible className="space-y-4 mb-8">
                <Accordion.Item value="item-1" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Assurance vie</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Constituez une épargne sécurisée tout en bénéficiant d'avantages fiscaux et transmettez votre patrimoine dans des conditions optimales.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Prévoyance individuelle</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Protégez vos revenus en cas d'arrêt de travail, d'invalidité ou de décès avec des garanties sur-mesure.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Assurance emprunteur</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Obtenez les meilleures conditions pour votre assurance de prêt immobilier et économisez sur vos mensualités.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-4 rounded-full hover:bg-[#1B2A4A] hover:text-white transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Block B - Retraite & Épargne */}
      <section className="bg-[#F4F6F9] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Left */}
            <div className="order-2 lg:order-1">
              <div className="border-l-4 border-[#C0392B] pl-6 mb-6">
                <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-4">
                  RETRAITE & ÉPARGNE
                </div>
                <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-[#1B2A4A] mb-6">
                  Préparez sereinement votre avenir
                </h2>
                <p className="text-lg text-[#333333] leading-relaxed mb-8">
                  Il n'est jamais trop tôt pour penser à votre retraite. Nous vous accompagnons dans la constitution d'une épargne performante pour maintenir votre niveau de vie et réaliser vos projets.
                </p>
              </div>

              <Accordion.Root type="single" collapsible className="space-y-4 mb-8">
                <Accordion.Item value="item-1" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden bg-white">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">PER (Plan Épargne Retraite)</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Bénéficiez d'avantages fiscaux immédiats tout en préparant votre retraite avec un plan flexible et performant.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden bg-white">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Assurance vie épargne</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Faites fructifier votre capital avec des supports diversifiés adaptés à votre profil de risque.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden bg-white">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">SCPI</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Investissez dans l'immobilier sans les contraintes de gestion et percevez des revenus réguliers.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-4 rounded-full hover:bg-[#1B2A4A] hover:text-white transition-all duration-300">
                En savoir plus
              </button>
            </div>

            {/* Image Right */}
            <div className="relative order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758686254550-c5d8f4de1b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBlbGRlcmx5JTIwY291cGxlfGVufDF8fHx8MTc3MzAzMjEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Planification retraite"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating icon badge */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center shadow-lg">
                <PiggyBank className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block C - Patrimoine & Investissement */}
      <section id="professionnels" className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Left */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762941177632-fe37c485c428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwd2VhbHRoJTIwcHJvcGVydHl8ZW58MXx8fHwxNzczMDg5Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Investissement immobilier"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating icon badge */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content Right */}
            <div>
              <div className="border-l-4 border-[#C0392B] pl-6 mb-6">
                <div className="text-[#C0392B] text-xs font-semibold tracking-[0.2em] mb-4">
                  PATRIMOINE & INVESTISSEMENT
                </div>
                <h2 className="font-['DM_Serif_Display'] text-4xl lg:text-5xl text-[#1B2A4A] mb-6">
                  Valorisez et optimisez votre patrimoine
                </h2>
                <p className="text-lg text-[#333333] leading-relaxed mb-8">
                  Développez votre patrimoine avec une stratégie personnalisée. Nous vous accompagnons dans vos choix d'investissement et l'optimisation fiscale de vos actifs.
                </p>
              </div>

              <Accordion.Root type="single" collapsible className="space-y-4 mb-8">
                <Accordion.Item value="item-1" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Gestion de patrimoine</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Une approche globale pour structurer, protéger et transmettre votre patrimoine dans les meilleures conditions.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Immobilier</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Découvrez les meilleures opportunités d'investissement immobilier locatif et de pierre-papier.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="border border-[#1B2A4A]/20 rounded-lg overflow-hidden">
                  <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F4F6F9] transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C0392B] rounded-full" />
                      <span className="font-semibold text-[#1B2A4A]">Défiscalisation</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[#1B2A4A] transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4 pt-2 text-[#666666] data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    Réduisez légalement vos impôts grâce à des dispositifs adaptés (Pinel, Malraux, PER, etc.).
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <button className="border-2 border-[#1B2A4A] text-[#1B2A4A] px-8 py-4 rounded-full hover:bg-[#1B2A4A] hover:text-white transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
