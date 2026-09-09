import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  X,
  FileSpreadsheet,
  Download,
  ShieldCheck,
  CheckCircle,
  Package,
  Globe,
  Award,
  Layers,
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal, setRfqPreselectedProduct } = useCms();

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;

  const handleOpenQuote = (grade?: string) => {
    setRfqPreselectedProduct({ product, grade });
    setSelectedProductForModal(null);
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

  const handleDownloadSpec = () => {
    // Generate an instant clean text/spec manifest file for metallurgical buyers
    const specContent = `FERRO GLOBAL TRADING LLC - TECHNICAL DATA SHEET
Commodity: ${product.name} (${product.chemicalFormula})
Headquarters: Dubai, UAE
Export Inquiries: marketing@ferroglobal.ae | +971 4 458 0205

=========================================
1. PRODUCT DESCRIPTION
${product.description}

2. CERTIFIED CHEMICAL COMPOSITION (TYPICAL)
${product.composition.map((c) => `- ${c.name} (${c.element}): ${c.percentage}`).join('\n')}

3. AVAILABLE COMMERCIAL GRADES
${product.grades.map((g) => `- ${g}`).join('\n')}

4. PHYSICAL & LOGISTICS SPECIFICATIONS
- Sizing Distribution: ${product.specs.sizing}
- Standard Export Packaging: ${product.specs.packing}
- Smelter Origins: ${product.specs.origin}
- Pre-Shipment Inspection: ${product.specs.inspection}

5. PRIMARY METALLURGICAL APPLICATIONS
${product.specs.applications.map((a) => `- ${a}`).join('\n')}

=========================================
Disclaimer: Technical parameters conform to standard international assay standards. Custom chemistries available upon request.
Issued by: Ferro Global Trading LLC, Office 2005, Preatoni Tower, Cluster L, JLT, Dubai, UAE.`;

    const blob = new Blob([specContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FerroGlobal_${product.chemicalFormula}_SpecSheet.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-8 text-left max-h-[90vh] flex flex-col">
        
        {/* Modal Header - Geometric Balance contrasting dark band */}
        <div className="p-6 bg-[#1A1A1A] border-b border-gray-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#D32F2F] text-white font-mono font-bold text-xs uppercase tracking-wider">
              {product.chemicalFormula}
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white uppercase tracking-tight">
                {product.name}
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                {product.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedProductForModal(null)}
            className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#1A1A1A]">
          
          {/* Main Description */}
          <div className="bg-[#F8F9FA] p-5 border border-gray-200 border-l-4 border-l-[#D32F2F]">
            <h4 className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider mb-1">
              Metallurgical Overview
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Chemical Assay Composition Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-[#1A1A1A] font-heading uppercase tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
                <span>Certified Chemical Composition Tolerances</span>
              </h4>
              <span className="text-[11px] text-gray-500 font-mono">ASTM / DIN Conformant</span>
            </div>

            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#F8F9FA] text-[#1A1A1A] border-b border-gray-200">
                    <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Element</th>
                    <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Chemical Symbol</th>
                    <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Standard Weight Percentage</th>
                    <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Assay Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {product.composition.map((c, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-4 font-bold text-gray-900">{c.name}</td>
                      <td className="py-2 px-4 font-mono font-bold text-[#D32F2F]">{c.element}</td>
                      <td className="py-2 px-4 font-mono font-medium text-gray-700">{c.percentage}</td>
                      <td className="py-2 px-4 text-gray-500">XRF / ICP Spectroscopy</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Available Grades with direct quote triggers */}
          <div>
            <h4 className="text-sm font-bold text-[#1A1A1A] font-heading uppercase tracking-wide mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D32F2F]" />
              <span>Available Commercial Grades (Select for Quote)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.grades.map((grade, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F8F9FA] border border-gray-200 flex items-center justify-between hover:border-[#D32F2F] transition-colors"
                >
                  <span className="text-xs font-semibold text-gray-800">{grade}</span>
                  <button
                    onClick={() => handleOpenQuote(grade)}
                    className="text-xs font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#b71c1c] px-3 py-1 transition-colors"
                  >
                    Select Grade
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics & Physical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-gray-200 space-y-3 shadow-xs">
              <h5 className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>Packing & Sizing Distribution</span>
              </h5>
              <div className="text-xs space-y-1.5">
                <div>
                  <span className="text-gray-500 font-medium">Standard Sizing: </span>
                  <span className="text-gray-900 font-bold">{product.specs.sizing}</span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium">Packaging: </span>
                  <span className="text-gray-900 font-bold">{product.specs.packing}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-gray-200 space-y-3 shadow-xs">
              <h5 className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Origin and inspection</span>
              </h5>
              <div className="text-xs space-y-1.5">
                <div>
                  <span className="text-gray-500 font-medium">Origin: </span>
                  <span className="text-gray-900 font-bold">{product.specs.origin}</span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium">Inspection: </span>
                  <span className="text-gray-900 font-bold">{product.specs.inspection}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metallurgical Applications */}
          <div className="p-4 bg-[#F8F9FA] border border-gray-200">
            <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
              Typical applications:
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-600">
              {product.specs.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D32F2F] mt-0.5 shrink-0" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-[#F8F9FA] border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleDownloadSpec}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-white hover:bg-gray-100 px-4 py-2.5 border border-[#1A1A1A] transition-colors"
          >
            <Download className="w-4 h-4 text-[#D32F2F]" />
            <span>Download Spec Sheet (.txt)</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedProductForModal(null)}
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-black px-4 py-2.5"
            >
              Close
            </button>
            <button
              onClick={() => handleOpenQuote()}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 transition-colors shadow-xs"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Request Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
