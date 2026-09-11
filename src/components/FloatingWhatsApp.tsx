import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export const FloatingWhatsApp: React.FC = () => {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end group">
      
      {/* Floating Quick Theme Toggle */}
      <div className="mb-3">
        <ThemeToggle />
      </div>

      {/* Interactive Floating Tooltip */}
      {showTooltip && (
        <div className={`mb-2 p-3.5 ${theme === 'white' ? 'bg-white text-[#1C1917] border-[#DDD5C7] shadow-xl' : 'bg-[#0D0D0D] text-white border-[#333] shadow-2xl'} border text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative rounded-sm`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className={`absolute top-1.5 right-1.5 ${theme === 'white' ? 'text-[#8A8175] hover:text-black' : 'text-[#666] hover:text-white'}`}
            aria-label="सूचना बंद करें"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center space-x-1.5 text-[#D4AF37] font-bold text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>सीधे मार्गदर्शन चाहिए?</span>
          </div>
          <p className={`text-[11px] ${theme === 'white' ? 'text-[#37332E]' : 'text-[#D1C7B7]'} leading-snug`}>
            WhatsApp (<strong className={`font-bold ${theme === 'white' ? 'text-[#15803d]' : 'text-[#25D366]'}`}>+91 9575501337</strong>) पर सीधे चैट करें — असली फोटो, वीडियो एवं मंदिर माप अनुसार सलाह प्राप्त करें।
          </p>
        </div>
      )}

      {/* Main Floating WhatsApp Bubble */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-108 active:scale-95 transition-all duration-300 relative border-2 border-white/20"
        aria-label="त्रिलोक शिवलिंग आर्ट से WhatsApp पर संपर्क करें"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#0A0A0A] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#0A0A0A]" />
      </a>
    </div>
  );
};
