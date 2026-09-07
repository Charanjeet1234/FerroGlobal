import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  Building2,
  Shield,
  Anchor,
  Globe,
  Award,
  CheckCircle2,
  Scale,
  FileCheck,
  TrendingUp,
  Cpu,
} from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  const { companyInfo } = useCms();

  return (
    <section id="company-section" className="py-20 bg-white border-b border-gray-200 relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D32F2F] uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 bg-[#D32F2F]" />
            <span>Corporate Heritage & Operating Philosophy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            BUILT FOR STABILITY. DRIVEN BY PRECISION.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Headquartered in Dubai, UAE, <strong>{companyInfo.name}</strong> operates as a dedicated global industrial sourcing partner. We deliver tailored raw material solutions to meet the demanding metallurgical, physical, and chemical requirements of modern steel producers, foundries, and industrial smelters worldwide.
          </p>
        </div>

        {/* 2-Column Profile & Corporate Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
            <div className="p-8 bg-[#F8F9FA] border border-gray-200 border-l-4 border-l-[#D32F2F] space-y-4 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#D32F2F]" />
                <span>The Ferro Global Advantage</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded to bridge primary smelters and international steel complexes, our trading infrastructure combines deep metallurgical domain mastery with agile physical logistics. Operating from Dubai’s vibrant commodity corridor in Jumeirah Lakes Towers (JLT), we oversee multi-origin shipments across five continents.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Whether supplying 5,000 MT breakbulk parcel shipments of High Carbon Silico Manganese or high-purity Ferro Molybdenum in certified steel drums, our contracts are anchored in verifiable consistency, guaranteed sizing distributions, and strict compliance with ASTM and DIN standards.
              </p>
            </div>

            {/* Core Values Grid - Geometric Balance cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyInfo.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-gray-200 hover:border-[#D32F2F] transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="p-1.5 bg-red-50 text-[#D32F2F] border border-red-100">
                      <Shield className="w-4 h-4" />
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#1A1A1A] uppercase tracking-wide">{val.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Pillar: Metallurgical Testing & Lab Assurance */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#1A1A1A] text-white border border-gray-900 shadow-md p-6 text-left space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="relative h-60 overflow-hidden border border-gray-800 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Metallurgical laboratory assay analysis"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-[#1A1A1A] px-3 py-1 text-xs font-mono font-bold text-[#D32F2F] border border-gray-800">
                    Third-Party Certified Inspection
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                    Independent Laboratory Verification
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Every parcel undergoes spectrographic assay, moisture testing, and sizing screen analysis at load port and discharge port through accredited international survey bodies:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                    {companyInfo.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-900 border border-gray-800 text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                        <span className="text-[11px] font-medium truncate">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs">
                <span className="text-gray-400 uppercase tracking-widest text-[10px]">Assay SLA</span>
                <span className="font-mono text-[#D32F2F] font-bold">100% Guaranteed Tolerance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Trading Footprint & Shipping Hubs */}
        <div className="p-8 bg-[#F8F9FA] border border-gray-200 text-left shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Global Transit Corridors</span>
              </div>
              <h3 className="font-heading text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
                STRATEGIC MARITIME NETWORK
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Positioned at the crossroads of east-west commerce, Ferro Global Trading LLC coordinates dedicated vessel charters and containerized freight connecting key global steel manufacturing clusters.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {companyInfo.keyPorts.map((port, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-gray-200 flex items-center gap-3 shadow-xs"
                >
                  <Anchor className="w-4 h-4 text-[#D32F2F] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-gray-800 block">{port}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Regular Vessel Discharge</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
