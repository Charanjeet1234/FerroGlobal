import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  X,
  Calendar,
  Clock,
  User,
  Tag,
  FileSpreadsheet,
  Share2,
  Building,
} from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { selectedArticleForModal, setSelectedArticleForModal } = useCms();

  if (!selectedArticleForModal) return null;

  const article = selectedArticleForModal;

  const scrollToContact = () => {
    setSelectedArticleForModal(null);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-gray-300 shadow-2xl overflow-hidden my-8 text-left max-h-[90vh] flex flex-col">
        
        {/* Header Bar - Geometric Balance dark header */}
        <div className="p-5 bg-[#1A1A1A] border-b border-gray-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#D32F2F] text-white font-bold text-[10px] uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 font-mono">
              ferroglobal.ae/insights
            </span>
          </div>

          <button
            onClick={() => setSelectedArticleForModal(null)}
            className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Scroll Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#1A1A1A]">
          
          {/* Article Banner Image */}
          <div className="relative h-60 sm:h-72 overflow-hidden border border-gray-200">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-b border-gray-200 pb-4 font-medium">
            <span className="flex items-center gap-1.5 text-gray-800 font-bold">
              <User className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{article.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-[#1A1A1A] leading-tight uppercase tracking-tight">
            {article.title}
          </h2>

          {/* Summary Lead */}
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed bg-[#F8F9FA] p-5 border border-gray-200 border-l-4 border-l-[#D32F2F]">
            {article.summary}
          </p>

          {/* Article Full Text */}
          <div className="text-sm leading-relaxed text-gray-700 space-y-4 whitespace-pre-line font-normal">
            {article.content}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-[#D32F2F]" />
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Keywords:</span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-gray-100 border border-gray-200 px-2.5 py-1 text-gray-700 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Inquire Box inside article */}
          <div className="p-6 bg-[#F8F9FA] border border-gray-200 border-l-4 border-l-[#D32F2F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-[#1A1A1A] text-base uppercase tracking-tight">
                Procuring Materials Discussed in This Report?
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Direct smelter allocations and spot cargo pricing are available for industrial buyers.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="shrink-0 inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 shadow-xs transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Inquire With Desk</span>
            </button>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#F8F9FA] border-t border-gray-200 flex items-center justify-end">
          <button
            onClick={() => setSelectedArticleForModal(null)}
            className="px-5 py-2 bg-[#1A1A1A] hover:bg-black text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
};
