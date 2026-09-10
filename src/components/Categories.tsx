import React from 'react';
import { ProductCategory } from '../types';
import { CATEGORIES } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (catId: ProductCategory) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-24 bg-[#0C0A09] relative border-t border-[#261F18]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              पवित्र श्रेणियां
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            श्रेणी अनुसार चुनें
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto">
            प्राकृतिक रूप से निर्मित स्वयंभू नर्मदेश्वर बाणलिंग, घर के मंदिर हेतु सिद्ध जलाधारी सेट और विशेष दुर्लभ स्वरूप।
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between rounded-sm"
            >
              {/* Category Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#110E0C]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/40 to-transparent" />
                
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#241E18] border border-[#3E3326] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-[#D4AF37] uppercase block">
                    {cat.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mt-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#A89E90] leading-relaxed mt-2">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>संग्रह देखें</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
