import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, BlogPost, CompanyInfo, ContactInquiry } from '../types';
import { initialCompanyInfo, initialProducts, initialBlogPosts } from '../data/initialContent';

interface CmsContextType {
  companyInfo: CompanyInfo;
  products: Product[];
  blogPosts: BlogPost[];
  inquiries: ContactInquiry[];
  activeSearchQuery: string;
  isSearchOpen: boolean;
  isCmsAdminOpen: boolean;
  selectedProductForModal: Product | null;
  selectedArticleForModal: BlogPost | null;
  rfqPreselectedProduct: { product: Product; grade?: string } | null;
  customLogoUrl: string | null;
  
  // Actions
  setActiveSearchQuery: (query: string) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsCmsAdminOpen: (open: boolean) => void;
  setSelectedProductForModal: (product: Product | null) => void;
  setSelectedArticleForModal: (article: BlogPost | null) => void;
  setRfqPreselectedProduct: (item: { product: Product; grade?: string } | null) => void;
  setCustomLogoUrl: (url: string | null) => void;
  
  // CMS CRUD & Data management
  updateCompanyInfo: (info: CompanyInfo) => void;
  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  updateBlogPost: (post: BlogPost) => void;
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (postId: string) => void;
  addInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'timestamp' | 'status'>) => ContactInquiry;
  deleteInquiry: (inquiryId: string) => void;
  exportCmsData: () => void;
  importCmsData: (jsonString: string) => boolean;
  resetToDefaults: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'ferro_global_cms_content_v10';
const INQUIRIES_STORAGE_KEY = 'ferro_global_inquiries_v1';
const LOGO_STORAGE_KEY = 'ferro_global_logo_url_v2';

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.companyInfo) {
          const savedCompanyInfo = parsed.companyInfo as CompanyInfo;
          const savedMetrics = savedCompanyInfo.metrics.map((metric) => (
            metric.label === 'Established' && metric.value === '2025'
              ? {
                  ...metric,
                  label: 'Industry experience',
                  value: '10+ years',
                  description: 'Supporting steel, foundry and industrial raw material buyers since 2012',
                }
              : metric
          ));

          return {
            ...savedCompanyInfo,
            establishedYear: savedCompanyInfo.establishedYear === 2025 ? 2012 : savedCompanyInfo.establishedYear,
            headquarters: {
              ...savedCompanyInfo.headquarters,
              address: savedCompanyInfo.headquarters.address === 'Office 2005, Preatoni Tower (Dubai Star), Cluster L'
                ? initialCompanyInfo.headquarters.address
                : savedCompanyInfo.headquarters.address,
            },
            contact: {
              ...savedCompanyInfo.contact,
              emailSales: ['sales@ferroglobal.ae', 'ferro.global25@gmail.com'].includes(savedCompanyInfo.contact.emailSales)
                ? initialCompanyInfo.contact.emailSales
                : savedCompanyInfo.contact.emailSales,
              emailInfo: ['info@ferroglobal.ae', 'ferro.global25@gmail.com'].includes(savedCompanyInfo.contact.emailInfo)
                ? initialCompanyInfo.contact.emailInfo
                : savedCompanyInfo.contact.emailInfo,
            },
            metrics: savedMetrics,
          };
        }
      }
    } catch {
      // fallback to initial
    }
    return initialCompanyInfo;
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.products) && parsed.products.length > 0) return parsed.products;
      }
    } catch {
      // fallback
    }
    return initialProducts;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.blogPosts) && parsed.blogPosts.length > 0) return parsed.blogPosts;
      }
    } catch {
      // fallback
    }
    return initialBlogPosts;
  });

  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(INQUIRIES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [customLogoUrl, setCustomLogoUrlState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(LOGO_STORAGE_KEY);
    } catch {
      return null;
    }
  });

  const setCustomLogoUrl = (url: string | null) => {
    setCustomLogoUrlState(url);
    if (url) {
      localStorage.setItem(LOGO_STORAGE_KEY, url);
    } else {
      localStorage.removeItem(LOGO_STORAGE_KEY);
    }
  };

  // UI state
  const [activeSearchQuery, setActiveSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCmsAdminOpen, setIsCmsAdminOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [selectedArticleForModal, setSelectedArticleForModal] = useState<BlogPost | null>(null);
  const [rfqPreselectedProduct, setRfqPreselectedProduct] = useState<{ product: Product; grade?: string } | null>(null);

  // Sync to local storage for persistent headless CMS behavior
  useEffect(() => {
    try {
      const payload = {
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
        companyInfo,
        products,
        blogPosts,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.warn('Failed to persist CMS data to localStorage', err);
    }
  }, [companyInfo, products, blogPosts]);

  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(inquiries));
    } catch (err) {
      console.warn('Failed to persist inquiries', err);
    }
  }, [inquiries]);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const updateCompanyInfo = (info: CompanyInfo) => {
    setCompanyInfo(info);
  };

  const updateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addProduct = (newProd: Product) => {
    setProducts((prev) => [newProd, ...prev]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateBlogPost = (updated: BlogPost) => {
    setBlogPosts((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
  };

  const addBlogPost = (newPost: BlogPost) => {
    setBlogPosts((prev) => [newPost, ...prev]);
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prev) => prev.filter((b) => b.id !== id));
  };

  const addInquiry = (data: Omit<ContactInquiry, 'id' | 'timestamp' | 'status'>): ContactInquiry => {
    const referenceNum = Math.floor(1000 + Math.random() * 9000);
    const newInquiry: ContactInquiry = {
      ...data,
      id: `FGT-RFQ-2026-${referenceNum}`,
      timestamp: new Date().toISOString(),
      status: 'Received',
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    return newInquiry;
  };

  const deleteInquiry = (inquiryId: string) => {
    setInquiries((prev) => prev.filter((inquiry) => inquiry.id !== inquiryId));
  };

  const exportCmsData = () => {
    const exportObject = {
      project: 'ferro global trading fz-llc',
      exportTimestamp: new Date().toISOString(),
      companyInfo,
      products,
      blogPosts,
    };
    const blob = new Blob([JSON.stringify(exportObject, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ferro-global-cms-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importCmsData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.companyInfo) setCompanyInfo(parsed.companyInfo);
      if (Array.isArray(parsed.products)) setProducts(parsed.products);
      if (Array.isArray(parsed.blogPosts)) setBlogPosts(parsed.blogPosts);
      return true;
    } catch (e) {
      console.error('Invalid CMS JSON import:', e);
      return false;
    }
  };

  const resetToDefaults = () => {
    setCompanyInfo(initialCompanyInfo);
    setProducts(initialProducts);
    setBlogPosts(initialBlogPosts);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo,
        products,
        blogPosts,
        inquiries,
        activeSearchQuery,
        isSearchOpen,
        isCmsAdminOpen,
        selectedProductForModal,
        selectedArticleForModal,
        rfqPreselectedProduct,
        customLogoUrl,
        setActiveSearchQuery,
        setIsSearchOpen,
        setIsCmsAdminOpen,
        setSelectedProductForModal,
        setSelectedArticleForModal,
        setRfqPreselectedProduct,
        setCustomLogoUrl,
        updateCompanyInfo,
        updateProduct,
        addProduct,
        deleteProduct,
        updateBlogPost,
        addBlogPost,
        deleteBlogPost,
        addInquiry,
        deleteInquiry,
        exportCmsData,
        importCmsData,
        resetToDefaults,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = (): CmsContextType => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
