import React, { useState } from 'react';
import { ProductCategory, Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { VillageLocationMap } from './components/VillageLocationMap';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhatsAppImageRedirectModal } from './components/WhatsAppImageRedirectModal';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DirectEnquiryModal } from './components/DirectEnquiryModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [whatsAppRedirectProduct, setWhatsAppRedirectProduct] = useState<Product | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryDefaultProduct, setEnquiryDefaultProduct] = useState<string | undefined>(undefined);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      const offset = 75;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryModal = (productName?: string) => {
    setEnquiryDefaultProduct(productName);
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className={`min-h-screen ${theme === 'white' ? 'theme-white bg-[#FAF8F5] text-[#1C1917]' : 'theme-dark bg-[#0C0A09] text-[#EBE5DA]'} font-sans relative selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] transition-colors duration-300`}>
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenEnquiryModal={handleOpenEnquiryModal} />

      {/* Main Website Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToCollection}
          onOpenEnquiryModal={handleOpenEnquiryModal}
        />

        {/* 2. Complete Shivling Product Catalogue */}
        <Collection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProductModal={(product) => setActiveModalProduct(product)}
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onOpenWhatsAppRedirect={(product) => setWhatsAppRedirectProduct(product)}
        />

        {/* 4. Bakawan Village, Madhya Pradesh Location Map & Navigation */}
        <VillageLocationMap />

        {/* 5. The Story Behind Trilok Shivling Art */}
        <AboutUs />

        {/* 5. Why Choose Us (6 Feature Pillars) */}
        <WhyChooseUs />

        {/* 6. Devotee Testimonials */}
        <Testimonials />

        {/* 8. Contact / Enquiry Section */}
        <ContactSection prefilledProduct={enquiryDefaultProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onOpenEnquiryModal={handleOpenEnquiryModal}
        onOpenWhatsAppRedirect={(product) => setWhatsAppRedirectProduct(product)}
      />

      {/* WhatsApp Image Generator Redirect Modal */}
      <WhatsAppImageRedirectModal
        product={whatsAppRedirectProduct}
        onClose={() => setWhatsAppRedirectProduct(null)}
      />

      {/* Direct Quick Enquiry Modal */}
      <DirectEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProduct={enquiryDefaultProduct}
      />

      {/* Floating WhatsApp Bubble for Desktop & Tablet */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
