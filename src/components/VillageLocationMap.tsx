import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  MessageCircle,
  Sparkles,
  Compass,
  Building2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_PHONE, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

export const VillageLocationMap: React.FC = () => {
  // Direct Google Maps location link for Bakawan, Madhya Pradesh
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Bakawan,+Madhya+Pradesh+451113';
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Bakawan,+Madhya+Pradesh+451113';

  return (
    <section id="village-location" className="py-20 bg-[#0C0A09] relative border-t border-[#261F18] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/6 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-1 px-3.5 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
              Sacred Origin & Artisan Village
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Handcrafted at <span className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-8">BAKAWAN</span>, Madhya Pradesh
          </h2>
          
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto leading-relaxed">
            Bakawan (बकावां) is the world-renowned holy village nestled on the banks of the sacred Narmada River, where generations of master artisans have shaped natural Swayambhu Narmadeshwar Shivlings with sacred devotion.
          </p>
        </motion.div>

        {/* Main Content Grid: Map on one side, Village Details & Navigation on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map & Live Navigation Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 bg-[#161310] border border-[#2E261D] rounded-sm overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Top Map Header */}
            <div className="p-4 sm:p-5 bg-[#14110E] border-b border-[#261F18] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#EBE5DA]">
                  Live Location: Bakawan Village, MP
                </span>
              </div>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#D4AF37] hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] bg-[#110E0C]">
              <iframe
                title="Bakawan Village Madhya Pradesh Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.218558450702!2d75.9262!3d22.1884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962d31289297669%3A0xb35e1654877fae67!2sBakawan%2C%20Madhya%20Pradesh%20451113!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Highlight Pin Badge */}
              <div className="absolute top-4 left-4 bg-[#14110E]/95 backdrop-blur-md border border-[#D4AF37] px-3.5 py-2 shadow-xl flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/20" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] block font-semibold">Artisan Center</span>
                  <span className="text-xs font-serif font-bold text-white">Trilok Shivling Art, Bakawan</span>
                </div>
              </div>
            </div>

            {/* Bottom Map Navigation Bar */}
            <div className="p-4 sm:p-5 bg-[#14110E] border-t border-[#261F18] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#C7BFB4]">
                  <strong className="text-[#D4AF37]">Pincode: 451113</strong> • Khargone (West Nimar) District, MP
                </p>
              </div>

              {/* Primary Redirect to Google Maps Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-redirect-google-maps"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#faeac2] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-[#D4AF37]/20 transition-all active:scale-98 min-h-[42px]"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions on Map</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Village Highlights, Distances & Workshop Visit (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Village Significance Card */}
            <div className="p-5 sm:p-6 bg-[#161310] border border-[#2E261D] rounded-sm space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#261F18]">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                    Why Bakawan is Sacred
                  </h3>
                </div>
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-[#D4AF37] text-black">
                  Narmada Hub
                </span>
              </div>

              <p className="text-xs text-[#A89E90] leading-relaxed">
                Bakawan is historically recognized across India as the cradle of Banalingam artisans. Natural stones rolled and smoothed by the Holy Narmada River currents are revered as self-manifested (Swayambhu) Shivlings.
              </p>

              {/* Key Distances / Proximity Strip */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A8175] block">
                  Proximity & Distance to Bakawan:
                </span>
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <div className="p-2 sm:p-2.5 bg-[#120F0C] border border-[#261F18] flex items-center justify-between">
                    <span className="text-[#A89E90]">Barwaha:</span>
                    <span className="text-[#EBE5DA] font-bold">~15 km</span>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-[#120F0C] border border-[#261F18] flex items-center justify-between">
                    <span className="text-[#A89E90]">Omkareshwar:</span>
                    <span className="text-[#EBE5DA] font-bold">~38 km</span>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-[#120F0C] border border-[#261F18] flex items-center justify-between">
                    <span className="text-[#A89E90]">Maheshwar:</span>
                    <span className="text-[#EBE5DA] font-bold">~45 km</span>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-[#120F0C] border border-[#261F18] flex items-center justify-between">
                    <span className="text-[#A89E90]">Indore Airport:</span>
                    <span className="text-[#EBE5DA] font-bold">~85 km</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit / Artisan Direct Contact Box */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-[#181512] to-[#120F0C] border border-[#D4AF37]/40 rounded-sm space-y-4 shadow-xl">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  ✦ Direct From Artisan Center
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  Visiting Bakawan or Ordering Online?
                </h4>
                <p className="text-xs text-[#A89E90] mt-1">
                  Connect with us directly for guided workshop visits, authentic selection, or prompt all-India safe door delivery.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                <a
                  href={`https://wa.me/91${BRAND_PHONE}?text=${encodeURIComponent('Namaste, I want to enquire about visiting Bakawan workshop or ordering Narmadeshwar Shivling.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-village-whatsapp"
                  className="py-2.5 px-2 sm:px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-[#25D366]/20 transition-all active:scale-98 min-h-[42px]"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getTelUrl()}
                  id="btn-village-call"
                  className="py-2.5 px-2 sm:px-3 bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors min-h-[42px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span className="hidden sm:inline">Call {BRAND_PHONE}</span>
                  <span className="sm:hidden">Call Us</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
