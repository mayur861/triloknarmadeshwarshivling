export const BRAND_PHONE = '6263540349';
export const BRAND_PHONE_INTL = '+91 6263540349';
export const BRAND_PHONE_TEL = '+916263540349';
export const BRAND_WHATSAPP_NUM = '916263540349';
export const BRAND_EMAIL = 'mayurbirla907@gmail.com';

/**
 * Creates a formatted WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Namaste Trilok Shivling Art 🙏\nI would like to know more about your sacred Shivling collection and product details.';
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

  const imageSection = fullImageUrl ? `\n\n📷 Product Reference Image:\n${fullImageUrl}` : '';
  const message = `Namaste Trilok Shivling Art 🙏\nI am interested in: *${productName}*${extraText}.${imageSection}\n\nPlease share more high-resolution photos, available sizes, and dispatch details for this piece.`;
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
  const sub = subject || 'Enquiry regarding Shivling Collection - Trilok Shivling Art';
  const b = body || 'Hello Trilok Shivling Art team,\n\nI am interested in your Shivling collection. Please provide more details.\n\nThank you.';
  return `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
}
