import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl, getTelUrl, BRAND_PHONE } from '../utils/whatsapp';
import { Phone, Search } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

interface CollectionProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenProductModal?: (product: Product) => void;
  onOpenEnquiryModal: (productName?: string) => void;
  onOpenWhatsAppRedirect?: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProductModal,
}) => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'सभी शिवलिंग' },
    { id: 'narmadeshwar', label: 'नर्मदेश्वर शिवलिंग' },
    { id: 'home-temple', label: 'घर के मंदिर हेतु' },
    { id: 'special-collection', label: 'विशेष संग्रह' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="collection" className="py-24 bg-[#0C0A09] relative border-t border-[#261F18]">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              पावन आध्यात्मिक संग्रह
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            हमारा पावन शिवलिंग संग्रह
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto">
            माँ नर्मदा के पवित्र पत्थरों से बकावां में निर्मित प्रामाणिक नर्मदेश्वर शिवलिंग — सीधा कारीगर संपर्क व सुरक्षित होम डिलीवरी।
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10">
          
          {/* Category Filter Pills with smooth touch-scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none touch-pan-x">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer rounded-sm shrink-0 ${
                  selectedCategory === tab.id
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : theme === 'white'
                      ? 'bg-[#F2ECE1] text-[#292524] hover:bg-[#EAE2D5] border border-[#DDD5C7]'
                      : 'bg-[#181512] text-[#B8B0A2] hover:text-white hover:bg-[#241F1A] border border-[#2E261D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A8175]" />
            <input
              type="text"
              placeholder="शिवलिंग खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-base sm:text-xs bg-[#161310] border border-[#2E261D] text-[#EBE5DA] placeholder-[#8A8175] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#161310] border border-[#2E261D] p-8 rounded-sm">
            <p className="text-[#B8B0A2] text-base mb-4">आपकी खोज के अनुसार कोई शिवलिंग नहीं मिला।</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md rounded-sm"
            >
              सभी शिवलिंग दिखाएं (फिल्टर हटाएं)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl rounded-sm"
              >
                <div>
                  {/* Product Image Container (Click to view details) */}
                  <div 
                    onClick={() => onOpenProductModal?.(product)}
                    className="relative h-60 sm:h-68 md:h-72 w-full overflow-hidden bg-[#110E0C] cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-transparent to-transparent opacity-80" />

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 bg-[#110E0C]/90 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase text-[#D4AF37] border border-[#D4AF37]/30">
                      {product.categoryName}
                    </div>
                  </div>

                  {/* Product Details Header */}
                  <div className="p-5 sm:p-6 pb-4 space-y-2.5 sm:space-y-3">
                    <h3 
                      onClick={() => onOpenProductModal?.(product)}
                      className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#A89E90] leading-relaxed line-clamp-2">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Action Buttons Footer (WhatsApp + Contact ONLY) */}
                <div className="px-5 sm:px-6 py-4 border-t border-[#261F18]">
                  <div className="grid grid-cols-1 min-[390px]:grid-cols-[1.5fr_1fr] gap-2.5">
                    {/* Direct WhatsApp Order / Enquiry Link */}
                    <a
                      href={getProductWhatsAppUrl(product.name, product.categoryName, product.images[0])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 text-[11px] sm:text-xs font-bold tracking-normal text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-[#25D366]/25 active:scale-98 rounded-sm cursor-pointer min-h-[42px] whitespace-nowrap"
                      title={`WhatsApp में जानकारी लें: +91 ${BRAND_PHONE}`}
                    >
                      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                      <span>WhatsApp में जानकारी लें</span>
                    </a>

                    {/* Contact Option */}
                    <a
                      href={getTelUrl()}
                      title={`संपर्क करें: +91 ${BRAND_PHONE}`}
                      className={`w-full py-2.5 px-3 text-[11px] sm:text-xs font-bold tracking-normal transition-colors flex items-center justify-center space-x-1.5 active:scale-98 rounded-sm min-h-[42px] whitespace-nowrap ${
                        theme === 'white'
                          ? 'text-[#1C1917] bg-[#F2ECE1] hover:bg-[#EAE2D5] border border-[#DDD5C7] hover:border-[#8F6000]/60'
                          : 'text-white bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>संपर्क करें</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
