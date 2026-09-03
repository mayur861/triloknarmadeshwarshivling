import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { BRAND_PHONE, BRAND_PHONE_TEL, getWhatsAppUrl, getTelUrl } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenEnquiryModal: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collection', href: '#collection' },
    { label: 'Bakawan Location', href: '#village-location' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? theme === 'white'
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5DFD3] py-3.5 shadow-md shadow-stone-200/50'
            : 'bg-[#100E0C]/95 backdrop-blur-md border-b border-[#261F18] py-4 shadow-xl shadow-black/70'
          : theme === 'white'
            ? 'bg-gradient-to-b from-[#FAF8F5]/98 via-[#FAF8F5]/85 to-transparent py-4 sm:py-5'
            : 'bg-gradient-to-b from-[#0C0A09]/95 via-[#0C0A09]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-3 text-left"
            id="navbar-brand-link"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#a88220] to-[#1c1813] p-[1.5px] shadow-md shadow-[#d4af37]/20 flex items-center justify-center">
              <div className={`w-full h-full rounded-full ${theme === 'white' ? 'bg-[#F5EFE6]' : 'bg-[#161310]'} flex items-center justify-center`}>
                <span className="font-serif text-sm font-bold text-[#d4af37]">ॐ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg lg:text-xl font-serif tracking-[0.2em] text-[#D4AF37] uppercase font-bold ${theme === 'white' ? 'group-hover:text-black' : 'group-hover:text-white'} transition-colors`}>
                Trilok Shivling Art
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase ${theme === 'white' ? 'text-[#78716C]' : 'text-[#A89E90]'} font-medium`}>
                Authenticity • Devotion • Purity
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest text-[#C7BFB4]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#D4AF37] transition-colors py-1 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Phone Call link */}
            <a
              href={getTelUrl()}
              id="navbar-phone-btn"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider ${
                theme === 'white'
                  ? 'text-[#44403C] hover:text-black bg-[#F5F2EB] hover:bg-[#EFEAE0] border border-[#DDD5C7]'
                  : 'text-[#C7BFB4] hover:text-white bg-[#1A1713] hover:bg-[#231F19] border border-[#2E261D]'
              } hover:border-[#D4AF37]/50 transition-all flex items-center space-x-1.5`}
              title="Call 6263540349"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BRAND_PHONE}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-btn"
              className="bg-[#25D366] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#20ba59] transition-all duration-200 shadow-md shadow-[#25D366]/20 flex items-center space-x-2 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <ThemeToggle variant="compact" />

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${theme === 'white' ? 'bg-[#F2ECE1] text-[#25D366] border border-[#DDD5C7]' : 'bg-[#1A1B22] text-[#25D366] border border-[#2F3240]'} flex items-center justify-center`}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="navbar-mobile-menu-toggle"
              className={`p-2 rounded-lg ${theme === 'white' ? 'bg-[#F2ECE1] text-[#B8860B] border border-[#DDD5C7]' : 'bg-[#1A1713] text-[#D4AF37] border border-[#2E261D]'} focus:outline-none`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden ${theme === 'white' ? 'bg-white/98 border-b border-[#E5DFD3]' : 'bg-[#100E0C]/98 border-b border-[#261F18]'} backdrop-blur-xl px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200`}>
          <nav className="flex flex-col space-y-4">
            {/* Background Mode Toggle in Drawer */}
            <div className={`flex items-center justify-between pb-3.5 border-b ${theme === 'white' ? 'border-[#EBE5DA]' : 'border-[#201A14]'}`}>
              <span className={`text-xs font-bold uppercase tracking-wider ${theme === 'white' ? 'text-[#57534E]' : 'text-[#A89E90]'}`}>
                Background Theme
              </span>
              <ThemeToggle />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold uppercase tracking-widest ${theme === 'white' ? 'text-[#44403C] hover:text-[#B8860B] border-b border-[#F0EBE1]' : 'text-[#C7BFB4] hover:text-[#D4AF37] border-b border-[#201A14]'} py-2.5 transition-colors flex items-center justify-between`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#D4AF37]/60">✦</span>
              </a>
            ))}
            
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors text-center flex items-center justify-center space-x-2 shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelUrl()}
                className="w-full py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#C7BFB4] hover:text-white bg-[#1A1713] border border-[#2E261D] flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {BRAND_PHONE}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full py-2 px-4 text-xs uppercase tracking-widest text-[#A89E90] hover:text-[#D4AF37] text-center"
              >
                Send Written Enquiry Online →
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
