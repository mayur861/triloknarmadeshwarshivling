import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { getWhatsAppUrl, BRAND_PHONE } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DirectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const DirectEnquiryModal: React.FC<DirectEnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    productInterest: defaultProduct || 'General Shivling Enquiry',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, productInterest: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setSuccessMessage(data.message || 'Thank you! Your enquiry has been received. We will contact you shortly.');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Unable to submit enquiry. Please message us on WhatsApp.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Network error. Please reach out to 6263540349 directly on WhatsApp.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 bg-[#070605]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#161310] border border-[#2E261D] shadow-2xl p-5 sm:p-8 my-auto max-h-[92vh] overflow-y-auto text-left rounded-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#261F18] mb-5 sm:mb-6">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              Enquire With Us
            </h3>
            <p className="text-xs text-[#A89E90] mt-0.5">
              Trilok Shivling Art • Direct Consultation
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A8175] hover:text-white hover:bg-[#201A14] transition-colors rounded-sm cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State */}
        {status === 'success' ? (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#EBE5DA]">
              Enquiry Submitted
            </h4>
            <p className="text-xs text-[#C7BFB4] leading-relaxed">
              {successMessage}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#201A14] border border-[#3A3024] text-white text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-[#2E261D]"
              >
                Close Window
              </button>
              <a
                href={getWhatsAppUrl(`Hello Trilok Shivling Art, I just submitted an enquiry for ${formData.productInterest}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <div className="p-3 bg-[#2a1414] border border-[#f85149]/50 text-xs text-[#ff7b72] flex items-center space-x-2 rounded-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Hidden honeypot */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label className="text-xs font-semibold text-[#C7BFB4] block mb-1">
                Your Full Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0C0A09] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] rounded-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#C7BFB4] block mb-1">
                  Mobile Number <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0C0A09] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] rounded-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#C7BFB4] block mb-1">
                  Email Address <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0C0A09] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] rounded-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#C7BFB4] block mb-1">
                Product or Requirement
              </label>
              <input
                type="text"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0C0A09] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] rounded-sm"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-[#C7BFB4] block mb-1">
                Your Message / Inquiry Details
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Let us know about your mandir requirements, natural tilak preferences, or delivery location..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#0C0A09] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] resize-none rounded-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 font-bold text-xs uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#faeac2] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 shadow-md shadow-[#D4AF37]/20 rounded-sm"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
