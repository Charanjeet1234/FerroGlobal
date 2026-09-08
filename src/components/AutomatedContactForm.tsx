import React, { useState, useEffect } from 'react';
import { useCms } from '../context/CmsContext';
import { ContactInquiry } from '../types';
import {
  FileSpreadsheet,
  CheckCircle,
  Copy,
  MessageSquare,
  Phone,
  Mail,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export const AutomatedContactForm: React.FC = () => {
  const { products, addInquiry, rfqPreselectedProduct, companyInfo } = useCms();

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productId: products[0]?.id || 'ferro-manganese',
    grade: products[0]?.grades[0] || 'High Carbon (HC) FeMn 75%',
    quantityMT: 100,
    incoterm: 'CIF' as 'CIF' | 'FOB' | 'CFR' | 'EXW',
    destinationPort: 'Jebel Ali Port (UAE)',
    targetDate: 'Within 30 Days',
    message: '',
  });

  const [submittedInquiry, setSubmittedInquiry] = useState<ContactInquiry | null>(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update grade selections when product changes
  const currentSelectedProduct = products.find((p) => p.id === formData.productId) || products[0];

  // If a preselection was triggered from the catalog or specs modal
  useEffect(() => {
    if (rfqPreselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productId: rfqPreselectedProduct.product.id,
        grade: rfqPreselectedProduct.grade || rfqPreselectedProduct.product.grades[0],
      }));
    }
  }, [rfqPreselectedProduct]);

  const handleProductChange = (newProductId: string) => {
    const prod = products.find((p) => p.id === newProductId);
    setFormData((prev) => ({
      ...prev,
      productId: newProductId,
      grade: prod?.grades[0] || '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const inquiry = addInquiry({
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        productId: formData.productId,
        productName: currentSelectedProduct?.name || 'Ferro Alloy',
        grade: formData.grade,
        quantityMT: Number(formData.quantityMT),
        incoterm: formData.incoterm,
        destinationPort: formData.destinationPort,
        targetDate: formData.targetDate,
        message: formData.message,
      });

      setSubmittedInquiry(inquiry);
      setIsSubmitting(false);
    }, 500);
  };

  const copyRfqSummary = () => {
    if (!submittedInquiry) return;
    const summary = `FERRO GLOBAL TRADING LLC - OFFICIAL RFQ CONFIRMATION
Reference ID: ${submittedInquiry.id}
Company: ${submittedInquiry.companyName}
Contact Person: ${submittedInquiry.contactPerson}
Product: ${submittedInquiry.productName} (${submittedInquiry.grade})
Quantity: ${submittedInquiry.quantityMT} MT
Incoterm: ${submittedInquiry.incoterm} - Port: ${submittedInquiry.destinationPort}
Email: ${submittedInquiry.email} | Phone: ${submittedInquiry.phone}
Status: Enquiry received by the Dubai trading desk
Issued: ${new Date(submittedInquiry.timestamp).toLocaleString()}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setSubmittedInquiry(null);
    setFormData((prev) => ({
      ...prev,
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: '',
    }));
  };

  const whatsappMessageUrl = submittedInquiry
    ? `https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Hello Ferro Global Trading desk, I am following up on enquiry ${submittedInquiry.id} for ${submittedInquiry.quantityMT} MT of ${submittedInquiry.productName} (${submittedInquiry.grade}). Please share availability and CIF / FOB pricing.`
      )}`
    : `https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}`;

  return (
    <section id="contact-section" className="py-20 bg-[#F8F9FA] border-t border-b border-gray-200 relative text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D32F2F] uppercase tracking-[0.25em] mb-2">
            <span className="w-2 h-2 bg-[#D32F2F]" />
            <span>Send an enquiry</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">
            REQUEST A COMMERCIAL QUOTATION
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 font-normal">
            Tell us the product, grade, quantity and destination. Our Dubai trading desk will review the requirement and come back with availability, pricing and delivery options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form / Confirmation Screen */}
          <div className="rfq-card lg:col-span-8 bg-white border border-gray-200 border-l-8 border-l-[#D32F2F] p-6 sm:p-10 shadow-xs text-left">
            
            {submittedInquiry ? (
              /* Success / Automated Confirmation Screen */
              <div className="space-y-6">
                <div className="p-4 bg-emerald-50 border border-emerald-200 flex items-start gap-3.5">
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-emerald-950 uppercase tracking-tight">
                      Enquiry received
                    </h3>
                    <p className="text-xs text-emerald-800 mt-1 font-medium">
                      Your enquiry reference is <strong className="font-mono text-emerald-950 font-bold">{submittedInquiry.id}</strong>. Our trading desk will review the details and follow up with the next steps.
                    </p>
                  </div>
                </div>

                {/* RFQ Receipt Card */}
                <div className="p-6 bg-[#F8F9FA] border border-gray-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-mono block">Inquiry Reference</span>
                      <span className="text-base font-mono font-bold text-[#D32F2F]">{submittedInquiry.id}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Status: {submittedInquiry.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Buyer Company:</span>
                      <span className="font-bold text-[#1A1A1A] text-sm">{submittedInquiry.companyName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Contact Representative:</span>
                      <span className="font-bold text-[#1A1A1A]">{submittedInquiry.contactPerson}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Commodity & Grade:</span>
                      <span className="font-bold text-[#D32F2F]">{submittedInquiry.productName} - {submittedInquiry.grade}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Volume & Incoterm:</span>
                      <span className="font-bold text-[#1A1A1A]">{submittedInquiry.quantityMT} MT ({submittedInquiry.incoterm} to {submittedInquiry.destinationPort})</span>
                    </div>
                  </div>

                  {submittedInquiry.message && (
                    <div className="pt-2 border-t border-gray-200 text-xs text-gray-600">
                      <span className="font-bold text-gray-800">Technical Notes: </span>
                      <span>{submittedInquiry.message}</span>
                    </div>
                  )}
                </div>

                {/* Instant Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={copyRfqSummary}
                    className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Summary copied' : 'Copy enquiry summary'}</span>
                  </button>

                  <a
                    href={whatsappMessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Continue on WhatsApp</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-black font-bold uppercase tracking-wider px-3 py-3 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>New Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Interactive Automated Form */
              <form onSubmit={handleSubmit} className="rfq-form space-y-6">
                
                {/* Product & Grade Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Product *
                    </label>
                    <select
                      value={formData.productId}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.chemicalFormula})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Grade *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    >
                      {currentSelectedProduct?.grades.map((g, idx) => (
                        <option key={idx} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Quantity & Incoterms */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Quantity (MT) *
                    </label>
                    <input
                      type="number"
                      min="10"
                      step="5"
                      required
                      value={formData.quantityMT}
                      onChange={(e) => setFormData({ ...formData, quantityMT: Number(e.target.value) })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Incoterm *
                    </label>
                    <select
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value as any })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    >
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="FOB">FOB Jebel Ali / Load Port</option>
                      <option value="EXW">EXW Warehouse Dubai</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Destination port *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rotterdam, Mersin, Jebel Ali"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Company & Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-200">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Company / steelworks *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gulf Steels Ltd / Atlas Foundry"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Contact person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor (Procurement Mgr)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Business email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Technical Notes */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Notes on chemistry, sizing or delivery (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify max phosphorus limits, packing requirements (1MT Jumbo bags vs bulk), or target delivery window..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-gray-300 p-3 text-xs sm:text-sm text-[#1A1A1A] focus:outline-none focus:border-[#D32F2F] focus:bg-white transition-colors"
                  />
                </div>

                {/* Submit CTA - Geometric Balance */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D32F2F] hover:bg-[#b71c1c] active:bg-[#9a1414] disabled:opacity-50 text-white font-bold tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  {isSubmitting ? (
                      <span>Sending enquiry...</span>
                  ) : (
                    <>
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Send enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Direct Desk Channels & Trader Guarantees */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Quick Contact Card */}
            <div className="desk-contact-card p-6 bg-white border border-gray-200 shadow-xs space-y-5">
              <h3 className="font-heading text-lg font-bold text-[#1A1A1A] uppercase tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D32F2F]" />
                <span>Dubai Trading Desk</span>
              </h3>

              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${companyInfo.contact.phonePrimary.replace(/\s/g, '')}`}
                  className="desk-channel p-3 bg-[#F8F9FA] border border-gray-200 flex items-center gap-3 hover:border-[#D32F2F] transition-colors"
                >
                  <div className="p-2 bg-red-50 text-[#D32F2F]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-mono font-bold">Direct Trading Line</span>
                    <span className="font-bold text-[#1A1A1A] text-sm">{companyInfo.contact.phonePrimary}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.contact.emailSales}`}
                  className="desk-channel p-3 bg-[#F8F9FA] border border-gray-200 flex items-center gap-3 hover:border-[#D32F2F] transition-colors"
                >
                  <div className="p-2 bg-red-50 text-[#D32F2F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-mono font-bold">Sales enquiries</span>
                    <span className="font-bold text-[#1A1A1A] text-sm">{companyInfo.contact.emailSales}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="desk-channel p-3 bg-emerald-50 border border-emerald-200 flex items-center gap-3 hover:bg-emerald-100/60 transition-colors"
                >
                  <div className="p-2 bg-emerald-600 text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 uppercase block font-mono font-bold">WhatsApp Desk</span>
                    <span className="font-bold text-emerald-950 text-sm">Instant Price Updates</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Trading Commitments */}
            <div className="desk-commitments p-6 bg-white border border-gray-200 text-xs space-y-3 shadow-xs">
              <h4 className="font-bold text-[#1A1A1A] font-heading uppercase tracking-wide">
                What to include
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] mt-1.5 shrink-0" />
                  <span><strong>Product:</strong> Grade, chemistry, size and preferred form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] mt-1.5 shrink-0" />
                  <span><strong>Quantity:</strong> Required tonnage, destination and target delivery date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] mt-1.5 shrink-0" />
                  <span><strong>Commercial terms:</strong> Preferred Incoterm and inspection or documentation needs.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
