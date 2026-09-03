import React from 'react';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_shivling_1788175936922.jpg';
import { getWhatsAppUrl, getTelUrl, BRAND_PHONE } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onExploreClick: () => void;
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const heroWhatsAppMsg = 'Hello Trilok Shivling Art, I would like to know more about your Shivling collection.';

  return (
    <div className="relative bg-[#0E0C0A] text-[#EBE5DA] pt-20 border-b border-[#261F18] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div
          className="absolute top-1/4 right-1/4 w-[650px] h-[650px] rounded-full blur-[150px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.20) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.10) 0%, transparent 70%)' }}
        />
      </div>

      <section id="home" className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Divider & Category Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1.5px] w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
                A Gift of Holy Narmada
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight sm:leading-[1.15] mb-4 sm:mb-6 text-white tracking-tight">
              Divine Shivling. <br />
              <span className="italic text-[#D4AF37]">Timeless Spirituality.</span>
            </h1>

            {/* Subheading */}
            <p className="text-[#B8B0A2] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl font-sans">
              Discover beautifully selected Shivlings crafted by nature and presented with devotion, purity, and care for your sacred spaces.
            </p>

            {/* Action Buttons: Stack on small phones, side-by-side on tablets & laptops */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-black text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[#faeac2] transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20 active:scale-98 text-center"
              >
                Explore Collection
              </button>

              <a
                href={getTelUrl()}
                id="hero-call-btn"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-[#342A20] text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-[#161310] flex items-center justify-center space-x-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call {BRAND_PHONE}</span>
              </a>

              <a
                href={getWhatsAppUrl(heroWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 border border-[#25D366]/50 hover:bg-[#25D366] text-white hover:text-black text-xs sm:text-sm font-bold uppercase tracking-widest transition-all bg-[#161310] flex items-center justify-center space-x-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-black transition-colors" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#948B7D] pt-6 sm:pt-8 font-medium">
              <span>Authentic</span>
              <span className="text-[#D4AF37]">✦</span>
              <span>Carefully Selected</span>
              <span className="text-[#D4AF37]">✦</span>
              <span>Devotionally Presented</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center overflow-hidden pt-4 lg:pt-0">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)' }}
            />
            
            <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-[#161310] rounded-2xl sm:rounded-t-[140px] border border-[#2E261D] shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-center group">
              
              {/* Arched Stone Visual Card */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-xl sm:rounded-t-[120px] overflow-hidden border border-[#3E3326] shadow-[0_10px_40px_rgba(212,175,55,0.22)] bg-gradient-to-b from-[#221C16] to-[#120F0C]">
                <img
                  src={heroImg}
                  alt="Authentic Narmadeshwar Shivling with handcrafted Jaladhari"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-transparent to-black/20 pointer-events-none" />
                
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#161310]/80 border border-[#D4AF37]/40 text-[#D4AF37] shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Signature Caption */}
              <div className="mt-5 flex flex-col items-center text-center">
                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-1 font-bold">
                  Signature Piece
                </span>
                <span className="text-white font-serif italic text-lg sm:text-xl">
                  Narmadeshwar Banalingam
                </span>
              </div>
            </div>

            {/* Large Subtle Architectural Watermark */}
            <div className="absolute bottom-2 right-2 text-right pointer-events-none select-none opacity-15 hidden lg:block">
              <span className="text-[70px] font-serif text-[#342A20] leading-none uppercase font-bold">
                Authentic
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 4-Pillars Horizontal Strip */}
      <section className="bg-[#13100D] border-t border-[#261F18] py-10 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              01. Narmadeshwar
            </span>
            <h3 className="text-white text-sm font-bold mb-1">Natural Sacred Stones</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              Naturally formed from the holy Narmada riverbeds.
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              02. Home Mandir
            </span>
            <h3 className="text-white text-sm font-bold mb-1">Pooja Ready Pieces</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              Perfectly sized for personal worship and home altars.
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              03. Direct Contact
            </span>
            <h3 className="text-white text-sm font-bold mb-1">Price on Enquiry</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              Personal assistance for every unique spiritual selection.
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              04. Pan India
            </span>
            <h3 className="text-white text-sm font-bold mb-1">Safe Delivery</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              Ensuring your divine art reaches you with utmost care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
