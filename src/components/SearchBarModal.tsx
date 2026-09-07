import React, { useState, useEffect, useRef } from 'react';
import { useCms } from '../context/CmsContext';
import { Product, BlogPost } from '../types';
import {
  Search,
  X,
  Layers,
  Newspaper,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  ExternalLink,
} from 'lucide-react';

export const SearchBarModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    products,
    blogPosts,
    setSelectedProductForModal,
    setSelectedArticleForModal,
    setRfqPreselectedProduct,
  } = useCms();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingProducts = normalizedQuery
    ? products.filter((p) => {
        const matchesName = p.name.toLowerCase().includes(normalizedQuery);
        const matchesFormula = p.chemicalFormula.toLowerCase().includes(normalizedQuery);
        const matchesDesc = p.description.toLowerCase().includes(normalizedQuery);
        const matchesGrades = p.grades.some((g) => g.toLowerCase().includes(normalizedQuery));
        const matchesComp = p.composition.some(
          (c) =>
            c.name.toLowerCase().includes(normalizedQuery) ||
            c.element.toLowerCase().includes(normalizedQuery)
        );
        const matchesSpecs = p.specs.applications.some((a) =>
          a.toLowerCase().includes(normalizedQuery)
        );
        return matchesName || matchesFormula || matchesDesc || matchesGrades || matchesComp || matchesSpecs;
      })
    : products.slice(0, 4);

  const matchingArticles = normalizedQuery
    ? blogPosts.filter((b) => {
        const matchesTitle = b.title.toLowerCase().includes(normalizedQuery);
        const matchesSummary = b.summary.toLowerCase().includes(normalizedQuery);
        const matchesTags = b.tags.some((t) => t.toLowerCase().includes(normalizedQuery));
        return matchesTitle || matchesSummary || matchesTags;
      })
    : blogPosts.slice(0, 2);

  const handleSelectProduct = (product: Product) => {
    setIsSearchOpen(false);
    setSelectedProductForModal(product);
  };

  const handleSelectArticle = (article: BlogPost) => {
    setIsSearchOpen(false);
    setSelectedArticleForModal(article);
  };

  const handleQuickQuote = (product: Product) => {
    setIsSearchOpen(false);
    setRfqPreselectedProduct({ product });
    const el = document.getElementById('contact-section');
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border border-gray-300 shadow-2xl overflow-hidden text-left flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar - Geometric Balance dark header */}
        <div className="p-4 bg-[#1A1A1A] border-b border-gray-800 flex items-center gap-3 text-white">
          <Search className="w-5 h-5 text-[#D32F2F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search ferroalloys, chemical formulas (FeMn, SiMn, Cr), grades or specs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-white px-2 py-1 uppercase font-bold"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-4 py-2.5 bg-[#F8F9FA] border-b border-gray-200 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-gray-500 font-bold uppercase tracking-wider text-[10px]">Quick find:</span>
          {['FeMn', 'Silico Manganese', 'FeCr', 'FeSi', 'SS 304', 'Manganese Ore'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white hover:bg-gray-100 text-gray-700 hover:text-black border border-gray-200 text-xs font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1 text-[#1A1A1A]">
          
          {/* Products Section */}
          <div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Alloy Products & Specifications ({matchingProducts.length})</span>
              {query && <span className="text-[#D32F2F]">Filtering by "{query}"</span>}
            </div>

            {matchingProducts.length === 0 ? (
              <div className="p-6 text-center text-xs text-gray-500 bg-[#F8F9FA] border border-gray-200">
                No matching metallurgical products found for "{query}". Try chemical symbols like "Mn", "Cr", or "Si".
              </div>
            ) : (
              <div className="space-y-2">
                {matchingProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 bg-[#F8F9FA] border border-gray-200 hover:border-[#D32F2F] flex items-center justify-between gap-4 group transition-colors shadow-xs"
                  >
                    <div
                      onClick={() => handleSelectProduct(p)}
                      className="cursor-pointer flex items-center gap-3 flex-1 min-w-0"
                    >
                      <span className="px-2 py-1 bg-[#1A1A1A] text-[#D32F2F] font-mono font-bold text-xs border border-gray-800 shrink-0">
                        {p.chemicalFormula}
                      </span>
                      <div className="truncate">
                        <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors truncate">
                          {p.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 truncate">
                          {p.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleSelectProduct(p)}
                        className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-100 text-[#1A1A1A] border border-gray-300"
                      >
                        Specs
                      </button>
                      <button
                        onClick={() => handleQuickQuote(p)}
                        className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#D32F2F] hover:bg-[#b71c1c] text-white"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Market Insights & Articles */}
          {matchingArticles.length > 0 && (
            <div className="pt-2 border-t border-gray-200">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                Market Insights & Industry Reports
              </div>
              <div className="space-y-2">
                {matchingArticles.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => handleSelectArticle(b)}
                    className="p-3 bg-[#F8F9FA] hover:bg-white border border-gray-200 hover:border-[#D32F2F] cursor-pointer flex items-center justify-between gap-3 group transition-colors shadow-xs"
                  >
                    <div className="truncate">
                      <span className="text-[10px] text-[#D32F2F] font-bold uppercase block tracking-wider">
                        {b.category} • {b.publishedDate}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors truncate mt-0.5">
                        {b.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#D32F2F] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#F8F9FA] border-t border-gray-200 text-[10px] uppercase tracking-widest text-gray-500 flex items-center justify-between">
          <span>Press ESC or click outside to close</span>
          <span className="font-mono text-[#D32F2F] font-bold">Ferro Global search</span>
        </div>

      </div>
    </div>
  );
};
