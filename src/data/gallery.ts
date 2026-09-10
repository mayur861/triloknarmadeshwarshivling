import { GalleryItem } from '../types';

import sacredTilakImg from '../assets/images/sacred_tilak_original_1788179007565.jpg';
import heroImg from '../assets/images/janeudhari.webp';
import narmadaRiverImg from '../assets/images/narmada_river_1788175952822.jpg';
import homeMandirImg from '../assets/images/home_mandir_shivling_1788175979627.jpg';
import specialPedestalImg from '../assets/images/special_pedestal_shivling_1788175998310.jpg';
import artisanPresentationImg from '../assets/images/artisan_presentation_1788176016370.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sanctum Black Stone Shivling',
    category: 'shivling',
    image: heroImg,
    caption: 'Devotional presentation of dark Narmadeshwar Shivling with handcrafted Jaladhari in sanctum lighting.',
  },
  {
    id: 'gal-2',
    title: 'Sacred Narmada River Waters',
    category: 'narmada',
    image: narmadaRiverImg,
    caption: 'The serene morning mist over the holy Narmada River where natural Banalingams are shaped over centuries.',
  },
  {
    id: 'gal-3',
    title: 'Natural Swayambhu Tilak Markings',
    category: 'shivling',
    image: sacredTilakImg,
    caption: 'Detailed close-up of natural golden-yellow and reddish tilak markings formed naturally by river current interactions.',
  },
  {
    id: 'gal-4',
    title: 'Home Mandir Serenity',
    category: 'mandir',
    image: homeMandirImg,
    caption: 'A compact Shivling gracefully installed within an Indian household mandir with oil lamp illumination.',
  },
  {
    id: 'gal-5',
    title: 'Special Collector Edition Pedestal',
    category: 'shivling',
    image: specialPedestalImg,
    caption: 'Rare large natural stone Shivling resting on an artisan hand-sculpted dark pedestal.',
  },
  {
    id: 'gal-6',
    title: 'Respectful Packaging & Presentation',
    category: 'packaging',
    image: artisanPresentationImg,
    caption: 'Every piece is packaged with utmost care, velvet cushioning, and devotional reverence for safe transit.',
  },
];
