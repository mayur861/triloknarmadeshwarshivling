import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { BRAND_PHONE, BRAND_EMAIL, getWhatsAppUrl, getTelUrl, getMailtoUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'मुख्य पृष्ठ', href: '#home' },
    { label: 'शिवलिंग संग्रह', href: '#collection' },
    { label: 'बकावां धाम', href: '#village-location' },
    { label: 'हमारे बारे में', href: '#about' },
    { label: 'विशेषताएं', href: '#why-us' },
    { label: 'भक्तों के अनुभव', href: '#testimonials' },
    { label: 'संपर्क करें', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070605] text-[#A89E90] border-t border-[#261F18] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#261F18]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#161310] border-2 border-[#D4AF37]/60 flex items-center justify-center shadow-lg rounded-sm flex-shrink-0">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37]">ॐ</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-white uppercase leading-tight">
                  TRILOK NARMADESHWAR SHIVLING ART
                </span>
                <span className="block text-xs sm:text-sm text-[#D4AF37] font-bold tracking-[0.15em] uppercase mt-1">
                  प्रामाणिक स्वयंभू नर्मदेश्वर बाणलिंगम
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89E90] leading-relaxed max-w-sm">
              माँ नर्मदा के पावन आशीर्वाद से प्राकृतिक रूप से निर्मित स्वयंभू नर्मदेश्वर शिवलिंग एवं हस्तनिर्मित संगमरमर जलाधारी सेट। बकावां (मध्य प्रदेश) से सीधा प्रेषण।
            </p>

            <div className="pt-2 text-xs text-[#8A8175]">
              <span>उत्पत्ति व केंद्र:</span> <strong className="text-white">ग्राम बकावां, मध्य प्रदेश</strong> (अखिल भारतीय डिलीवरी)
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
              त्वरित लिंक
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] text-[#C7BFB4] transition-colors flex items-center space-x-2"
                  >
                    <span className="text-[#D4AF37] text-[9px]">―</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
              सीधा संपर्क
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={getTelUrl()}
                className="flex items-center space-x-2.5 hover:text-[#D4AF37] text-[#C7BFB4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>फोन: {BRAND_PHONE}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 hover:text-[#25D366] text-[#C7BFB4] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 {BRAND_PHONE}</span>
              </a>

              <a
                href={getMailtoUrl()}
                className="flex items-center space-x-2.5 hover:text-[#D4AF37] text-[#C7BFB4] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{BRAND_EMAIL}</span>
              </a>
            </div>

            <div className="pt-3">
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider bg-[#161310] border border-[#2E261D] text-[#A89E90] rounded-sm">
                प्रत्यक्ष शिल्पकार कार्यशाला • बकावां (म.प्र.)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright, Theme Switcher & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7165]">
          <p>© 2026 त्रिलोक शिवलिंग आर्ट। सर्वाधिकार सुरक्षित। (Trilok Shivling Art)</p>
          
          <div className="flex items-center space-x-2.5">
            <span className="text-[11px] uppercase tracking-wider text-[#A89E90]">थीम:</span>
            <ThemeToggle />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-[#D4AF37] text-[#A89E90] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
          >
            <span>शीर्ष पर जाएं (Top)</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
