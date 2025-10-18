import { Hero } from '@/components/home/Hero';
import { PainPointsSection } from '@/components/home/PainPointsSection';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
import { CurrentWorkSection } from '@/components/home/CurrentWorkSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TrustIndicators } from '@/components/home/TrustIndicators';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { CTASection } from '@/components/home/CTASection';
import { ContactSection } from '@/components/home/ContactSection';
import currentWorkData from '@/data/current-work.json';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPointsSection />
      <FeaturedProduct />
      <CurrentWorkSection data={currentWorkData} />
      <ServicesSection />
      <TrustIndicators />
      <IndustriesSection />
      <CTASection />
      <ContactSection />
    </>
  );
}

