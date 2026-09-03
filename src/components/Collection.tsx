import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl, getTelUrl, BRAND_PHONE } from '../utils/whatsapp';
import { Phone, Search, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
  onOpenEnquiryModal,
  onOpenWhatsAppRedirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'narmadeshwar', label: 'Narmadeshwar Shivling' },
    { id: 'home-temple', label: 'Home Temple' },
    { id: 'special-collection', label: 'Special Collector Edition' },
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
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
              Curated Sacred Art
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Explore Our Shivling Collection
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto">
            Discover a curated collection of authentic Narmadeshwar Shivlings with transparent direct pricing and immediate ordering.
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
              placeholder="Search Shivlings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-base sm:text-xs bg-[#161310] border border-[#2E261D] text-[#EBE5DA] placeholder-[#8A8175] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#161310] border border-[#2E261D] p-8 rounded-sm">
            <p className="text-[#B8B0A2] text-base mb-4">No Shivlings found matching your criteria.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md rounded-sm"
            >
              Reset Filters
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
                    <div className="absolute top-3 left-3 px-2.5 sm:px-3 py-1 bg-[#110E0C]/90 backdrop-blur-md text-[10px] font-semibold tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/30">
                      {product.categoryName}
                    </div>

                    {/* Discount Badge */}
                    {product.discountPercent && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                        {product.discountPercent}
                      </div>
                    )}
                  </div>

                  {/* Product Details Header */}
                  <div className="p-5 sm:p-6 pb-2 space-y-2.5 sm:space-y-3">
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

                {/* Price & Action Buttons Footer (WhatsApp + Contact ONLY) */}
                <div className="p-5 sm:p-6 pt-4 border-t border-[#261F18] space-y-4">
                  
                  {/* Prominent Price Display */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#8A8175] uppercase tracking-wider block font-semibold">Direct Artisan Price</span>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-base sm:text-lg font-bold text-[#D4AF37] tracking-wide font-serif">
                          {product.priceFormatted}
                        </span>
                        {product.originalPriceFormatted && (
                          <span className="text-xs text-[#7A7165] line-through">
                            {product.originalPriceFormatted}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C7BFB4] bg-[#120F0C] px-2.5 py-1 border border-[#2E261D]">
                      Safe Packaging
                    </span>
                  </div>

                  {/* Action Buttons Grid: WhatsApp + Contact ONLY */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    
                    {/* Enquire / Order on WhatsApp with Generated Card */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenWhatsAppRedirect) {
                          onOpenWhatsAppRedirect(product);
                        } else {
                          window.open(
                            getProductWhatsAppUrl(product.name, product.priceFormatted, product.images[0]),
                            '_blank'
                          );
                        }
                      }}
                      className="w-full py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-1.5 shadow-md shadow-[#25D366]/25 active:scale-98 rounded-sm cursor-pointer min-h-[42px]"
                      title="Generate WhatsApp image & chat directly"
                    >
                      <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                      <span>WhatsApp</span>
                    </button>

                    {/* Contact Option */}
                    <a
                      href={getTelUrl()}
                      className="w-full py-2.5 px-2 sm:px-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024] hover:border-[#D4AF37]/50 transition-colors flex items-center justify-center space-x-1.5 active:scale-98 rounded-sm min-h-[42px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>Contact</span>
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
