import React from 'react';
import { CmsProvider } from './context/CmsContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { CompanyProfile } from './components/CompanyProfile';
import { InteractiveMap } from './components/InteractiveMap';
import { AutomatedContactForm } from './components/AutomatedContactForm';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { SearchBarModal } from './components/SearchBarModal';
import { CmsAdminModal } from './components/CmsAdminModal';

export default function App() {
  return (
    <CmsProvider>
      <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans flex flex-col selection:bg-red-600 selection:text-white">
        {/* Navigation Bar */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Product Catalog & Detailed Specifications */}
          <ProductCatalog />

          {/* Company Profile, Values & Sourcing Network */}
          <CompanyProfile />

          {/* Dynamic News Feed & Industry Insights */}
          <NewsSection />

          {/* Dubai Headquarters & Interactive Map */}
          <InteractiveMap />

          {/* Automated Request for Quote (RFQ) Form */}
          <AutomatedContactForm />
        </main>

        {/* SEO & Corporate Footer */}
        <Footer />

        {/* Global Modals */}
        <ProductDetailModal />
        <ArticleModal />
        <SearchBarModal />
        <CmsAdminModal />
      </div>
    </CmsProvider>
  );
}
