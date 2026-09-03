import React from 'react';
import { Waves, Sparkles, Heart, Shield, Landmark, Flame } from 'lucide-react';
import narmadaRiverImg from '../assets/images/narmada_river_1788175952822.jpg';
import narmadeshwarNaturalImg from '../assets/images/narmadeshwar_natural_1788175966117.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0A09] relative overflow-hidden border-t border-[#261F18]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
              Heritage & Roots
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Story Behind Trilok Shivling Art
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] font-normal leading-relaxed">
            Trilok Shivling Art is dedicated to bringing beautiful and spiritually meaningful Shivlings to devotees across India. We focus on carefully selected pieces, authentic presentation and a personal customer experience rather than a conventional online shopping experience.
          </p>
        </div>

        {/* Story Grid with Imagery & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#2E261D] bg-[#161310] h-56 sm:h-64 shadow-xl rounded-sm">
                <img
                  src={narmadaRiverImg}
                  alt="Holy Narmada River at sunrise"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-[#161310] border border-[#2E261D] text-xs text-[#A89E90] space-y-1 rounded-sm">
                <span className="text-[#D4AF37] font-bold block text-sm font-serif">
                  Holy Narmada Basin
                </span>
                <p className="leading-relaxed">Formed naturally by the holy river current over generations without artificial machine shaping.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 bg-[#161310] border border-[#2E261D] text-xs text-[#A89E90] space-y-1 rounded-sm">
                <span className="text-[#D4AF37] font-bold block text-sm font-serif">
                  Swayambhu Marks
                </span>
                <p className="leading-relaxed">Natural red mineral bands, tilaks, and ochre lines celebrating nature’s divine artistry.</p>
              </div>
              <div className="overflow-hidden border border-[#2E261D] bg-[#161310] h-56 sm:h-64 shadow-xl rounded-sm">
                <img
                  src={narmadeshwarNaturalImg}
                  alt="Natural Banalingam with tilak marking"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-sm sm:text-base text-[#C7BFB4] leading-relaxed">
              <p>
                In the ancient spiritual traditions of India, the <strong className="text-white font-semibold">Narmadeshwar Banalingam</strong> holds a venerated place. Rolling along the rocky bed of the sacred Narmada River, dense cryptocrystalline quartz stones are sculpted over decades by the natural whirlpools and pure river currents into sacred ellipsoids.
              </p>
              <p>
                At <strong className="text-white font-semibold">Trilok Shivling Art</strong>, we approach each Shivling with devotion and care. Rather than treating these sacred symbols as mass-produced commodities, we curate each piece individually—appreciating its natural grain, mineral banding, weight, and smooth tactile presence.
              </p>
            </div>

            {/* 4 Story Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Waves className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">River Heritage</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  Honoring the timeless geography of the holy Narmada River corridor in Madhya Pradesh.
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">Devotional Respect</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  Handled with cleanliness, reverence, and custom velvet packaging for safe transit to your home.
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Landmark className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">Artisan Pedestals</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  Paired with custom-measured black stone & marble Jaladharis carved by skilled Indian stonemasons.
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Shield className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">Transparent Guidance</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  Honest guidance without misleading claims, commercial gimmicks, or artificial dyes.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
