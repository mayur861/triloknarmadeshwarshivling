import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProductWhatsAppUrl, getTelUrl, BRAND_PHONE } from '../utils/whatsapp';
import { X, Phone, Mail, Sparkles, ShieldCheck, Droplets } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenEnquiryModal: (productName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenEnquiryModal,
}) => {
  const { theme } = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product?.id]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-[#070605]/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div
        id="product-detail-modal-card"
        className="relative w-full max-w-4xl bg-[#161310] border border-[#2E261D] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col rounded-sm"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#261F18] bg-[#110E0C]">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm">
              {product.categoryName}
            </span>
            <span className="text-xs text-[#8A8175]">आईडी: {product.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A8175] hover:text-white hover:bg-[#201A14] transition-colors cursor-pointer rounded-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
            {/* Left Column: Image Showcase */}
            <div className="md:col-span-6 space-y-4">
              
              {/* Main Image */}
              <div className="relative h-60 sm:h-80 md:h-96 overflow-hidden bg-[#0C0A09] border border-[#261F18] rounded-sm">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#0C0A09]/90 border border-[#D4AF37]/40 text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] rounded-sm">
                  {product.priceFormatted} • पवित्र स्वयंभू नर्मदा पाषाण
                </div>
              </div>

              {/* Thumbnails Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
                  {product.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer rounded-sm ${
                        activeImageIndex === idx
                          ? 'border-[#D4AF37] shadow-md shadow-[#D4AF37]/30'
                          : 'border-[#2E261D] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} छवि ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Natural Authenticity Notice */}
              <div className="p-4 bg-[#110E0C] border border-[#2E261D] text-xs text-[#A89E90] space-y-1.5 rounded-sm">
                <div className="flex items-center space-x-1.5 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>प्राकृतिक स्वयंभू पाषाण</span>
                </div>
                <p className="leading-relaxed text-[#C7BFB4]">
                  प्रत्येक नर्मदेश्वर शिवलिंग माँ नर्मदा के जल प्रवाह में स्वतः बनता है, अतः प्राकृतिक तिलक, रंग और खनिज रेखाओं की विशिष्टता अद्वितीय होती है।
                </p>
              </div>

            </div>

            {/* Right Column: Specifications & Guidance */}
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {product.name}
                </h2>
                <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mt-1">
                  उद्गम: {product.origin}
                </p>
              </div>

              {/* Price Banner */}
              <div className="p-4 bg-[#110E0C] border border-[#2E261D] flex items-center justify-between rounded-sm">
                <div>
                  <span className="text-[10px] text-[#8A8175] uppercase tracking-wider block font-semibold">
                    सीधी कारीगर दर
                  </span>
                  <div className="flex items-baseline space-x-2.5">
                    <span className="text-2xl font-serif font-bold text-[#D4AF37]">
                      {product.priceFormatted}
                    </span>
                    {product.originalPriceFormatted && (
                      <span className="text-xs text-[#7A7165] line-through">
                        {product.originalPriceFormatted}
                      </span>
                    )}
                  </div>
                </div>
                {product.discountPercent && (
                  <span className="text-xs uppercase font-bold tracking-wider text-black bg-[#D4AF37] px-2.5 py-1 rounded-sm">
                    {product.discountPercent}
                  </span>
                )}
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#8A8175] mb-2">
                  इस दिव्य स्वरूप के बारे में
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE5DA] leading-relaxed">
                  {product.fullDesc}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="border border-[#2E261D] overflow-hidden text-xs rounded-sm">
                <div className="bg-[#1C1712] px-4 py-2 font-bold uppercase tracking-wider text-[#D4AF37] border-b border-[#2E261D]">
                  विवरण एवं विशेषताएं
                </div>
                <div className="divide-y divide-[#261F18] bg-[#110E0C]">
                  <div className="px-4 py-2.5 grid grid-cols-3">
                    <span className="text-[#8A8175]">सामग्री / पाषाण:</span>
                    <span className="col-span-2 text-[#EBE5DA] font-medium">{product.material}</span>
                  </div>
                  {product.naturalMarkings && (
                    <div className="px-4 py-2.5 grid grid-cols-3">
                      <span className="text-[#8A8175]">प्राकृतिक रेखाएं:</span>
                      <span className="col-span-2 text-[#EBE5DA] font-medium">{product.naturalMarkings}</span>
                    </div>
                  )}
                  {product.recommendedFor && (
                    <div className="px-4 py-2.5 grid grid-cols-3">
                      <span className="text-[#8A8175]">स्थापना हेतु उपयुक्त:</span>
                      <span className="col-span-2 text-[#EBE5DA] font-medium">{product.recommendedFor}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Spiritual Significance & Care Info */}
              <div className="space-y-3">
                <div className="p-3.5 bg-[#110E0C] border border-[#2E261D] space-y-1 rounded-sm">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>आध्यात्मिक महत्व एवं फल</span>
                  </div>
                  <p className="text-xs text-[#C7BFB4] leading-relaxed">
                    {product.spiritualSignificance}
                  </p>
                </div>

                <div className="p-3.5 bg-[#110E0C] border border-[#2E261D] space-y-1 rounded-sm">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>देखभाल एवं अभिषेक विधि</span>
                  </div>
                  <p className="text-xs text-[#C7BFB4] leading-relaxed">
                    {product.careInfo}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#110E0C] border-t border-[#261F18] flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="text-xs text-[#A89E90] text-center sm:text-left">
            लाइव फोटो, वीडियो, पैकिंग और पूरे भारत में सुरक्षित डिलीवरी के लिए सीधे संपर्क करें।
          </div>

          <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
            {/* Direct WhatsApp Enquiry Link */}
            <a
              href={getProductWhatsAppUrl(
                product.name,
                `${product.dimensions || ''} | ${product.priceFormatted}`,
                product.images[activeImageIndex] || product.images[0]
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 sm:col-auto px-4 sm:px-5 py-3 font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/25 rounded-sm cursor-pointer min-h-[42px]"
              title={`WhatsApp: +91 ${BRAND_PHONE}`}
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span className="hidden min-[420px]:inline">WhatsApp (+91 {BRAND_PHONE})</span>
              <span className="min-[420px]:hidden">WhatsApp पर चैट</span>
            </a>

            {/* Direct Call Button */}
            <a
              href={getTelUrl()}
              className={`col-span-1 sm:col-auto px-3 sm:px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 rounded-sm min-h-[42px] ${
                theme === 'white'
                  ? 'text-[#1C1917] bg-[#F2ECE1] hover:bg-[#EAE2D5] border border-[#DDD5C7]'
                  : 'text-white bg-[#1C1712] hover:bg-[#261F18] border border-[#3A3024]'
              }`}
              title={`Call ${BRAND_PHONE}`}
            >
              <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span className="hidden min-[420px]:inline">कॉल: {BRAND_PHONE}</span>
              <span className="min-[420px]:hidden">कॉल करें</span>
            </a>

            {/* Send Enquiry by Email */}
            <button
              onClick={() => {
                onClose();
                onOpenEnquiryModal(product.name);
              }}
              className={`col-span-1 sm:col-auto px-3 sm:px-4 py-3 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5 cursor-pointer rounded-sm min-h-[42px] ${
                theme === 'white'
                  ? 'text-[#1C1917] bg-[#F2ECE1] hover:bg-[#EAE2D5] border border-[#DDD5C7]'
                  : 'text-white bg-[#1C1712] hover:bg-[#261F18] border border-[#3A3024]'
              }`}
            >
              <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>फॉर्म भरें</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
