import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { BlogPost } from '../types';
import {
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const NewsSection: React.FC = () => {
  const { blogPosts, setSelectedArticleForModal } = useCms();
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const categories = ['All', 'Market Trends', 'Ferro Alloys', 'Steel Industry', 'Company Updates'];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.category === selectedTag;
  });

  return (
    <section id="news-section" className="py-20 bg-[#F8F9FA] border-t border-b border-gray-200 relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D32F2F] uppercase tracking-[0.25em] mb-2">
              <span className="w-2 h-2 bg-[#D32F2F]" />
              <span>Notes from the trading desk</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
              MARKET NOTES & COMPANY NEWS
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Short updates on ferro alloy markets, steelmaking inputs, logistics and the work behind each shipment.
            </p>
          </div>

          {/* Category Filter Pills - Geometric Balance */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 border border-gray-200 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                aria-pressed={selectedTag === cat}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedTag === cat
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic News Grid - Geometric Balance clean white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              id={`blog-post-${post.id}`}
              onClick={() => setSelectedArticleForModal(post)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedArticleForModal(post);
                }
              }}
              role="button"
              tabIndex={0}
              className={`group bg-white border border-gray-200 hover:border-[#D32F2F] shadow-xs overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-200 text-left ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div>
                {/* Article Image */}
                <div className={`relative aspect-video ${index === 0 ? 'lg:h-64 lg:aspect-auto' : 'sm:h-44 sm:aspect-auto'} w-full overflow-hidden bg-gray-100`}>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = 'https://www.sfaglobex.ae/assets/ferro-manganese-banner-qBoKYnpf.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#D32F2F] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow">
                    {post.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#D32F2F]" />
                      <span>{post.publishedDate}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  By {post.author}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D32F2F] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
