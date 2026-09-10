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
      title: '100% प्राकृतिक एवं स्वयंभू',
      description: 'प्रत्येक शिवलिंग माँ नर्मदा के पावन प्रवाह से स्वतः आकार लेता है, जिसमें कोई कृत्रिम मिलावट नहीं होती।',
    },
    {
      icon: UserCheck,
      num: '02',
      title: 'व्यक्तिगत मार्गदर्शन',
      description: 'घर के मंदिर के माप व स्थान के अनुसार सही आकार व प्रकार के चयन हेतु सीधी सलाह।',
    },
    {
      icon: MessageCircle,
      num: '03',
      title: 'WhatsApp पर तुरंत फोटो व वीडियो',
      description: 'ऑर्डर करने से पूर्व वास्तविक शिवलिंग के लाइव फोटो व वीडियो WhatsApp पर देखकर संतुष्ट हों।',
    },
    {
      icon: Globe2,
      num: '04',
      title: 'संपूर्ण भारत में आपूर्ति',
      description: 'भारत के किसी भी राज्य, नगर या गांव में सुरक्षित कूरियर व ट्रांसपोर्ट द्वारा होम डिलीवरी।',
    },
    {
      icon: Box,
      num: '05',
      title: 'मजबूत सुरक्षा पैकिंग',
      description: 'लकड़ी के फ्रेम, थर्माकोल एवं बबल रैप में पूर्ण सुरक्षा के साथ पैकिंग, ताकि कोई टूट-फूट न हो।',
    },
    {
      icon: HeartHandshake,
      num: '06',
      title: 'श्रद्धा, शुचिता एवं विश्वास',
      description: 'बकावां के स्थानीय शिल्पकारों का सीधा सहयोग, उचित दर एवं पूर्ण पारदर्शिता।',
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
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              हमारी विशेषताएं
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            हमें क्यों चुनें?
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2]">
            प्रामाणिक नर्मदा पाषाण, कारीगरों का सीधा सहयोग और हर भक्त के प्रति समर्पित सेवा।
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
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
