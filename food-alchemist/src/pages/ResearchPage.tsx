import ResearchProcess from '../components/ResearchProcess';
import CaseStudies from '../components/CaseStudies';

interface ResearchPageProps {
  onOpenConsultation?: () => void;
}

export default function ResearchPage({ onOpenConsultation }: ResearchPageProps) {
  return (
    <>
      <ResearchProcess />
      <CaseStudies onOpenConsultation={onOpenConsultation || (() => window.dispatchEvent(new CustomEvent('open-consultation')))} />
    </>
  );
}
