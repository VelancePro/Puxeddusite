import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { WhoWeAre } from './components/WhoWeAre';
import { OurServices } from './components/OurServices';
import { ServiceDetails } from './components/ServiceDetails';
import { WhyVALORYS } from './components/WhyVALORYS';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { FloatingPhone } from './components/FloatingPhone';

export function HomePage() {
  return (
    <div className="font-['DM_Sans'] bg-white">
      <Navigation />
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <OurServices />
      <ServiceDetails />
      <WhyVALORYS />
      <CTABanner />
      <Footer />
      <FloatingPhone />
    </div>
  );
}
