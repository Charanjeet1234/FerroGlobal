import React from 'react';
import { useCms } from '../context/CmsContext';

interface LogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'minimal';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { customLogoUrl, setCustomLogoUrl } = useCms();

  return (
    <div id="company-logo-container" className={`inline-flex items-center gap-3 relative group ${className}`}>
      {/* Optional logo uploaded through the private CMS */}
      {customLogoUrl ? (
        <div className="relative flex items-center gap-2">
          <img
            src={customLogoUrl}
            alt="ferro global trading fz-llc"
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
        <div className="flex items-center gap-2.5">
          <img
            src={variant === 'footer' ? '/assets/ferro-global-logo-footer.svg' : '/assets/ferro-global-logo.svg'}
            alt="ferro global trading fz-llc"
            className={`h-auto object-contain ${variant === 'hero' ? 'w-[280px] max-w-full' : variant === 'footer' ? 'w-[240px] max-w-full' : 'w-[220px] max-w-full max-sm:w-[160px]'}`}
          />
        </div>
      )}

    </div>
  );
};
