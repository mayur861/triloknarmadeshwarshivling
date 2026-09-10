import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MapPin, 
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
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  prefilledProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProduct }) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    productInterest: prefilledProduct || 'नर्मदेश्वर शिवलिंग संग्रह',
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
        setSuccessMessage(data.message || 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हम शीघ्र ही आपसे संपर्क करेंगे।');
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          productInterest: 'नर्मदेश्वर शिवलिंग संग्रह',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'पूछताछ भेजने में समस्या आई। कृपया सीधे फोन अथवा WhatsApp करें।');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('पूछताछ भेजने में समस्या आई। कृपया WhatsApp या फोन द्वारा सीधे 9575501337 पर संपर्क करें।');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0C0A09] relative border-t border-[#261F18]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              सीधा कारीगर संपर्क एवं सहायता
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            अपने घर के मंदिर हेतु सही शिवलिंग चुनें
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto leading-relaxed">
            कोई प्रश्न हो या विशेष आकार का शिवलिंग चाहिए? सीधे त्रिलोक शिवलिंग आर्ट, बकावां से संपर्क करें।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 bg-[#161310] border border-[#2E261D] shadow-xl space-y-6 rounded-sm">
              <h3 className="font-serif text-xl font-bold text-white pb-3 border-b border-[#261F18]">
                सीधे संपर्क सूत्र
              </h3>

              {/* Phone Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] font-semibold block">
                    फोन कॉल
                  </span>
                  <a
                    href={getTelUrl()}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {BRAND_PHONE}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">सीधी बातचीत एवं मार्गदर्शन के लिए उपलब्ध</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#132218] border border-[#25D366]/40 text-[#25D366] flex-shrink-0 rounded-sm">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] font-semibold block">
                    WhatsApp चैट
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    {BRAND_PHONE_INTL}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">फोटो, वीडियो एवं मूल्य जानने हेतु सबसे तेज</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] font-semibold block">
                    ईमेल आईडी
                  </span>
                  <a
                    href={getMailtoUrl()}
                    className="text-sm sm:text-base font-medium text-white hover:text-[#D4AF37] transition-colors break-all"
                  >
                    {BRAND_EMAIL}
                  </a>
                  <p className="text-xs text-[#A89E90] mt-0.5">संस्थागत या बड़े मंदिर ऑर्डर हेतु संपर्क करें</p>
                </div>
              </div>

              {/* Pan-India Dispatch */}
              <div className="flex items-start space-x-4 pt-4 border-t border-[#261F18]">
                <div className="p-3 bg-[#201A14] border border-[#3A3024] text-[#D4AF37] flex-shrink-0 rounded-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] font-semibold block">
                    शिल्प केंद्र एवं प्रेषण
                  </span>
                  <span className="text-sm font-bold text-white">
                    ग्राम बकावां, मध्य प्रदेश, भारत
                  </span>
                  <p className="text-xs text-[#A89E90] mt-0.5">पूरे भारत के प्रत्येक पिनकोड पर सुरक्षित होम डिलीवरी</p>
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
                <span>WhatsApp</span>
              </a>

              <a
                href={getTelUrl()}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-2 rounded-sm ${
                  theme === 'white'
                    ? 'text-[#1C1917] bg-[#F2ECE1] hover:bg-[#EAE2D5] border border-[#DDD5C7]'
                    : 'text-white bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024]'
                }`}
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>कॉल करें</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 bg-[#161310] border border-[#2E261D] shadow-2xl relative rounded-sm">
              
              <div className="mb-6 pb-4 border-b border-[#261F18]">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  ऑनलाइन पूछताछ फॉर्म
                </h3>
                <p className="text-xs text-[#B8B0A2] mt-1">
                  नीचे दिए गए फॉर्म में अपना विवरण भरें। हम आपको पूर्ण विवरण, उच्च गुणवत्ता वाले फोटो और मूल्य के साथ संपर्क करेंगे।
                </p>
              </div>

              {/* Success Notification Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-[#112417] border border-[#2ea043]/50 text-xs sm:text-sm text-[#85e89d] flex items-start space-x-3 animate-in fade-in duration-300 rounded-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea043] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#a5f3bc]">{successMessage}</p>
                    <p className="text-xs text-[#7ee787]">
                      आप तुरंत जानकारी के लिए WhatsApp पर भी चैट कर सकते हैं।
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
                      पूरा नाम <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      name="name"
                      required
                      placeholder="उदा. राहुल शर्मा"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-phone" className="text-xs font-semibold text-[#C7BFB4] block">
                      मोबाइल / WhatsApp नंबर <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="उदा. 9876543210"
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
                      ईमेल आईडी <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      name="email"
                      required
                      placeholder="उदा. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-city" className="text-xs font-semibold text-[#C7BFB4] block">
                      शहर / राज्य
                    </label>
                    <input
                      id="enquiry-city"
                      type="text"
                      name="city"
                      placeholder="उदा. इंदौर, म.प्र. अथवा मुंबई"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Product Interested In */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-product" className="text-xs font-semibold text-[#C7BFB4] block">
                    इच्छुक शिवलिंग / सेट
                  </label>
                  <input
                    id="enquiry-product"
                    type="text"
                    name="productInterest"
                    placeholder="उदा. 4 इंच अखंड नर्मदेश्वर शिवलिंग"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm bg-[#110E0C] border border-[#2E261D] text-[#EBE5DA] placeholder-[#7A7165] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="enquiry-message" className="text-xs font-semibold text-[#C7BFB4] block">
                    अपनी आवश्यकता या प्रश्न लिखें
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={4}
                    placeholder="घर के मंदिर के आकार, विशेष तिलक या अन्य किसी जिज्ञासा के बारे में लिखें..."
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
                  className="w-full py-4 px-6 font-bold text-xs uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#faeac2] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 rounded-sm"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black" />
                      <span>पूछताछ फॉर्म भेजें</span>
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
                  className={`inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    theme === 'white' ? 'text-[#8F6000] hover:text-black' : 'text-[#D4AF37] hover:text-white'
                  }`}
                >
                  <span>तुरंत बातचीत हेतु WhatsApp करें</span>
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
