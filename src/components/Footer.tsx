import React from 'react';
import { useCms } from '../context/CmsContext';
import { Logo } from './Logo';
import {
  Building2,
  Phone,
  Mail,
  ArrowUp,
  ShieldCheck,
  Globe2,
  Database,
  ExternalLink,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { companyInfo, products, setSelectedProductForModal, setIsCmsAdminOpen } = useCms();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="w-full bg-[#1A1A1A] text-white border-t border-gray-800 text-xs">
      {/* Top Geometric Banner */}
      <div className="border-b border-gray-800 py-10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
              Ready to Secure Your Ferro Alloy Supply Contracts?
            </h3>
            <p className="text-xs text-gray-400 font-normal">
              Direct physical delivery to GCC, European, Asian, and African ports backed by rigorous pre-shipment inspections.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact-section')}
              className="px-6 py-3 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              Request Spot Quote
            </button>
            <a
              href={`tel:${companyInfo.contact.phonePrimary.replace(/\s/g, '')}`}
              className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Call Trading Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" showCustomSlotPrompt={false} />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mt-3 font-normal">
              <strong>Ferro Global Trading LLC</strong> (ferroglobal.ae) is a premier Dubai-based commodities house supplying high-purity ferro alloys, primary metals, and smelting ores to steelmakers globally.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  {companyInfo.headquarters.address}, {companyInfo.headquarters.cluster}, {companyInfo.headquarters.city}, UAE
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a href={`tel:${companyInfo.contact.phonePrimary.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white">
                  {companyInfo.contact.phonePrimary} / {companyInfo.contact.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a href={`mailto:${companyInfo.contact.emailSales}`} className="text-gray-300 hover:text-white">
                  {companyInfo.contact.emailSales}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Bulk Ferro Alloys Catalog */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-gray-800 pb-2">
              Bulk Ferro Alloys
            </h4>
            <ul className="space-y-2">
              {products
                .filter((p) => p.category === 'ferro-alloys')
                .map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => setSelectedProductForModal(p)}
                      className="text-xs text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center justify-between w-full"
                    >
                      <span>{p.name}</span>
                      <span className="text-[10px] font-mono text-[#D32F2F]">{p.chemicalFormula}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Secondary Metals & Minerals */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-gray-800 pb-2">
              Metals & Minerals
            </h4>
            <ul className="space-y-2">
              {products
                .filter((p) => p.category !== 'ferro-alloys')
                .map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => setSelectedProductForModal(p)}
                      className="text-xs text-gray-400 hover:text-[#D32F2F] transition-colors flex items-center justify-between w-full"
                    >
                      <span>{p.name}</span>
                      <span className="text-[10px] font-mono text-[#D32F2F]">{p.chemicalFormula}</span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Quality, Portals & Governance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-[0.2em] border-b border-gray-800 pb-2">
              Governance & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('company-section')} className="text-gray-400 hover:text-white">
                  SGS Inspection SLA
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('news-section')} className="text-gray-400 hover:text-white">
                  Market Trends 2026
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('headquarters-section')} className="text-gray-400 hover:text-white">
                  Preatoni Tower JLT
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsCmsAdminOpen(true)}
                  className="text-[#D32F2F] hover:text-red-400 font-bold flex items-center gap-1 uppercase tracking-wider text-[11px]"
                >
                  <Database className="w-3 h-3" />
                  <span>Headless CMS</span>
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 bg-black/60 border border-gray-800 text-[11px] text-gray-400">
                <span className="font-bold text-gray-300 block mb-1 uppercase tracking-wider text-[10px]">Official Domain</span>
                <span className="font-mono text-[#D32F2F] font-bold">ferroglobal.ae</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar - Matching Geometric Balance layout */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[10px] uppercase tracking-widest">
          <div>
            © {new Date().getFullYear()} <strong>FERRO GLOBAL TRADING LLC</strong>. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span>DOMAIN: FERROGLOBAL.AE</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3 text-[#D32F2F]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
