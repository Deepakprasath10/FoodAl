import { useState } from 'react';
import { PRODUCT_CATEGORIES } from '../constants/data';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { ProductCategory } from '../types';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface ProductCategoriesCarouselProps {
  onOpenConsultation: () => void;
}

export default function ProductCategoriesCarousel({ onOpenConsultation }: ProductCategoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  useLockBodyScroll(!!selectedProduct);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCT_CATEGORIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCT_CATEGORIES.length) % PRODUCT_CATEGORIES.length);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FFFDF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] text-[#004B84] text-xs font-bold uppercase tracking-wider font-number mb-3 border border-[#E5E7EB]">
              Formulation Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1F2937] tracking-tight">
              Product Categories We Formulate
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] hover:bg-[#004B84] hover:text-[#FEB21A] text-[#004B84] flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-2xl bg-[#004B84] text-[#FEB21A] border border-[#FEB21A]/30 hover:bg-[#0D5FA3] flex items-center justify-center transition-all shadow-md"
              aria-label="Next category"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.slice(currentIndex, currentIndex + 3).concat(
            PRODUCT_CATEGORIES.slice(0, Math.max(0, currentIndex + 3 - PRODUCT_CATEGORIES.length))
          ).map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedProduct(cat)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-2xl hover:border-[#FEB21A] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-[#FEB21A] text-[#004B84] px-3 py-1 rounded-full shadow-sm font-number">
                    R&D Validated
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-[#1F2937] group-hover:text-[#004B84] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#004B84] mt-0.5">
                    "{cat.tagline}"
                  </p>
                  <p className="text-xs text-[#6B7280] font-body leading-relaxed mt-2 line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-[#F8FAFC] text-[#004B84] border border-[#E5E7EB] px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#004B84] group-hover:text-[#E5A400]">
                    <span>View Scientific Spec</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Spec Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#004B84]/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 text-[#6B7280] hover:text-[#1F2937] bg-[#F8FAFC] p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-extrabold font-number uppercase tracking-widest text-[#FEB21A] bg-[#004B84] px-3 py-1 rounded-full">
                      Formulation Blueprint
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                      {selectedProduct.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#1F2937] font-body leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                <h4 className="text-xs font-extrabold text-[#004B84] uppercase font-number tracking-wider mb-2">
                  Technical R&D Highlights
                </h4>
                <div className="space-y-1.5">
                  {selectedProduct.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#1F2937]">
                      <CheckCircle2 className="w-4 h-4 text-[#FEB21A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    onOpenConsultation();
                  }}
                  className="w-full bg-[#004B84] hover:bg-[#0D5FA3] text-white font-heading font-bold text-sm py-3.5 rounded-xl border border-[#FEB21A]/40 shadow-md flex items-center justify-center gap-2"
                >
                  Formulate Custom {selectedProduct.name}
                  <ArrowRight className="w-4 h-4 text-[#FEB21A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
