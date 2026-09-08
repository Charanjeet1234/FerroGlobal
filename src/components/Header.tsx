import React, { useState, useEffect } from 'react';
import { useCms } from '../context/CmsContext';
import { Logo } from './Logo';
import {
  Search,
  Phone,
  Mail,
  FileSpreadsheet,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Database,
  Building2,
  Globe2,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { companyInfo, setIsSearchOpen, setIsCmsAdminOpen, setRfqPreselectedProduct, products } = useCms();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2.5'
          : 'bg-white border-b border-gray-200 py-3'
      }`}
    >
      {/* Top micro-bar for direct Dubai trader contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden lg:flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-2">
        <div className="flex items-center gap-6 font-medium">
          <span className="flex items-center gap-1.5 text-gray-700">
            <Building2 className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>Dubai HQ: Preatoni Tower, Cluster L, JLT, UAE</span>
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span>Direct Shipments to GCC, Europe, Africa, India & Turkey</span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${companyInfo.contact.phonePrimary.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#D32F2F] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D32F2F]" />
            <span>{companyInfo.contact.phonePrimary}</span>
          </a>
          <a
            href={`mailto:${companyInfo.contact.emailSales}`}
            className="flex items-center gap-1.5 hover:text-[#D32F2F] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#D32F2F]" />
            <span>{companyInfo.contact.emailSales}</span>
          </a>
          <button
            onClick={() => setIsCmsAdminOpen(true)}
            id="header-cms-btn"
            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 px-2.5 py-0.5 border border-gray-200 transition-colors"
            title="Open Headless CMS Content Management Dashboard"
          >
            <Database className="w-3 h-3 text-[#D32F2F]" />
            <span>CMS Studio</span>
          </button>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Company Logo in Red & Designated Slot */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero-section');
            }}
            className="focus:outline-none"
            aria-label="Ferro Global Trading LLC Home"
          >
            <Logo />
          </a>
        </div>

        {/* Desktop Nav Links - Geometric uppercase tracking */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-600" aria-label="Main Navigation">
          <button
            onClick={() => scrollToSection('hero-section')}
            className="text-[#D32F2F] hover:text-[#D32F2F] transition-colors"
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button
              onClick={() => scrollToSection('products-section')}
              className="inline-flex items-center gap-1 text-gray-600 hover:text-[#D32F2F] transition-colors group"
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isProductsDropdownOpen ? 'rotate-180 text-[#D32F2F]' : 'text-gray-400'}`} />
            </button>

            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 shadow-xl py-2 z-50">
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#D32F2F] uppercase tracking-widest border-b border-gray-100">
                  Ferro Alloys & Metals
                </div>
                <div className="max-h-72 overflow-y-auto py-1">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        scrollToSection('products-section');
                      }}
                      className="w-full text-left px-3 py-1.5 text-[11px] leading-snug text-gray-700 hover:text-[#D32F2F] hover:bg-gray-50 flex items-center justify-between gap-3 group"
                    >
                      <span className="font-semibold group-hover:text-[#D32F2F] transition-colors">
                        {p.name}
                      </span>
                      <span className="text-[9px] font-mono text-gray-400 shrink-0">
                        {p.chemicalFormula}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-2 bg-gray-50">
                  <button
                    onClick={() => scrollToSection('products-section')}
                    className="w-full text-center text-xs text-[#D32F2F] font-bold uppercase tracking-wider py-1 flex items-center justify-center gap-1"
                  >
                    <span>View All Specifications</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('company-section')}
            className="hover:text-[#D32F2F] transition-colors"
          >
            Company
          </button>

          <button
            onClick={() => scrollToSection('news-section')}
            className="hover:text-[#D32F2F] transition-colors"
          >
            News & Insights
          </button>

          <button
            onClick={() => scrollToSection('headquarters-section')}
            className="hover:text-[#D32F2F] transition-colors"
          >
            Headquarters
          </button>

          <button
            onClick={() => scrollToSection('contact-section')}
            className="hover:text-[#D32F2F] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Action controls */}
        <div className="flex items-center gap-3">
          {/* Search Bar - styled after the Geometric Balance rounded pill */}
          <button
            id="global-search-trigger-btn"
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center bg-gray-100 hover:bg-gray-200/80 rounded-full px-4 py-2 w-48 sm:w-60 text-gray-500 text-xs font-medium transition-all"
            title="Search products, grades, and specifications (Cmd+K)"
          >
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="ml-2 text-gray-500 truncate text-xs">Search Ferro Alloys...</span>
            <kbd className="hidden sm:inline-block ml-auto bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[10px] text-gray-400 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Automated Request for Quote CTA Button - Geometric Balance style */}
          <button
            id="header-rfq-cta-btn"
            onClick={() => scrollToSection('contact-section')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] active:bg-[#991b1b] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 transition-colors shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>RFQ Quote</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-gray-100 border border-gray-200 text-gray-700 hover:text-black"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pb-3 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#D32F2F]" />
              <span>{companyInfo.contact.phonePrimary}</span>
            </span>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCmsAdminOpen(true);
              }}
              className="text-left text-[#D32F2F] font-bold flex items-center gap-1 uppercase tracking-wider"
            >
              <Database className="w-3 h-3" />
              <span>CMS Studio</span>
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-xs uppercase font-bold tracking-wider">
            <button
              onClick={() => scrollToSection('hero-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Products & Alloy Grades
            </button>
            <button
              onClick={() => scrollToSection('company-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Company Profile & Sourcing
            </button>
            <button
              onClick={() => scrollToSection('news-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Market Insights & News
            </button>
            <button
              onClick={() => scrollToSection('headquarters-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Dubai Headquarters & Map
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left py-1 text-gray-800 hover:text-[#D32F2F]"
            >
              Request a quotation
            </button>
          </div>

          <button
            onClick={() => scrollToSection('contact-section')}
            className="w-full py-3 bg-[#D32F2F] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Submit RFQ Inquiry</span>
          </button>
        </div>
      )}
    </header>
  );
};
