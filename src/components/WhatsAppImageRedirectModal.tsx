import React, { useEffect, useRef, useState } from 'react';
import { Product } from '../types';
import { getProductWhatsAppUrl, BRAND_PHONE_INTL } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import { X, Download, ExternalLink, Check, Copy, Sparkles, Loader2 } from 'lucide-react';

interface WhatsAppImageRedirectModalProps {
  product: Product | null;
  onClose: () => void;
}

export const WhatsAppImageRedirectModal: React.FC<WhatsAppImageRedirectModalProps> = ({
  product,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!product) return;

    let isMounted = true;
    setIsGenerating(true);

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Load the product image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = product.images[0];

    img.onload = () => {
      if (!isMounted) return;

      // 1. Background Fill - Warm Dark Sanctum
      ctx.fillStyle = '#0C0A09';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Elegant Outer Border & Golden Trim
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 4;
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

      ctx.strokeStyle = '#2E261D';
      ctx.lineWidth = 1;
      ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

      // 3. Top Header - Brand Name & Devotional Emblem
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 22px serif';
      ctx.textAlign = 'center';
      ctx.fillText('ॐ  TRILOK SHIVLING ART  ॐ', canvas.width / 2, 70);

      ctx.fillStyle = '#A89E90';
      ctx.font = '13px sans-serif';
      ctx.fillText('BAKAWAN, MADHYA PRADESH • SACRED BANALINGAM COLLECTION', canvas.width / 2, 95);

      // Decorative divider
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 120, 115);
      ctx.lineTo(canvas.width / 2 + 120, 115);
      ctx.stroke();

      // 4. Product Image Container (Center Stage)
      const imgX = 60;
      const imgY = 140;
      const imgW = canvas.width - 120;
      const imgH = 500;

      // Draw subtle image backdrop
      ctx.fillStyle = '#161310';
      ctx.fillRect(imgX, imgY, imgW, imgH);

      // Aspect ratio fit
      const scale = Math.min(imgW / img.width, imgH / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const drawX = imgX + (imgW - drawW) / 2;
      const drawY = imgY + (imgH - drawH) / 2;

      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      // Image border
      ctx.strokeStyle = '#3A3024';
      ctx.lineWidth = 2;
      ctx.strokeRect(imgX, imgY, imgW, imgH);

      // Tag on image bottom left
      ctx.fillStyle = 'rgba(12, 10, 9, 0.85)';
      ctx.fillRect(imgX + 15, imgY + imgH - 45, 260, 30);
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1;
      ctx.strokeRect(imgX + 15, imgY + imgH - 45, 260, 30);
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('✓ AUTHENTIC RIVER NARMADA STONE', imgX + 25, imgY + imgH - 26);

      // 5. Product Information Section
      const infoY = 680;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 28px serif';
      ctx.textAlign = 'left';
      ctx.fillText(product.name, 60, infoY);

      // Price Tag
      ctx.fillStyle = '#D4AF37';
      ctx.font = 'bold 28px serif';
      ctx.textAlign = 'right';
      ctx.fillText(product.priceFormatted, canvas.width - 60, infoY);

      // Category & Origin
      ctx.fillStyle = '#A89E90';
      ctx.font = '15px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${product.categoryName} • Origin: ${product.origin}`, 60, infoY + 32);

      // Natural markings / Material
      ctx.fillStyle = '#EBE5DA';
      ctx.font = '14px sans-serif';
      const markText = product.naturalMarkings 
        ? `Natural Markings: ${product.naturalMarkings}` 
        : `Material: ${product.material}`;
      ctx.fillText(markText, 60, infoY + 62);

      // Divider line
      ctx.strokeStyle = '#261F18';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(60, infoY + 85);
      ctx.lineTo(canvas.width - 60, infoY + 85);
      ctx.stroke();

      // 6. WhatsApp Inquiry Footer Details
      ctx.fillStyle = '#161310';
      ctx.fillRect(60, infoY + 105, canvas.width - 120, 100);
      ctx.strokeStyle = '#25D366';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(60, infoY + 105, canvas.width - 120, 100);

      ctx.fillStyle = '#25D366';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('DIRECT WHATSAPP ENQUIRY', 85, infoY + 140);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(BRAND_PHONE_INTL, 85, infoY + 175);

      ctx.fillStyle = '#A89E90';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('Share this image directly on WhatsApp', canvas.width - 85, infoY + 145);
      ctx.fillText('for instant photo & size confirmation', canvas.width - 85, infoY + 168);

      // Bottom reference note
      ctx.fillStyle = '#7A7165';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Product ID: ${product.id} • Verified Sacred Narmada Banalingam`, canvas.width / 2, canvas.height - 35);

      const dataUrl = canvas.toDataURL('image/png');
      setGeneratedImageUrl(dataUrl);
      setIsGenerating(false);
    };

    img.onerror = () => {
      setIsGenerating(false);
    };

    return () => {
      isMounted = false;
    };
  }, [product]);

  if (!product) return null;

  const whatsappUrl = getProductWhatsAppUrl(
    product.name,
    product.priceFormatted,
    product.images[0]
  );

  const handleDownload = () => {
    if (!generatedImageUrl) return;
    const a = document.createElement('a');
    a.href = generatedImageUrl;
    a.download = `Trilok-Shivling-${product.id}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyText = () => {
    const text = `Namaste Trilok Shivling Art 🙏 I am interested in ${product.name} (${product.priceFormatted}). Please share high-res photos and dispatch details.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 bg-[#070605]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="whatsapp-image-modal-card"
        className="relative w-full max-w-2xl bg-[#161310] border border-[#2E261D] shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col rounded-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#261F18] bg-[#110E0C]">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 bg-[#132218] border border-[#25D366]/40 flex items-center justify-center rounded-sm text-[#25D366]">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                WhatsApp Enquiry Card
              </h3>
              <p className="text-[11px] text-[#A89E90]">
                Generated product card with reference photo & details
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A89E90] hover:text-white hover:bg-[#201A14] transition-colors cursor-pointer rounded-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-grow">
          
          {/* Status banner */}
          <div className="p-3 bg-[#132218] border border-[#25D366]/30 flex items-center justify-between gap-3 text-xs text-[#85e89d] rounded-sm">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>
                Enquiry image generated! You can open WhatsApp directly or save the card to share in chat.
              </span>
            </div>
          </div>

          {/* Generated Image Preview Card */}
          <div className="relative flex justify-center bg-[#0C0A09] p-4 border border-[#261F18] rounded-sm min-h-[280px] items-center">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3 text-[#D4AF37]">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-xs tracking-wider uppercase font-semibold text-[#A89E90]">
                  Generating sacred product enquiry image...
                </span>
              </div>
            ) : generatedImageUrl ? (
              <div className="max-w-md w-full shadow-2xl border border-[#3A3024] rounded-sm overflow-hidden">
                <img
                  src={generatedImageUrl}
                  alt={`Enquiry Card for ${product.name}`}
                  className="w-full h-auto object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="text-xs text-[#A89E90]">Image generation completed.</div>
            )}
          </div>

          {/* Product Summary */}
          <div className="flex items-center justify-between p-3.5 bg-[#110E0C] border border-[#261F18] rounded-sm text-xs">
            <div>
              <span className="font-serif font-bold text-white text-sm block">
                {product.name}
              </span>
              <span className="text-[#A89E90]">
                {product.categoryName} • Ref: {product.id}
              </span>
            </div>
            <div className="text-right">
              <span className="font-serif font-bold text-[#D4AF37] text-base block">
                {product.priceFormatted}
              </span>
              <span className="text-[10px] text-[#25D366] font-semibold">
                Direct WhatsApp Support
              </span>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-[#110E0C] border-t border-[#261F18] flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Download Image Button */}
            <button
              onClick={handleDownload}
              disabled={isGenerating || !generatedImageUrl}
              className="flex-1 sm:flex-initial px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#201A14] hover:bg-[#2E261D] border border-[#3A3024] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 rounded-sm"
              title="Save enquiry image to your device"
            >
              <Download className="w-4 h-4 text-[#D4AF37]" />
              <span>Save Image</span>
            </button>

            {/* Copy Text Button */}
            <button
              onClick={handleCopyText}
              className="px-3.5 py-3 text-xs font-bold uppercase tracking-wider text-[#A89E90] hover:text-white bg-[#201A14] hover:bg-[#2E261D] border border-[#3A3024] transition-all flex items-center justify-center space-x-1.5 cursor-pointer rounded-sm"
              title="Copy message text"
            >
              {copied ? <Check className="w-4 h-4 text-[#25D366]" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          {/* Primary CTA: Continue to WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#25D366]/25 rounded-sm active:scale-98"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Continue to WhatsApp Chat</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
          </a>

        </div>

      </div>
    </div>
  );
};
