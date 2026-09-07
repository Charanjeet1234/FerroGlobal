import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Ship,
  Layers,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { companyInfo, products } = useCms();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-32 sm:pt-36 pb-16 bg-[#F8F9FA] text-[#1A1A1A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Geometric Balance Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card with thick crimson left border */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-center border-l-8 border-[#D32F2F] border-y border-r border-gray-200 relative overflow-hidden shadow-xs text-left">
            {/* Background geometric watermark */}
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <svg className="w-56 h-56 text-[#D32F2F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#D32F2F]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-gray-500">
                Dubai Star, Cluster L, JLT • ferroglobal.ae
              </span>
            </div>

            {/* Bold Display Headline matching Geometric Balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none tracking-tighter mb-4 text-[#1A1A1A]">
              FERRO GLOBAL <br />
              <span className="text-[#D32F2F]">TRADING LLC</span>
            </h1>

            {/* Descriptive Lead */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mb-6 font-normal">
              Premium sourcing and international distribution of high-grade ferro alloys, continuous cast billets, and smelting ores. Engineered for stability, delivered for global industrial reliability.
            </p>

            {/* Verification Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-t border-gray-100 mb-6 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>SGS & Intertek Chemical Assays</span>
              </div>
              <div className="flex items-center gap-2">
                <Ship className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>Direct Maritime Logistics via Jebel Ali</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>Hedging & Structured Trade Finance</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <span>ASTM / DIN Conformity for EAF Furnaces</span>
              </div>
            </div>

            {/* Geometric Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-request-quote-btn"
                onClick={() => scrollTo('contact-section')}
                className="bg-[#1A1A1A] hover:bg-black text-white px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors shadow-xs inline-flex items-center gap-2"
              >
                <span>Download Catalog & Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D32F2F]" />
              </button>

              <button
                id="hero-view-products-btn"
                onClick={() => scrollTo('products-section')}
                className="border-2 border-[#1A1A1A] hover:bg-gray-100 text-[#1A1A1A] px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Global Portfolio
              </button>
            </div>
          </div>

          {/* Right Geometric Portfolio Highlight Card (charcoal #1A1A1A) */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between border border-gray-900 shadow-md text-left">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#D32F2F]">
                    Product Portfolio
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Prime smelter allocations in 1 MT big bags
                  </p>
                </div>
                <span className="text-4xl font-light text-gray-600">01</span>
              </div>

              <div className="space-y-4">
                <div className="border-b border-gray-800 pb-3 flex justify-between items-center group cursor-pointer" onClick={() => scrollTo('products-section')}>
                  <div>
                    <span className="text-base font-semibold text-white group-hover:text-[#D32F2F] transition-colors">Ferro Chrome</span>
                    <span className="block text-[11px] text-gray-400">High Carbon (60%–65% Cr) / Low Carbon</span>
                  </div>
                  <span className="font-mono text-xs text-[#D32F2F] font-bold">FeCr</span>
                </div>

                <div className="border-b border-gray-800 pb-3 flex justify-between items-center group cursor-pointer" onClick={() => scrollTo('products-section')}>
                  <div>
                    <span className="text-base font-semibold text-white group-hover:text-[#D32F2F] transition-colors">Ferro Manganese</span>
                    <span className="block text-[11px] text-gray-400">High Carbon 75% / Medium & Low Carbon</span>
                  </div>
                  <span className="font-mono text-xs text-[#D32F2F] font-bold">FeMn</span>
                </div>

                <div className="border-b border-gray-800 pb-3 flex justify-between items-center group cursor-pointer" onClick={() => scrollTo('products-section')}>
                  <div>
                    <span className="text-base font-semibold text-white group-hover:text-[#D32F2F] transition-colors">Silico Manganese</span>
                    <span className="block text-[11px] text-gray-400">Grades 60/14, 65/15 & 65/16 available</span>
                  </div>
                  <span className="font-mono text-xs text-[#D32F2F] font-bold">SiMn</span>
                </div>

                <div className="border-b border-gray-800 pb-3 flex justify-between items-center group cursor-pointer" onClick={() => scrollTo('products-section')}>
                  <div>
                    <span className="text-base font-semibold text-white group-hover:text-[#D32F2F] transition-colors">Ferro Silicon</span>
                    <span className="block text-[11px] text-gray-400">Precision 70% & 75% Si deoxidizer</span>
                  </div>
                  <span className="font-mono text-xs text-[#D32F2F] font-bold">FeSi</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800 flex items-center justify-between">
              <button
                onClick={() => scrollTo('products-section')}
                className="text-xs uppercase font-bold tracking-wider text-white underline underline-offset-8 decoration-[#D32F2F] hover:text-[#D32F2F] transition-colors"
              >
                Explore Full Inventory ({products.length} Items)
              </button>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
                Jebel Ali Ready
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Strip - Geometric Balance clean cards */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {companyInfo.metrics.map((m, idx) => (
            <div key={idx} className="bg-white p-5 border border-gray-200 border-l-4 border-l-[#D32F2F] text-left shadow-xs">
              <div className="font-heading text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                {m.value}
              </div>
              <div className="text-[11px] font-bold text-[#D32F2F] uppercase tracking-wider mt-0.5">
                {m.label}
              </div>
              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                {m.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
