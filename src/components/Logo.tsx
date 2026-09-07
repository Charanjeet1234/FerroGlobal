import React from 'react';
import { useCms } from '../context/CmsContext';
import { Sparkles, Upload } from 'lucide-react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'minimal';
  className?: string;
  showCustomSlotPrompt?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showCustomSlotPrompt = false,
}) => {
  const { customLogoUrl, setCustomLogoUrl } = useCms();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCustomLogoUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isDark = variant === 'footer';

  return (
    <div id="company-logo-container" className={`inline-flex items-center gap-3 relative group ${className}`}>
      {/* If a custom image was uploaded to the designated logo space */}
      {customLogoUrl ? (
        <div className="relative flex items-center gap-2">
          <img
            src={customLogoUrl}
            alt="Ferro Global Trading LLC"
            className="h-10 max-w-[180px] object-contain"
          />
          <button
            onClick={() => setCustomLogoUrl(null)}
            title="Reset to default brand logo"
            className="opacity-0 group-hover:opacity-100 text-[10px] bg-[#D32F2F] text-white px-2 py-0.5 rounded transition-opacity"
          >
            Reset
          </button>
        </div>
      ) : (
        /* Professional Red Minimalist Brand Logo & Designated Custom Logo Space */
        <div className="flex items-center gap-2.5">
          {/* Geometrical Monolith / Alloy Crystal Emblem */}
          <div className="relative flex-shrink-0 w-10 h-10 bg-[#1A1A1A] border border-[#D32F2F] flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
            >
              <path
                d="M20 4L34 12V28L20 36L6 28V12L20 4Z"
                fill="#D32F2F"
                fillOpacity="0.25"
                stroke="#D32F2F"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M20 4V36M6 12L34 28M34 12L6 28"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="3" fill="#D32F2F" />
            </svg>
          </div>

          {/* Typography */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1">
              <span className={`font-heading text-xl font-black tracking-tighter uppercase leading-none ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                FERRO GLOBAL
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D32F2F] leading-none">
                TRADING LLC
              </span>
              <span className="inline-block w-1 h-1 bg-[#D32F2F]" />
              <span className={`text-[9px] font-mono font-medium tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                ferroglobal.ae
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Designated Space to Add Logo Later - matches exact Design HTML pattern */}
      {showCustomSlotPrompt && (
        <label
          htmlFor="brand-logo-file-input"
          className="ml-3 hidden xl:inline-flex items-center justify-center w-40 h-9 border-2 border-dashed border-[#D32F2F] text-[#D32F2F] hover:bg-red-50/60 font-bold text-[11px] uppercase tracking-widest cursor-pointer transition-colors"
          title="Click to insert your official company SVG/PNG logo file into this reserved space"
        >
          <span>Logo Space</span>
          <input
            id="brand-logo-file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </label>
      )}
    </div>
  );
};
