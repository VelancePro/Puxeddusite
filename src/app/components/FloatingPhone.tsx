import { Phone } from 'lucide-react';

export function FloatingPhone() {
  return (
    <a
      href="tel:0669945608"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#C0392B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#A02F23] transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Appeler"
    >
      <Phone className="w-7 h-7 text-white group-hover:animate-pulse" />
    </a>
  );
}