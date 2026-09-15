import ProductCategoriesCarousel from '../components/ProductCategoriesCarousel';

interface ProductsPageProps {
  onOpenConsultation: () => void;
}

export default function ProductsPage({ onOpenConsultation }: ProductsPageProps) {
  return <ProductCategoriesCarousel onOpenConsultation={onOpenConsultation} />;
}
