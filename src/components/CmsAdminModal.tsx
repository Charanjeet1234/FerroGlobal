import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Product, BlogPost } from '../types';
import {
  Database,
  X,
  Plus,
  Save,
  Trash2,
  Download,
  Upload,
  RefreshCcw,
  Building,
  Layers,
  Newspaper,
  Inbox,
  CheckCircle,
  FileText,
  Mail,
  MessageCircle,
  LockKeyhole,
} from 'lucide-react';

export const CmsAdminModal: React.FC = () => {
  const {
    isCmsAdminOpen,
    setIsCmsAdminOpen,
    companyInfo,
    updateCompanyInfo,
    products,
    updateProduct,
    addProduct,
    deleteProduct,
    blogPosts,
    updateBlogPost,
    addBlogPost,
    deleteBlogPost,
    inquiries,
    deleteInquiry,
    exportCmsData,
    importCmsData,
    resetToDefaults,
    customLogoUrl,
    setCustomLogoUrl,
  } = useCms();

  const [activeTab, setActiveTab] = useState<'profile' | 'products' | 'news' | 'inquiries' | 'io'>('profile');
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || '');
  const [selectedPostId, setSelectedPostId] = useState<string>(blogPosts[0]?.id || '');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const cmsPassword = import.meta.env.VITE_CMS_PASSWORD;

  if (!isCmsAdminOpen) return null;

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (cmsPassword && password === cmsPassword) {
      setIsAuthenticated(true);
      setPassword('');
      setLoginError(false);
      return;
    }
    setLoginError(true);
  };

  const closeStudio = () => {
    setIsAuthenticated(false);
    setPassword('');
    setLoginError(false);
    setIsCmsAdminOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
        <div className="w-full max-w-md bg-white border border-gray-300 shadow-2xl text-left">
          <div className="p-5 bg-[#1A1A1A] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#D32F2F]"><Database className="w-5 h-5" /></div>
              <div>
                <h2 className="font-heading text-lg font-bold uppercase tracking-tight">CMS Studio</h2>
                <p className="text-xs text-gray-400">Private administration area</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeStudio}
              className="p-1.5 text-gray-400 hover:text-white"
              aria-label="Close CMS login"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleLogin} className="p-6 space-y-4">
            <div>
              <label htmlFor="cms-password" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Studio password
              </label>
              <input
                id="cms-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setLoginError(false);
                }}
                autoFocus
                required
                className="w-full bg-[#F8F9FA] border border-gray-300 px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F]"
                placeholder="Enter password"
              />
            </div>
            {loginError && (
              <p className="text-xs font-semibold text-[#D32F2F]" role="alert">
                Incorrect password. Access was not granted.
              </p>
            )}
            {!cmsPassword && (
              <p className="text-xs font-semibold text-[#D32F2F]" role="alert">
                CMS password is not configured. Add VITE_CMS_PASSWORD to .env.local.
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-[#D32F2F] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider"
            >
              Unlock CMS Studio
            </button>
          </form>
        </div>
      </div>
    );
  }

  const showNotification = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const currentEditingProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const currentEditingPost = blogPosts.find((p) => p.id === selectedPostId) || blogPosts[0];

  const handleAddNewProduct = () => {
    const newId = `custom-alloy-${Date.now()}`;
    const newProd: Product = {
      id: newId,
      name: 'New Ferro Alloy Grade',
      chemicalFormula: 'FeX',
      category: 'ferro-alloys',
      tagline: 'High-purity tailored metallurgical addition',
      description: 'Engineered for steel deoxidation and ladle refining additions.',
      grades: ['Prime Grade 75%', 'Refined Low Carbon'],
      composition: [
        { element: 'Fe', name: 'Iron', percentage: 'Balance' },
        { element: 'X', name: 'Active Element', percentage: '70% Min' },
      ],
      specs: {
        sizing: '10 - 50 mm (90% min)',
        packing: '1 MT Big Bags with liner',
        origin: 'International Smelters',
        inspection: 'SGS certified assay',
        applications: ['Ladle furnace alloying', 'Deoxidation'],
      },
      imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    };
    addProduct(newProd);
    setSelectedProductId(newId);
    showNotification('New product added to Headless CMS!');
  };

  const handleAddNewPost = () => {
    const newId = `market-update-${Date.now()}`;
    const newPost: BlogPost = {
      id: newId,
      slug: newId,
      title: 'New Metallurgical Market Analysis',
      summary: 'Executive summary of recent ferro alloy pricing and raw material movements.',
      content: 'Detailed market intelligence report covering global smelter output and regional steel demand...',
      category: 'Market Trends',
      author: 'Commercial Trading Desk',
      publishedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '4 min read',
      imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      tags: ['Ferro Alloys', 'Market Report'],
    };
    addBlogPost(newPost);
    setSelectedPostId(newId);
    showNotification('New article created in Headless CMS!');
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const success = importCmsData(reader.result);
          if (success) {
            showNotification('Headless CMS Content imported successfully!');
          } else {
            showNotification('Error importing JSON schema. Please verify format.');
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl bg-white border border-gray-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left">
        
        {/* Modal Top Bar - Geometric Balance dark header */}
        <div className="p-4 bg-[#1A1A1A] border-b border-gray-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#D32F2F] text-white">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold font-heading text-white uppercase tracking-tight">
                  Headless CMS Management Studio
                </h3>
                <span className="px-2 py-0.5 bg-black/50 text-[#D32F2F] border border-gray-800 text-[10px] font-mono font-bold">
                  Private CMS
                </span>
              </div>
              <p className="text-xs text-gray-400 font-normal">
                Manage catalogs, company credentials, specifications, and RFQ inquiries live.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeStudio}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-700 text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:border-gray-500"
            >
              <LockKeyhole className="w-3.5 h-3.5" />
              <span>Lock Studio</span>
            </button>
            <button
              type="button"
              onClick={closeStudio}
              className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CMS Studio"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 bg-[#F8F9FA] border-b border-gray-200 flex items-center gap-2 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3.5 border-b-2 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#D32F2F] text-[#D32F2F]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Company Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 px-3.5 border-b-2 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'products'
                ? 'border-[#D32F2F] text-[#D32F2F]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Product Catalog ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`py-3 px-3.5 border-b-2 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'news'
                ? 'border-[#D32F2F] text-[#D32F2F]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Articles & Insights ({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`py-3 px-3.5 border-b-2 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'inquiries'
                ? 'border-[#D32F2F] text-[#D32F2F]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Enquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('io')}
            className={`py-3 px-3.5 border-b-2 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'io'
                ? 'border-[#D32F2F] text-[#D32F2F]'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>JSON Sync & Logo</span>
          </button>
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <div className="bg-emerald-50 border-b border-emerald-200 text-emerald-900 text-xs px-4 py-2 flex items-center gap-2 font-bold">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 text-[#1A1A1A]">
          
          {/* TAB 1: COMPANY PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-5 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Company Legal Name</label>
                  <input
                    type="text"
                    value={companyInfo.name}
                    onChange={(e) => updateCompanyInfo({ ...companyInfo, name: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs text-gray-700 uppercase font-bold tracking-wider mb-1">Corporate Tagline</label>
                <input
                  type="text"
                  value={companyInfo.tagline}
                  onChange={(e) => updateCompanyInfo({ ...companyInfo, tagline: e.target.value })}
                  className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-xs text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Headquarters Phone</label>
                  <input
                    type="text"
                    value={companyInfo.contact.phonePrimary}
                    onChange={(e) =>
                      updateCompanyInfo({
                        ...companyInfo,
                        contact: { ...companyInfo.contact, phonePrimary: e.target.value },
                      })
                    }
                    className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-[#1A1A1A] font-mono focus:border-[#D32F2F] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">WhatsApp / Direct</label>
                  <input
                    type="text"
                    value={companyInfo.contact.phoneSecondary}
                    onChange={(e) =>
                      updateCompanyInfo({
                        ...companyInfo,
                        contact: { ...companyInfo.contact, phoneSecondary: e.target.value },
                      })
                    }
                    className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-[#1A1A1A] font-mono focus:border-[#D32F2F] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Sales Desk Email</label>
                  <input
                    type="email"
                    value={companyInfo.contact.emailSales}
                    onChange={(e) =>
                      updateCompanyInfo({
                        ...companyInfo,
                        contact: { ...companyInfo.contact, emailSales: e.target.value },
                      })
                    }
                    className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-[#1A1A1A] font-mono focus:border-[#D32F2F] focus:bg-white"
                  />
                </div>
              </div>

              <div className="text-xs space-y-2">
                <label className="block text-gray-700 uppercase font-bold tracking-wider">Office Address (Dubai HQ)</label>
                <input
                  type="text"
                  value={companyInfo.headquarters.address}
                  onChange={(e) =>
                    updateCompanyInfo({
                      ...companyInfo,
                      headquarters: { ...companyInfo.headquarters, address: e.target.value },
                    })
                  }
                  className="w-full bg-[#F8F9FA] border border-gray-300 p-2.5 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => showNotification('Company Profile saved!')}
                  className="px-6 py-2.5 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Update Profile</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS CRUD */}
          {activeTab === 'products' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4 space-y-2 border-r border-gray-200 pr-4 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Commodities</span>
                  <button
                    onClick={handleAddNewProduct}
                    className="text-[10px] bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-2 py-1 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Add Product
                  </button>
                </div>
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProductId(p.id)}
                    className={`w-full text-left p-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      p.id === selectedProductId
                        ? 'bg-red-50 border-l-4 border-l-[#D32F2F] text-black font-bold'
                        : 'bg-[#F8F9FA] hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="truncate">{p.name}</span>
                    <span className="font-mono text-[10px] text-[#D32F2F] font-bold">{p.chemicalFormula}</span>
                  </button>
                ))}
              </div>

              {currentEditingProduct && (
                <div className="md:col-span-8 space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Product Name</label>
                      <input
                        type="text"
                        value={currentEditingProduct.name}
                        onChange={(e) =>
                          updateProduct({ ...currentEditingProduct, name: e.target.value })
                        }
                        className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Chemical Formula</label>
                      <input
                        type="text"
                        value={currentEditingProduct.chemicalFormula}
                        onChange={(e) =>
                          updateProduct({ ...currentEditingProduct, chemicalFormula: e.target.value })
                        }
                        className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] font-mono focus:border-[#D32F2F] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Tagline</label>
                    <input
                      type="text"
                      value={currentEditingProduct.tagline}
                      onChange={(e) =>
                        updateProduct({ ...currentEditingProduct, tagline: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Technical Description</label>
                    <textarea
                      rows={3}
                      value={currentEditingProduct.description}
                      onChange={(e) =>
                        updateProduct({ ...currentEditingProduct, description: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Sizing Specs</label>
                    <input
                      type="text"
                      value={currentEditingProduct.specs.sizing}
                      onChange={(e) =>
                        updateProduct({
                          ...currentEditingProduct,
                          specs: { ...currentEditingProduct.specs, sizing: e.target.value },
                        })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <button
                      onClick={() => showNotification(`Updated ${currentEditingProduct.name}`)}
                      className="px-4 py-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Changes
                    </button>
                    <button
                      onClick={() => {
                        deleteProduct(currentEditingProduct.id);
                        showNotification('Product deleted from CMS');
                      }}
                      className="px-3 py-1.5 text-gray-500 hover:text-[#D32F2F] text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete Product
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: NEWS & ARTICLES CRUD */}
          {activeTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4 space-y-2 border-r border-gray-200 pr-4 max-h-96 overflow-y-auto">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Reports</span>
                  <button
                    onClick={handleAddNewPost}
                    className="text-[10px] bg-[#D32F2F] hover:bg-[#b71c1c] text-white px-2 py-1 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> New Post
                  </button>
                </div>
                {blogPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPostId(post.id)}
                    className={`w-full text-left p-2.5 text-xs flex flex-col transition-colors cursor-pointer ${
                      post.id === selectedPostId
                        ? 'bg-red-50 border-l-4 border-l-[#D32F2F] text-black font-bold'
                        : 'bg-[#F8F9FA] hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="truncate">{post.title}</span>
                    <span className="text-[10px] text-gray-500 mt-0.5">{post.publishedDate}</span>
                  </button>
                ))}
              </div>

              {currentEditingPost && (
                <div className="md:col-span-8 space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Article Title</label>
                    <input
                      type="text"
                      value={currentEditingPost.title}
                      onChange={(e) =>
                        updateBlogPost({ ...currentEditingPost, title: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Category</label>
                      <select
                        value={currentEditingPost.category}
                        onChange={(e) =>
                          updateBlogPost({ ...currentEditingPost, category: e.target.value as any })
                        }
                        className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                      >
                        <option value="Market Trends">Market Trends</option>
                        <option value="Ferro Alloys">Ferro Alloys</option>
                        <option value="Steel Industry">Steel Industry</option>
                        <option value="Company Updates">Company Updates</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Author</label>
                      <input
                        type="text"
                        value={currentEditingPost.author}
                        onChange={(e) =>
                          updateBlogPost({ ...currentEditingPost, author: e.target.value })
                        }
                        className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Executive Summary</label>
                    <textarea
                      rows={2}
                      value={currentEditingPost.summary}
                      onChange={(e) =>
                        updateBlogPost({ ...currentEditingPost, summary: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 uppercase font-bold tracking-wider mb-1">Full Content</label>
                    <textarea
                      rows={5}
                      value={currentEditingPost.content}
                      onChange={(e) =>
                        updateBlogPost({ ...currentEditingPost, content: e.target.value })
                      }
                      className="w-full bg-[#F8F9FA] border border-gray-300 p-2 text-[#1A1A1A] focus:border-[#D32F2F] focus:bg-white"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <button
                      onClick={() => showNotification(`Updated ${currentEditingPost.title}`)}
                      className="px-4 py-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold uppercase tracking-wider text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" /> Save Post
                    </button>
                    <button
                      onClick={() => {
                        deleteBlogPost(currentEditingPost.id);
                        showNotification('Post deleted from CMS');
                      }}
                      className="px-3 py-1.5 text-gray-500 hover:text-[#D32F2F] text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete Post
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: INQUIRIES LOG */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Enquiry submissions ({inquiries.length})
                </span>
                <span className="text-[11px] text-gray-500 font-mono">Real-time pipeline</span>
              </div>

              {inquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-gray-500 bg-[#F8F9FA] border border-gray-200">
                  No enquiries submitted yet. New website enquiries will appear here.
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 bg-[#F8F9FA] border border-gray-200 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <span className="font-mono font-bold text-[#D32F2F]">{inq.id}</span>
                        <span className="text-gray-500 text-[10px]">
                          {new Date(inq.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px]">Buyer:</span>
                          <span className="font-bold text-gray-900">{inq.companyName} ({inq.contactPerson})</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px]">Requested Alloy:</span>
                          <span className="font-bold text-[#D32F2F]">{inq.productName} - {inq.grade}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block uppercase text-[10px]">Volume & Term:</span>
                          <span className="font-bold text-gray-900">{inq.quantityMT} MT ({inq.incoterm} {inq.destinationPort})</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-gray-600 pt-1 border-t border-gray-200">
                        Email: <span className="font-medium text-gray-900">{inq.email}</span> | Phone: <span className="font-medium text-gray-900">{inq.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] pt-1 border-t border-gray-200">
                        <FileText className="w-3.5 h-3.5 text-[#D32F2F] shrink-0" />
                        <span className="text-gray-500 uppercase tracking-wider font-bold">Specification PDF:</span>
                        {inq.specificationFileName ? (
                          <span className="font-medium text-gray-900">
                            {inq.specificationFileName}
                            {inq.specificationFileSize ? ` (${(inq.specificationFileSize / 1024 / 1024).toFixed(2)} MB)` : ''}
                          </span>
                        ) : (
                          <span className="text-gray-500">Not attached</span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <a
                          href={`mailto:${inq.email}?subject=${encodeURIComponent(`Re: ${inq.productName} enquiry ${inq.id}`)}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A] text-white hover:bg-black text-[11px] font-bold uppercase tracking-wider"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Reply by email</span>
                        </a>
                        <a
                          href={`https://wa.me/${inq.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${inq.contactPerson}, following up on your ${inq.productName} enquiry ${inq.id}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 text-[11px] font-bold uppercase tracking-wider"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Reply on WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(`Delete enquiry ${inq.id}?`)) {
                              deleteInquiry(inq.id);
                              showNotification('Enquiry deleted');
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[#D32F2F] hover:bg-red-50 border border-red-200 text-[11px] font-bold uppercase tracking-wider"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: JSON EXPORT/IMPORT & CUSTOM LOGO */}
          {activeTab === 'io' && (
            <div className="space-y-6 text-xs max-w-2xl">
              <div className="p-5 bg-[#F8F9FA] border border-gray-200 space-y-3">
                <h4 className="font-bold text-[#1A1A1A] uppercase tracking-wide flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#D32F2F]" />
                  <span>Headless CMS JSON Export & Backup</span>
                </h4>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Download the complete headless CMS dataset containing all products, chemical composition assays, company profile parameters, and news articles as a structured JSON file.
                </p>
                <button
                  onClick={exportCmsData}
                  className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CMS Export (.json)</span>
                </button>
              </div>

              <div className="p-5 bg-[#F8F9FA] border border-gray-200 space-y-3">
                <h4 className="font-bold text-[#1A1A1A] uppercase tracking-wide flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#D32F2F]" />
                  <span>Import External CMS JSON Payload</span>
                </h4>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Upload a JSON file to update website content across the entire portal in real time.
                </p>
                <label className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-xs">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Select JSON File</span>
                  <input type="file" accept=".json" onChange={handleFileImport} className="hidden" />
                </label>
              </div>

              <div className="p-5 bg-[#F8F9FA] border border-gray-200 space-y-3">
                <h4 className="font-bold text-[#1A1A1A] uppercase tracking-wide flex items-center gap-2">
                  <RefreshCcw className="w-4 h-4 text-[#D32F2F]" />
                  <span>Reset to Original Factory Catalog</span>
                </h4>
                <p className="text-gray-600 leading-relaxed font-normal">
                  Restore all product specifications and company profile data back to the default dataset.
                </p>
                <button
                  onClick={() => {
                    resetToDefaults();
                    showNotification('Restored to default dataset!');
                  }}
                  className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-[#D32F2F] border border-red-200 font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Reset to Factory Data
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3.5 bg-[#F8F9FA] border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
          <span className="font-mono text-[11px]">Headless CMS Engine v1.0.0</span>
          <button
            onClick={closeStudio}
            className="px-5 py-1.5 bg-[#1A1A1A] hover:bg-black text-white font-bold uppercase tracking-wider text-xs cursor-pointer"
          >
            Exit Studio
          </button>
        </div>

      </div>
    </div>
  );
};
