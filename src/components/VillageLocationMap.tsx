import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  Sparkles,
} from 'lucide-react';
import { BRAND_PHONE, getTelUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

export const VillageLocationMap: React.FC = () => {
  const { theme } = useTheme();
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
            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
              पवित्र उद्गम स्थल एवं शिल्प ग्राम
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            शिल्प ग्राम <span className="text-[#D4AF37] underline decoration-[#D4AF37]/40 underline-offset-8">बकावां (Bakawan)</span>, मध्य प्रदेश
          </h2>
          
          <p className="text-sm sm:text-base text-[#B8B0A2] max-w-2xl mx-auto leading-relaxed">
            बकावां (मध्य प्रदेश) पवित्र नर्मदा नदी के तट पर बसा वह विश्वविख्यात पावन गांव है, जहां पीढ़ियों से सिद्ध शिल्पकार माँ नर्मदा के स्वयंभू बाणलिंगों को श्रद्धा और पवित्रता से तराशते हैं।
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map */}
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#EBE5DA]">
                  स्थान: ग्राम बकावां, खरगोन/बड़वाह (म.प्र.)
                </span>
              </div>
              
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  theme === 'white' ? 'text-[#8F6000] hover:text-black' : 'text-[#D4AF37] hover:text-white'
                }`}
              >
                <span>गूगल मैप पर देखें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] bg-[#110E0C]">
              <iframe
                title="ग्राम बकावां मध्य प्रदेश नक्शा"
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
                  <span className="text-[10px] uppercase tracking-wider text-[#A89E90] block font-semibold">शिल्प केंद्र</span>
                  <span className="text-xs font-serif font-bold text-white">त्रिलोक शिवलिंग आर्ट, बकावां</span>
                </div>
              </div>
            </div>

            {/* Bottom Map Navigation Bar */}
            <div className="p-4 sm:p-5 bg-[#14110E] border-t border-[#261F18] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#C7BFB4]">
                  <strong className="text-[#D4AF37]">पिनकोड: 451113</strong> • जिला खरगोन (पश्चिम निमाड़), मध्य प्रदेश
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
                <span>गूगल मैप से रास्ता देखें (Directions)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Village Highlights, Distances & Workshop Visit */}
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
                    बकावां की आध्यात्मिक महिमा
                  </h3>
                </div>
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-[#D4AF37] text-black">
                  नर्मदा तट
                </span>
              </div>

              <p className="text-xs text-[#A89E90] leading-relaxed">
                बकावां संपूर्ण भारत में बाणलिंग कारीगरों की पावन भूमि माना जाता है। पवित्र नर्मदा नदी के भंवरों और जलधाराओं से गोल हुए ये प्राकृतिक पत्थर साक्षात महादेव के स्वयंभू स्वरूप माने जाते हैं।
              </p>

              {/* Key Distances Strip */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8175] block">
                  बकावां से प्रमुख धार्मिक व यात्रा स्थल दूरी:
                </span>
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <div className={`p-2 sm:p-2.5 flex items-center justify-between border rounded-sm ${
                    theme === 'white' ? 'bg-[#F5F1E9] border-[#DDD5C7]' : 'bg-[#120F0C] border-[#261F18]'
                  }`}>
                    <span className={theme === 'white' ? 'text-[#57534E]' : 'text-[#A89E90]'}>बड़वाह:</span>
                    <span className={`font-bold ${theme === 'white' ? 'text-[#1C1917]' : 'text-[#EBE5DA]'}`}>~45 किमी</span>
                  </div>
                  <div className={`p-2 sm:p-2.5 flex items-center justify-between border rounded-sm ${
                    theme === 'white' ? 'bg-[#F5F1E9] border-[#DDD5C7]' : 'bg-[#120F0C] border-[#261F18]'
                  }`}>
                    <span className={theme === 'white' ? 'text-[#57534E]' : 'text-[#A89E90]'}>ओंकारेश्वर ज्योतिर्लिंग:</span>
                    <span className={`font-bold ${theme === 'white' ? 'text-[#1C1917]' : 'text-[#EBE5DA]'}`}>~48 किमी</span>
                  </div>
                  <div className={`p-2 sm:p-2.5 flex items-center justify-between border rounded-sm ${
                    theme === 'white' ? 'bg-[#F5F1E9] border-[#DDD5C7]' : 'bg-[#120F0C] border-[#261F18]'
                  }`}>
                    <span className={theme === 'white' ? 'text-[#57534E]' : 'text-[#A89E90]'}>महेश्वर:</span>
                    <span className={`font-bold ${theme === 'white' ? 'text-[#1C1917]' : 'text-[#EBE5DA]'}`}>~50 किमी</span>
                  </div>
                  <div className={`p-2 sm:p-2.5 flex items-center justify-between border rounded-sm ${
                    theme === 'white' ? 'bg-[#F5F1E9] border-[#DDD5C7]' : 'bg-[#120F0C] border-[#261F18]'
                  }`}>
                    <span className={theme === 'white' ? 'text-[#57534E]' : 'text-[#A89E90]'}>इंदौर हवाईअड्डा:</span>
                    <span className={`font-bold ${theme === 'white' ? 'text-[#1C1917]' : 'text-[#EBE5DA]'}`}>~90 किमी</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit / Artisan Direct Contact Box */}
            <div className={`p-5 sm:p-6 border rounded-sm space-y-4 shadow-xl ${
              theme === 'white'
                ? 'bg-gradient-to-br from-white to-[#F5F1E9] border-[#D4AF37]/50'
                : 'bg-gradient-to-br from-[#181512] to-[#120F0C] border-[#D4AF37]/40'
            }`}>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-1">
                  ✦ सीधे कारीगर कार्यशाला से
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                  बकावां आने का विचार या ऑनलाइन ऑर्डर?
                </h4>
                <p className={`text-xs mt-1 ${theme === 'white' ? 'text-[#44403C]' : 'text-[#A89E90]'}`}>
                  कार्यशाला दर्शन, विशेष शिवलिंग चयन अथवा घर बैठे सुरक्षित होम डिलीवरी के लिए सीधे हमसे संपर्क करें।
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                <a
                  href={`https://wa.me/91${BRAND_PHONE}?text=${encodeURIComponent('नमस्ते त्रिलोक शिवलिंग आर्ट, मुझे बकावां कार्यशाला आने अथवा नर्मदेश्वर शिवलिंग के विषय में जानकारी चाहिए।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-village-whatsapp"
                  className="py-2.5 px-2 sm:px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-[#25D366]/20 transition-all active:scale-98 min-h-[42px]"
                  title={`WhatsApp: +91 ${BRAND_PHONE}`}
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden min-[360px]:inline">WhatsApp: {BRAND_PHONE}</span>
                  <span className="min-[360px]:hidden">WhatsApp</span>
                </a>

                <a
                  href={getTelUrl()}
                  id="btn-village-call"
                  className={`py-2.5 px-2 sm:px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-colors min-h-[42px] ${
                    theme === 'white'
                      ? 'bg-[#F2ECE1] hover:bg-[#EAE2D5] border border-[#DDD5C7] text-[#1C1917]'
                      : 'bg-[#1F1B16] hover:bg-[#29231D] border border-[#3A3024] text-white'
                  }`}
                  title={`Call ${BRAND_PHONE}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                  <span className="hidden min-[360px]:inline">कॉल: {BRAND_PHONE}</span>
                  <span className="min-[360px]:hidden">कॉल करें</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
