import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, MapPin, Star, UserCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0E0C0A] relative border-t border-[#261F18]">
      {/* Background visual elements */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
              Devotee Experiences
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Devotee Testimonials & Blessings
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2]">
            Real feedback and devotional experiences from families and temples who have welcomed our sacred Narmadeshwar Shivlings.
          </p>
        </div>

        {/* Testimonials Grid: Responsive 1 col (mobile), 2 cols (tablet), 3 cols (laptop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between shadow-xl relative rounded-sm group"
            >
              <div>
                {/* Top Strip: Quote Icon + Rating Stars */}
                <div className="flex items-center justify-between mb-5">
                  <Quote className="w-7 h-7 text-[#D4AF37]/50" />
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-sm sm:text-base text-[#EBE5DA] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Bottom Author Info with Avatar, Name and Location */}
              <div className="pt-4 border-t border-[#261F18] flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3.5 min-w-0">
                  {/* Small person profile image */}
                  {item.avatar && (
                    <div className="relative flex-shrink-0 w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] to-[#D4AF37]/30 shadow-md">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A89E90] block truncate">
                      {item.authorLabel}
                    </span>
                    <span className="text-[10px] text-[#D4AF37]/80 block truncate">
                      {item.context}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs text-[#D4AF37] font-medium whitespace-nowrap self-end sm:self-center bg-[#120F0C] px-2 py-1 border border-[#2E261D] flex-shrink-0 rounded-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

