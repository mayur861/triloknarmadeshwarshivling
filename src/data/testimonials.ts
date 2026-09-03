import { Testimonial } from '../types';
import devoteeIndore from '../assets/images/devotee_indore_1788253660602.jpg';
import devoteePune from '../assets/images/devotee_pune_1788253675579.jpg';
import devoteeAmarkantak from '../assets/images/devotee_amarkantak_1788253692234.jpg';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-indore-1',
    name: 'Rajesh Sharma',
    avatar: devoteeIndore,
    location: 'Indore, MP',
    quote: 'Har Har Mahadev! We visited from Indore to select a Sacred Narmadeshwar Shivling for our newly built home mandir. The divine aura, natural markings, and pure authentic river stone quality are beyond compare. The artisan guided us with immense patience and reverence. Truly blessed to have this sacred deity at our home in Indore.',
    context: 'Enquiry & Blessing for Home Mandir Shivling Set',
    authorLabel: 'Devotee from Vijay Nagar, Indore',
    rating: 5,
    isSample: false,
  },
  {
    id: 'test-maha-2',
    name: 'Anand Kulkarni',
    avatar: devoteePune,
    location: 'Pune, Maharashtra',
    quote: 'The Sanctum Black Stone Set is truly beautiful and has an elegant, divine presence. The craftsmanship and finishing are excellent. The entire enquiry experience was smooth, packaging was extremely secure, and it arrived in pristine sacred condition.',
    context: 'Enquiry for Sanctum Black Stone Set',
    authorLabel: 'Devotee from Pune, Maharashtra',
    rating: 5,
    isSample: false,
  },
  {
    id: 'test-amarkantak-3',
    name: 'Pandit Vivek Joshi',
    avatar: devoteeAmarkantak,
    location: 'Amarkantak, MP',
    quote: 'The Natural Tilak Banalingam is truly beautiful and possesses a very divine appearance. The natural shape, smooth river polish, and authentic Swayambhu look make it a wonderful sacred choice. The enquiry experience was very respectful and prompt.',
    context: 'Enquiry for Natural Tilak Banalingam',
    authorLabel: 'Spiritual Seeker & Devotee, Amarkantak Region',
    rating: 5,
    isSample: false,
  },
];

