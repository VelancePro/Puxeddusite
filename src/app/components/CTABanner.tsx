export function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="bg-[#C0392B] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-['DM_Serif_Display'] text-3xl lg:text-4xl text-white mb-3">
              Demandez votre bilan patrimonial gratuit.
            </h2>
            <p className="text-pink-100 text-lg">
              Premier rendez-vous sans engagement.
            </p>
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-white text-[#1B2A4A] px-10 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap flex items-center gap-2"
          >
            Contactez-nous
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
