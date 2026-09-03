import React from 'react';
import { 
  Sparkles, 
  UserCheck, 
  MessageCircle, 
  Globe2, 
  Box, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      num: '01',
      title: 'Carefully Selected',
      description: 'Every piece is presented with attention to its natural beauty and uniqueness.',
    },
    {
      icon: UserCheck,
      num: '02',
      title: 'Personal Assistance',
      description: 'Get direct guidance from our team before making your selection.',
    },
    {
      icon: MessageCircle,
      num: '03',
      title: 'WhatsApp Support',
      description: 'Connect with us directly and conveniently with direct photo preview.',
    },
    {
      icon: Globe2,
      num: '04',
      title: 'Pan-India Enquiries',
      description: 'Customers from across India can contact us with nationwide dispatch.',
    },
    {
      icon: Box,
      num: '05',
      title: 'Premium Presentation',
      description: 'Every Shivling is showcased with attention to detail and safe velvet packaging.',
    },
    {
      icon: HeartHandshake,
      num: '06',
      title: 'Devotion & Trust',
      description: 'Our focus is on a transparent, honest, and respectful customer experience.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#0E0C0A] relative border-t border-[#261F18]">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
              The Trilok Difference
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2]">
            Dedicated to authentic presentation, personalized consultation, and revered service.
          </p>
        </div>

        {/* 6 Feature Cards Grid: 1 col on phone, 2 cols on tablet, 3 cols on laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl relative overflow-hidden flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#241E18] border border-[#3A3024] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shadow-sm rounded-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8A8175] group-hover:text-[#D4AF37] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A89E90] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
