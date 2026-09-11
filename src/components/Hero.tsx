import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/janeudhari.webp';
import { getWhatsAppUrl, getTelUrl, BRAND_PHONE } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreClick: () => void;
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const { theme } = useTheme();
  const heroWhatsAppMsg = 'नमस्ते त्रिलोक शिवलिंग आर्ट, मुझे आपके पावन नर्मदेश्वर शिवलिंग संग्रह के बारे में जानकारी चाहिए।';

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

      <section id="home" className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Story & Call to Action Column (Desktop: Left, Mobile: Below Image) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Divider & Category Eyebrow */}
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <div className="h-[1.5px] w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold">
                माँ नर्मदा का पावन उपहार
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight sm:leading-[1.15] mb-4 sm:mb-6 text-white tracking-tight">
              दिव्य शिवलिंग। <br />
              <span className="italic text-[#D4AF37]">शाश्वत भक्ति एवं शांति।</span>
            </h1>

            {/* Subheading / About Text */}
            <p className="text-[#B8B0A2] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl font-sans">
              माँ नर्मदा के पावन जल प्रवाह से स्वतः निर्मित स्वयंभू नर्मदेश्वर शिवलिंग — सीधे बकावां (मध्य प्रदेश) के कुशल शिल्पकारों द्वारा पूर्ण श्रद्धा, पवित्रता और सुरक्षा के साथ आपके घर के मंदिर हेतु।
            </p>

            {/* Action Buttons: Stack on small phones, side-by-side on tablets & laptops */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D4AF37] text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#faeac2] transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20 active:scale-98 text-center"
              >
                संग्रह देखें
              </button>

              <a
                href={getTelUrl()}
                id="hero-call-btn"
                className={`w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm ${
                  theme === 'white'
                    ? 'bg-[#F2ECE1] hover:bg-[#EAE2D5] border-[#DDD5C7] text-[#1C1917] hover:border-[#8F6000]/60'
                    : 'bg-[#161310] hover:border-[#D4AF37] border-[#342A20] text-white hover:text-[#D4AF37]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>कॉल करें: {BRAND_PHONE}</span>
              </a>

              <a
                href={getWhatsAppUrl(heroWhatsAppMsg)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                title={`WhatsApp: +91 ${BRAND_PHONE}`}
                className={`w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm ${
                  theme === 'white'
                    ? 'bg-[#25D366] hover:bg-[#20ba59] border-[#25D366] text-white shadow-md shadow-[#25D366]/20'
                    : 'bg-[#161310] border-[#25D366]/50 hover:bg-[#25D366] text-white hover:text-black'
                }`}
              >
                <WhatsAppIcon className={`w-4 h-4 ${theme === 'white' ? 'text-white' : 'text-[#25D366] group-hover:text-black'} transition-colors`} />
                <span className="hidden min-[480px]:inline">WhatsApp: +91 {BRAND_PHONE}</span>
                <span className="min-[480px]:hidden">WhatsApp</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className={`flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs uppercase tracking-wider pt-6 sm:pt-8 font-semibold ${
              theme === 'white' ? 'text-[#37332E]' : 'text-[#948B7D]'
            }`}>
              <span>100% स्वयंभू</span>
              <span className="text-[#D4AF37]">✦</span>
              <span>प्रामाणिक नर्मदा पाषाण</span>
              <span className="text-[#D4AF37]">✦</span>
              <span>संपूर्ण भारत में सुरक्षित डिलीवरी</span>
            </div>

          </div>

          {/* Hero Visual Showcase (Desktop: Right, Mobile: Top / Upper Side) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)' }}
            />
            
            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-[460px] xl:max-w-[500px] bg-[#161310] rounded-2xl sm:rounded-t-[140px] border border-[#2E261D] shadow-2xl p-3 sm:p-5 flex flex-col items-center justify-center group">
              
              {/* Arched Stone Visual Card - Perfectly proportioned 3:4 aspect ratio for full photo visibility */}
              <div className="relative w-full aspect-[3/4] min-h-[300px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] max-h-[620px] rounded-xl sm:rounded-t-[120px] overflow-hidden border border-[#3E3326] shadow-[0_10px_40px_rgba(212,175,55,0.22)] bg-gradient-to-b from-[#221C16] to-[#120F0C]">
                <img
                  src={heroImg}
                  alt="बकावां से मूल जनेऊधारी नर्मदेश्वर शिवलिंग एवं हस्तनिर्मित जलाधारी"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A]/40 via-transparent to-black/10 pointer-events-none" />
                
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#161310]/80 border border-[#D4AF37]/40 text-[#D4AF37] shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Signature Caption */}
              <div className="mt-3 sm:mt-4 flex flex-col items-center text-center">
                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-1 font-bold">
                  विशेष स्वयंभू स्वरूप
                </span>
                <span className="text-white font-serif italic text-base sm:text-xl">
                  जनेऊधारी नर्मदेश्वर बाणलिंगम
                </span>
              </div>
            </div>

            {/* Large Subtle Architectural Watermark */}
            <div className="absolute bottom-2 right-2 text-right pointer-events-none select-none opacity-15 hidden lg:block">
              <span className="text-[70px] font-serif text-[#342A20] leading-none uppercase font-bold">
                स्वयंभू
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
              01. नर्मदेश्वर
            </span>
            <h3 className="text-white text-sm font-bold mb-1">स्वयंभू प्राकृतिक पाषाण</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              माँ नर्मदा के पवित्र जल प्रवाह से स्वतः आकार लेने वाले पावन बाणलिंग।
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              02. घर के मंदिर हेतु
            </span>
            <h3 className="text-white text-sm font-bold mb-1">पूजा एवं अभिषेक अनुकूल</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              दैनिक जलाभिषेक व गृह मंदिर की वेदी हेतु आदर्श माप व संपूर्ण सेट।
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              03. सीधा कारीगर संपर्क
            </span>
            <h3 className="text-white text-sm font-bold mb-1">उचित दर व सीधी बात</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              बकावां कार्यशाला से सीधे संपर्क कर फोटो, वीडियो व मार्गदर्शन पाएं।
            </p>
          </div>

          <div className="flex flex-col border-l border-[#2D241C] pl-6 hover:border-[#D4AF37] transition-colors">
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
              04. संपूर्ण भारत
            </span>
            <h3 className="text-white text-sm font-bold mb-1">सुरक्षित होम डिलीवरी</h3>
            <p className="text-[#A89E90] text-xs leading-relaxed">
              मजबूत और पवित्र सुरक्षा पैकिंग के साथ आपके द्वार तक सुरक्षित आपूर्ति।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
