export type ProductCategory = 
  | 'all'
  | 'narmadeshwar'
  | 'home-temple'
  | 'special-collection';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  shortDesc: string;
  fullDesc: string;
  material: string;
  origin: string;
  spiritualSignificance: string;
  careInfo: string;
  images: string[];
  featured?: boolean;
  naturalMarkings?: string;
  recommendedFor?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  quote: string;
  context: string;
  authorLabel: string;
  rating?: number;
  isSample?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'shivling' | 'narmada' | 'mandir' | 'packaging';
  image: string;
  caption: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  productInterest: string;
  message: string;
  honeypot?: string;
}
