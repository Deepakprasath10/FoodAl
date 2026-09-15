import BrandStory from '../components/BrandStory';
import WhyChooseUs from '../components/WhyChooseUs';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export default function AboutPage({ onOpenConsultation }: AboutPageProps) {
  return (
    <>
      <BrandStory />
      <WhyChooseUs onOpenConsultation={onOpenConsultation} />
    </>
  );
}
