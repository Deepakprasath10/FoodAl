import IndustriesGrid from '../components/IndustriesGrid';

interface IndustriesPageProps {
  onOpenConsultation: () => void;
}

export default function IndustriesPage({ onOpenConsultation }: IndustriesPageProps) {
  return <IndustriesGrid onOpenConsultation={onOpenConsultation} />;
}
