import Hero from '../components/Hero';
import TrustedBrands from '../components/TrustedBrands';
import ServicesOverview from '../components/ServicesOverview';

import TestimonialsSlider from '../components/TestimonialsSlider';
import FinalCTA from '../components/FinalCTA';

interface HomeProps {
  onOpenAIFormulate: () => void;
  onOpenConsultation: () => void;
}

export default function Home({ onOpenAIFormulate, onOpenConsultation }: HomeProps) {
  return (
    <div className="space-y-0">
      <Hero onOpenAIFormulate={onOpenAIFormulate} onOpenConsultation={onOpenConsultation} />
      <TrustedBrands />
      <ServicesOverview />

      <TestimonialsSlider />
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
