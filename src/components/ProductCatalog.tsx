import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Product } from '../types';
import {
  FileSpreadsheet,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { products, setSelectedProductForModal, setRfqPreselectedProduct } = useCms();
  const [activeCategory, setActiveCategory] = useState<'all' | 'ferro-alloys' | 'minerals-ores'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleRequestQuote = (product: Product, grade?: string) => {
    setRfqPreselectedProduct({ product, grade });
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const navOffset = 80;
      const elPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products-section" className="py-20 bg-[#F8F9FA] border-t border-b border-gray-200 relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D32F2F] uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 bg-[#D32F2F]" />
              <span>Products and specifications</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
              SIX CORE MATERIALS
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mt-2 font-normal">
              Select a product to review available grades, chemistry, sizing, packing, origin and applications. Send the details with your enquiry for a commercial quotation.
            </p>
          </div>

          {/* Category Filter Tabs - Geometric Balance style */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 border border-gray-200 shadow-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              All ({products.length})
            </button>
            <button
              onClick={() => setActiveCategory('ferro-alloys')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'ferro-alloys'
                  ? 'bg-[#D32F2F] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              Ferro Alloys
            </button>
            <button
              onClick={() => setActiveCategory('minerals-ores')}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'minerals-ores'
                  ? 'bg-[#D32F2F] text-white shadow-xs'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              Minerals & Ores
            </button>
          </div>
        </div>

        {/* Product Cards Grid - Clean Geometric balance white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white border border-gray-200 hover:border-[#D32F2F] shadow-xs transition-all duration-200 flex flex-col justify-between overflow-hidden text-left"
            >
              {/* Product Image and Formula Tag */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = 'https://www.sfaglobex.ae/assets/Ferro_silicon-CxA40zQs.jpg';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Chemical Formula Pill */}
                <div className="absolute top-3 left-3 bg-[#1A1A1A] border border-gray-800 px-2.5 py-1 text-xs font-mono font-bold text-white flex items-center gap-1.5 shadow">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F]" />
                  <span>{product.chemicalFormula}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-[#D32F2F] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow">
                  {product.category.replace('-', ' ')}
                </div>

                {/* Sizing Preview */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-medium text-white bg-black/80 px-2.5 py-1 backdrop-blur-xs border border-white/20 line-clamp-1">
                    Sizing: {product.specs.sizing}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#D32F2F] font-bold uppercase tracking-wider mt-0.5">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Chemical Assay Summary Pill Grid */}
                <div className="space-y-1.5 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span className="font-bold uppercase tracking-wider">Specification summary</span>
                    <span className="text-[#D32F2F] font-semibold">Available on request</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {product.composition.slice(0, 4).map((comp, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-200 px-2 py-1 flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-gray-800">{comp.element}:</span>
                        <span className="text-[10px] text-gray-600 truncate max-w-[90px] font-medium">{comp.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grades summary */}
                <div className="text-[11px] text-gray-500">
                  <span className="font-bold text-gray-800 uppercase tracking-wide">Grades: </span>
                  <span>
                    {product.grades.slice(0, 2).join(', ')}
                    {product.grades.length > 2 && ` +${product.grades.length - 2} more`}
                  </span>
                </div>

                {/* Action CTAs - Geometric Balance Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setSelectedProductForModal(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-white hover:bg-gray-100 border border-[#1A1A1A] transition-colors"
                  >
                    <span>Tech Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleRequestQuote(product)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#b71c1c] transition-colors shadow-xs"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Strip - Geometric Balance architectural callout */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-gray-200 border-l-8 border-l-[#D32F2F] flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-xs">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 text-[#D32F2F] shrink-0 border border-red-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1A1A1A] font-heading uppercase tracking-tight">
                Need a different grade or packing format?
              </h4>
              <p className="text-xs text-gray-600 mt-1 max-w-2xl leading-relaxed">
                Include your chemistry, size, packing, quantity and destination in the enquiry. Our trading desk will review suitable supply options.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleRequestQuote(products[0])}
            className="shrink-0 px-6 py-3 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            Discuss your requirement
          </button>
        </div>

      </div>
    </section>
  );
};
