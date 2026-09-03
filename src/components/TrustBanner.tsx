import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const TrustBanner: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#13100D] border-y border-[#261F18] overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] rounded-full border border-[#D4AF37]/35" />
        <div className="absolute w-[450px] h-[450px] rounded-full border border-[#D4AF37]/25" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#D4AF37]/15" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center justify-center gap-3 mb-1">
          <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
            Devotional Philosophy
          </span>
          <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto tracking-tight">
          “A Shivling Is More Than an Object — <br />
          <span className="text-[#D4AF37]">It Is a Symbol of Devotion”</span>
        </h2>

        <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto leading-relaxed">
          Rooted in ancient reverence for the sacred waters of the holy Narmada River, we present authentic Banalingams with complete transparency, careful selection, and personalized attention.
        </p>

        {/* 3 Keywords Pillars */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 pt-4 sm:pt-6">
          <div className="text-center">
            <span className="block font-serif text-base sm:text-xl md:text-2xl font-bold text-white tracking-wider">
              FAITH
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A89E90] uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 block">
              Pure Devotion
            </span>
          </div>

          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

          <div className="text-center">
            <span className="block font-serif text-base sm:text-xl md:text-2xl font-bold text-white tracking-wider">
              NATURE
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A89E90] uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 block">
              River Formed
            </span>
          </div>

          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

          <div className="text-center">
            <span className="block font-serif text-base sm:text-xl md:text-2xl font-bold text-white tracking-wider">
              DEVOTION
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A89E90] uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1 block">
              Reverent Service
            </span>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="pt-4 sm:pt-6">
          <a
            href={getWhatsAppUrl('Namaste Trilok Shivling Art 🙏 I would like to consult about finding the right Shivling for my home mandir.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-[#D4AF37] hover:bg-[#faeac2] transition-all shadow-lg shadow-[#D4AF37]/20 active:scale-98 rounded-sm min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult With Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
