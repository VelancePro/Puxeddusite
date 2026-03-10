export function TrustStrip() {
  const stats = [
    { number: "15 ans", label: "d'expérience" },
    { number: "+500", label: "clients accompagnés" },
    { number: "20+", label: "compagnies partenaires" },
    { number: "100%", label: "conseil indépendant" },
  ];

  return (
    <section className="bg-[#F4F6F9] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#C0392B]" />
              )}
              <div className="relative">
                <div className="text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
