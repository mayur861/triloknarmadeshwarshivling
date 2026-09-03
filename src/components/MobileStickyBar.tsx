import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND_PHONE, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

export const MobileStickyBar: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden backdrop-blur-lg p-2.5 shadow-2xl transition-colors duration-200 ${
        theme === 'white'
          ? 'bg-white/95 border-t border-[#E5DFD3] shadow-stone-300/40'
          : 'bg-[#14151B]/95 border-t border-[#282A36]'
      }`}
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp"
          className="py-3 px-3 font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center space-x-1.5 shadow-md shadow-[#25D366]/25 active:scale-95 transition-transform rounded-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={getTelUrl()}
          id="mobile-sticky-call"
          className={`py-3 px-3 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 active:scale-95 transition-transform rounded-sm ${
            theme === 'white'
              ? 'text-[#1C1917] bg-[#F5F1E9] hover:bg-[#EFE9DF] border border-[#DDD5C7]'
              : 'text-white bg-[#1C1E26] hover:bg-[#252834] border border-[#2F3240]'
          }`}
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span>Call: {BRAND_PHONE}</span>
        </a>

      </div>
    </div>
  );
};
