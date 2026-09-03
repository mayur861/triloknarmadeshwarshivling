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
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'Location', href: '#village-location' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070605] text-[#A89E90] border-t border-[#261F18] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#261F18]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#161310] border border-[#D4AF37]/50 flex items-center justify-center shadow-md rounded-sm">
                <span className="font-serif text-base font-bold text-[#D4AF37]">ॐ</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-widest text-white uppercase">
                  TRILOK SHIVLING ART
                </span>
                <span className="block text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] uppercase">
                  Shivling • Spiritual Art • Devotion
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89E90] leading-relaxed max-w-sm">
              Discover beautifully selected, sacred Narmadeshwar Shivlings and temple-inspired spiritual art pieces crafted by nature and presented with reverence.
            </p>

            <div className="pt-2 text-xs text-[#8A8175]">
              <span>Market / Location:</span> <strong className="text-white">India</strong> (Pan-India Inquiries)
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-bold text-white tracking-[0.2em] uppercase">
              Quick Links
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
              Connect With Us
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a
                href={getTelUrl()}
                className="flex items-center space-x-2.5 hover:text-[#D4AF37] text-[#C7BFB4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call: {BRAND_PHONE}</span>
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
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#161310] border border-[#2E261D] text-[#A89E90] rounded-sm">
                Direct Devotional Showroom
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright, Theme Switcher & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7165]">
          <p>© 2026 Trilok Shivling Art. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-2.5">
            <span className="text-[11px] uppercase tracking-wider text-[#A89E90]">Theme:</span>
            <ThemeToggle />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-[#D4AF37] text-[#A89E90] transition-colors cursor-pointer uppercase tracking-wider text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
