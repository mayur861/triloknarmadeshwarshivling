export const BRAND_PHONE = '9575501337';
export const BRAND_PHONE_INTL = '+91 9575501337';
export const BRAND_PHONE_TEL = '+919575501337';
export const BRAND_WHATSAPP_NUM = '919575501337';
export const BRAND_EMAIL = 'mayurbirla907@gmail.com';

/**
 * Creates a formatted WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'नमस्ते त्रिलोक शिवलिंग आर्ट 🙏\nमुझे आपके पावन नर्मदेश्वर शिवलिंग संग्रह एवं पूजन सेट के बारे में जानकारी चाहिए। कृपया मार्गदर्शन करें।';
  const message = customMessage || defaultMsg;
  return `https://wa.me/${BRAND_WHATSAPP_NUM}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a product-specific WhatsApp enquiry URL with optional image link
 */
export function getProductWhatsAppUrl(productName: string, detailInfo?: string, imageUrl?: string): string {
  const extraText = detailInfo ? ` (${detailInfo})` : '';
  let fullImageUrl = '';
  if (imageUrl) {
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      fullImageUrl = imageUrl;
    } else if (typeof window !== 'undefined') {
      fullImageUrl = `${window.location.origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    }
  }

  const imageSection = fullImageUrl ? `\n\n📷 उत्पाद संदर्भ फोटो:\n${fullImageUrl}` : '';
  const message = `नमस्ते त्रिलोक शिवलिंग आर्ट 🙏\nमुझे यह शिवलिंग पसंद आया है: *${productName}*${extraText}.${imageSection}\n\nकृपया इसके बारे में अधिक विवरण, अतिरिक्त फोटो, उपलब्ध साइज व डिलीवरी प्रक्रिया बताएं।`;
  return `https://wa.me/${BRAND_WHATSAPP_NUM}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a telephone call URL
 */
export function getTelUrl(): string {
  return `tel:${BRAND_PHONE_TEL}`;
}

/**
 * Creates an email mailto URL
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const sub = subject || 'त्रिलोक शिवलिंग आर्ट - नर्मदेश्वर शिवलिंग हेतु पूछताछ';
  const b = body || 'नमस्ते त्रिलोक शिवलिंग आर्ट,\n\nमैं आपके नर्मदेश्वर शिवलिंग संग्रह के संबंध में जानकारी प्राप्त करना चाहता हूँ। कृपया विवरण साझा करें।\n\nसादर धन्यवाद।';
  return `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
}
