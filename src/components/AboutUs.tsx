import React from 'react';
import { Waves, Heart, Shield, Landmark } from 'lucide-react';
import narmadaRiverImg from '../assets/images/narmada_river_1788175952822.jpg';
import narmadeshwarNaturalImg from '../assets/images/narmadeshwar_natural_1788175966117.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0C0A09] relative overflow-hidden border-t border-[#261F18]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              धरोहर एवं परंपरा
            </span>
            <div className="h-[1.5px] w-6 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            त्रिलोक शिवलिंग आर्ट की पावन यात्रा
          </h2>
          <p className="text-sm sm:text-base text-[#B8B0A2] font-normal leading-relaxed">
            त्रिलोक शिवलिंग आर्ट, बकावां (मध्य प्रदेश) माँ नर्मदा के पावन आशीर्वाद से देश-विदेश के शिवभक्तों तक प्रामाणिक एवं स्वयंभू नर्मदेश्वर शिवलिंग पहुंचाने के लिए समर्पित है। हमारा उद्देश्य व्यापार नहीं, बल्कि हर घर के मंदिर में शुद्धता और सात्विक ऊर्जा स्थापित करना है।
          </p>
        </div>

        {/* Story Grid with Imagery & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden border border-[#2E261D] bg-[#161310] h-56 sm:h-64 shadow-xl rounded-sm">
                <img
                  src={narmadaRiverImg}
                  alt="पवित्र नर्मदा नदी का पावन प्रवाह"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-[#161310] border border-[#2E261D] text-xs text-[#A89E90] space-y-1 rounded-sm">
                <span className="text-[#D4AF37] font-bold block text-sm font-serif">
                  पवित्र नर्मदा तट
                </span>
                <p className="leading-relaxed">नर्मदा नदी के निरंतर जल-प्रवाह से प्राकृतिक रूप से सुडौल बने स्वयंभू पाषाण।</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 bg-[#161310] border border-[#2E261D] text-xs text-[#A89E90] space-y-1 rounded-sm">
                <span className="text-[#D4AF37] font-bold block text-sm font-serif">
                  प्राकृतिक स्वयंभू तिलक
                </span>
                <p className="leading-relaxed">प्राकृतिक लाल, पीली मृत्तिका एवं खनिज रेखाएं, जो प्रकृति की साक्षात कलाकृति हैं।</p>
              </div>
              <div className="overflow-hidden border border-[#2E261D] bg-[#161310] h-56 sm:h-64 shadow-xl rounded-sm">
                <img
                  src={narmadeshwarNaturalImg}
                  alt="प्राकृतिक तिलक युक्त बाणलिंगम"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-sm sm:text-base text-[#C7BFB4] leading-relaxed">
              <p>
                भारतीय सनातन संस्कृति में <strong className="text-white font-semibold">नर्मदेश्वर बाणलिंग</strong> को सर्वोच्च स्थान प्राप्त है। शिवपुराण में वर्णित है कि नर्मदा का प्रत्येक कंकर शंकर स्वरूप है। माँ नर्मदा के जल प्रवाह में वर्षों तक लुढ़कते हुए यह पाषाण प्राकृतिक रूप से अंडाकार व चिकना रूप लेते हैं।
              </p>
              <p>
                <strong className="text-white font-semibold">त्रिलोक शिवलिंग आर्ट</strong> में हम प्रत्येक शिवलिंग को पूर्ण श्रद्धा और शुचिता के साथ चुनते हैं। हम किसी भी प्रकार के कृत्रिम रंग या रसायन का प्रयोग नहीं करते, केवल माँ नर्मदा की प्राकृतिक महिमा को सुरक्षित पैकिंग में आपके घर तक पहुंचाते हैं।
              </p>
            </div>

            {/* 4 Story Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Waves className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">नर्मदा की पावन धरा</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  मध्य प्रदेश के खरगोन/बड़वाह स्थित ऐतिहासिक नर्मदा तट बकावां से सीधे संबद्ध।
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">श्रद्धा एवं शुचिता</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  पूर्ण पवित्रता से तैयार कर सुरक्षित सुरक्षा पैकिंग के साथ देश भर में वितरण।
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Landmark className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">हस्तनिर्मित जलाधारी</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  कुशल स्थानीय शिल्पकारों द्वारा उच्च गुणवत्ता वाले ब्लैक स्टोन व मार्बल की योनिपीठ।
                </p>
              </div>

              <div className="p-5 bg-[#161310] border border-[#2E261D] hover:border-[#D4AF37]/50 transition-colors space-y-1.5 shadow-md rounded-sm">
                <div className="flex items-center space-x-2 text-[#D4AF37]">
                  <Shield className="w-4 h-4" />
                  <span className="font-bold text-sm text-white">पारदर्शी मार्गदर्शन</span>
                </div>
                <p className="text-xs text-[#A89E90] leading-relaxed">
                  बिना किसी बिचौलिए के सही जानकारी, उचित मूल्य और वास्तविक वीडियो उपलब्ध।
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
