import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  BRAND_PHONE, 
  BRAND_PHONE_INTL, 
  BRAND_EMAIL, 
  getWhatsAppUrl, 
  getTelUrl, 
  getMailtoUrl 
} from '../utils/whatsapp';
import { EnquiryFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ContactSectionProps {
  prefilledProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProduct }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    productInterest: prefilledProduct || 'Narmadeshwar Shivling Collection',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          productInterest: 'Narmadeshwar Shivling Collection',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please call or message us on WhatsApp directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error while sending enquiry. Please contact us directly at 6263540349 via WhatsApp.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0C0A09] relative border-t border-[#261F18]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
              Direct Devotional Assistance
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let’s Find the Right Shivling for You
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto leading-relaxed">
            Have a question or looking for a particular Shivling? Talk directly with Trilok Shivling Art.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Conversion Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 bg-[#161310] border border-[#2E261D] shadow-xl space-y-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-white pb-3 border-b border-[#261F18]">
                Direct Contacts
              </h3>

              {/* Phone Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A89E90] font-semibold block">
                    Phone Calling
                  </span>
                  <a
                    href={getTelUrl()}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {BRAND_PHONE}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">Available for direct voice consultations</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#132218] border border-[#25D366]/40 text-[#25D366] flex-shrink-0 rounded-sm">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A89E90] font-semibold block">
                    WhatsApp Message
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    {BRAND_PHONE_INTL}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">Fastest response for photos, sizes & prices</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-[#A89E90] font-semibold block">
                    Official Email
                  </span>
                  <a
                    href={getMailtoUrl()}
                    className="text-sm sm:text-base font-medium text-white hover:text-[#D4AF37] transition-colors break-all"
                  >
                    {BRAND_EMAIL}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">For detailed enquiries & institutional orders</p>
                </div>
              </div>

              {/* Pan-India Dispatch */}
              <div className="flex items-start space-x-4 pt-4 border-t border-[#261F18]">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A89E90] font-semibold block">
                    Dispatch & Service
                  </span>
                  <span className="text-sm font-bold text-white">
                    Madhya Pradesh, India
                  </span>
                  <p className="text-xs text-[#A89E90] mt-0.5">Secure, carefully cushioned delivery across all Indian pin codes</p>
                </div>
              </div>

            </div>

            {/* Quick Action Button Box */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/20 rounded-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelUrl()}
                className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-white bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024] transition-all flex items-center justify-center space-x-2 rounded-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#161310] border border-[#2E261D] shadow-2xl relative rounded-sm">
              
              <div className="mb-6 pb-4 border-b border-[#261F18]">
                <h3 className="font-serif text-xl font-bold text-white">
                  Send an Enquiry to Our Team
                </h3>
                <p className="text-xs text-[#B8B0A2] mt-1">
                  Fill out the form below. We will personally respond with complete specifications, high-res photos, and pricing.
                </p>
              </div>

              {/* Success Notification Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-[#112417] border border-[#2ea043]/50 text-xs sm:text-sm text-[#85e89d] flex items-start space-x-3 animate-in fade-in duration-300 rounded-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea043] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#a5f3bc]">{successMessage}</p>
                    <p className="text-xs text-[#7ee787]">
                      A confirmation has been logged. You can also chat with us on WhatsApp for faster assistance.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification Banner */}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-[#2b1414] border border-[#f85149]/50 text-xs sm:text-sm text-[#ff7b72] flex items-start space-x-3 animate-in fade-in duration-300 rounded-sm">
                  <AlertCircle className="w-5 h-5 text-[#f85149] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Honeypot Spam Protection (Hidden from humans) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-name" className="text-xs font-semibold text-[#C7BFB4] block">
                      Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-phone" className="text-xs font-semibold text-[#C7BFB4] block">
                      Mobile / WhatsApp Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-email" className="text-xs font-semibold text-[#C7BFB4] block">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-city" className="text-xs font-semibold text-[#C7BFB4] block">
                      City / State
                    </label>
                    <input
                      id="enquiry-city"
                      type="text"
                      name="city"
                      placeholder="e.g. Indore, MP or Mumbai"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Product Interested In */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-product" className="text-xs font-semibold text-[#C7BFB4] block">
                    Product Interested In
                  </label>
                  <input
                    id="enquiry-product"
                    type="text"
                    name="productInterest"
                    placeholder="e.g. Sacred Tilak Narmadeshwar Shivling"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-message" className="text-xs font-semibold text-[#C7BFB4] block">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your home mandir, temple requirements, or ask for specific natural marking photos..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none rounded-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  id="enquiry-submit-btn"
                  className="w-full py-4 px-6 font-bold text-xs uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#faeac2] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 rounded-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Alternative Directly Below Form */}
              <div className="mt-6 pt-5 border-t border-[#261F18] text-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>Prefer WhatsApp? Chat with us instantly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
