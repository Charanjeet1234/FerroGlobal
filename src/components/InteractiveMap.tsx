import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  MapPin,
  Building,
  Navigation,
  Clock,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Train,
  Ship,
} from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const { companyInfo } = useCms();
  const [copied, setCopied] = useState(false);

  const hq = companyInfo.headquarters;
  const fullAddressString = `${hq.address}, ${hq.cluster}, ${hq.city}, ${hq.country}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddressString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Preatoni Tower, Cluster L, Jumeirah Lakes Towers, Dubai, UAE'
  )}`;

  return (
    <section id="headquarters-section" className="py-20 bg-white border-t border-b border-gray-200 relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D32F2F] uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 bg-[#D32F2F]" />
            <span>Operational Center & Commercial Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            DUBAI HEADQUARTERS & LOCATION MAP
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
            Strategically located in Jumeirah Lakes Towers (JLT), Dubai—the premier Middle Eastern commodities and free zone trading hub.
          </p>
        </div>

        {/* 2-Column Grid: Headquarters Details + Embedded Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card - Geometric Balance container */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-[#F8F9FA] border border-gray-200 border-l-4 border-l-[#D32F2F] text-left space-y-6 shadow-xs">
            
            {/* Address Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-50 text-[#D32F2F] border border-red-100">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                    {hq.tower}
                  </h3>
                  <span className="text-xs text-[#D32F2F] font-bold uppercase tracking-wider">{hq.cluster}</span>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 space-y-2 text-xs">
                <div className="text-gray-800 font-bold">
                  {hq.address}
                </div>
                <div className="text-gray-600">
                  {hq.cluster}, {hq.city}, {hq.country}
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black px-3 py-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Address'}</span>
                  </button>

                  <a
                    href={getDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D32F2F] hover:bg-red-50 border border-[#D32F2F] px-3 py-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Transit Proximity */}
            <div className="space-y-3 pt-2 border-t border-gray-200 text-xs">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#1A1A1A] block uppercase tracking-wider text-[11px]">Trading Hours:</span>
                  <span className="text-gray-600">{companyInfo.contact.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Train className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#1A1A1A] block uppercase tracking-wider text-[11px]">Public Transit Accessibility:</span>
                  <span className="text-gray-600">5-minute walk from DMCC Metro Station (Red Line)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ship className="w-4 h-4 text-[#D32F2F] mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-[#1A1A1A] block uppercase tracking-wider text-[11px]">Maritime Port Link:</span>
                  <span className="text-gray-600">Direct 20-minute freight corridor to Jebel Ali Port (DP World)</span>
                </div>
              </div>
            </div>

            {/* Direct Telephone Connections */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs">
              <a
                href={`tel:${companyInfo.contact.phonePrimary.replace(/\s/g, '')}`}
                className="p-3 bg-white border border-gray-200 hover:border-[#D32F2F] transition-colors"
              >
                <span className="text-[10px] text-gray-500 uppercase block font-bold tracking-wider">Trading Desk</span>
                <span className="font-bold text-[#1A1A1A] flex items-center gap-1 mt-0.5">
                  <Phone className="w-3 h-3 text-[#D32F2F]" />
                  <span>{companyInfo.contact.phonePrimary}</span>
                </span>
              </a>

              <a
                href={`tel:${companyInfo.contact.phoneSecondary.replace(/\s/g, '')}`}
                className="p-3 bg-white border border-gray-200 hover:border-[#D32F2F] transition-colors"
              >
                <span className="text-[10px] text-gray-500 uppercase block font-bold tracking-wider">WhatsApp / Direct</span>
                <span className="font-bold text-[#1A1A1A] flex items-center gap-1 mt-0.5">
                  <Phone className="w-3 h-3 text-[#D32F2F]" />
                  <span>{companyInfo.contact.phoneSecondary}</span>
                </span>
              </a>
            </div>

          </div>

          {/* Right Interactive Google Map Container - styled after Geometric Balance */}
          <div className="lg:col-span-7 relative min-h-[420px] overflow-hidden border border-gray-200 bg-gray-200 shadow-xs flex flex-col">
            
            {/* Map Top Bar */}
            <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between z-10 text-xs">
              <div className="flex items-center gap-2 text-gray-800 font-bold uppercase tracking-wider text-[11px]">
                <MapPin className="w-4 h-4 text-[#D32F2F]" />
                <span>Preatoni Tower, Cluster L, JLT, Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#D32F2F] hover:text-[#b71c1c] flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Responsive Interactive Map */}
            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Ferro Global Trading LLC Headquarters Map"
                src="https://maps.google.com/maps?q=Preatoni%20Tower%20Cluster%20L%20JLT%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
              
              {/* Overlay Marker Banner - Geometric Balance footer label */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 text-left shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider leading-tight text-[#1A1A1A]">
                  FERRO GLOBAL TRADING LLC <br />
                  <span className="font-normal text-gray-600 normal-case">
                    Preatoni Tower, Cluster L, Jumeirah Lakes Towers, Dubai, UAE
                  </span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
