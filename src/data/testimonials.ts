import { Testimonial } from '../types';
import devoteeIndore from '../assets/images/devotee_indore_1788253660602.jpg';
import devoteePune from '../assets/images/devotee_pune_1788253675579.jpg';
import devoteeAmarkantak from '../assets/images/devotee_amarkantak_1788253692234.jpg';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-indore-1',
    name: 'राजेश शर्मा',
    avatar: devoteeIndore,
    location: 'इंदौर, मध्य प्रदेश',
    quote: 'हर हर महादेव! हमने अपने नए घर के मंदिर के लिए त्रिलोक शिवलिंग आर्ट से नर्मदेश्वर शिवलिंग प्राप्त किया। प्राकृतिक तिलक और नर्मदा पाषाण की चमक अनुपम है। कारीगर जी ने बहुत विनम्रता से मार्गदर्शन किया। हमारे घर में शिवजी का साक्षात वास महसूस होता है।',
    context: 'गृह मंदिर हेतु संपूर्ण शिवलिंग सेट पूछताछ',
    authorLabel: 'विजय नगर, इंदौर से शिवभक्त',
    rating: 5,
    isSample: false,
  },
  {
    id: 'test-maha-2',
    name: 'आनंद कुलकर्णी',
    avatar: devoteePune,
    location: 'पुणे, महाराष्ट्र',
    quote: 'ब्लैक मार्बल जलाधारी और नर्मदेश्वर बाणलिंग का सेट अत्यंत मनमोहक है। नक्काशी और फिनिशिंग अद्भुत है। सुरक्षित लकड़ी और बबल पैकिंग में पुणे तक पूर्णतः सुरक्षित पहुंचा। WhatsApp पर बहुत तुरंत व आदरपूर्वक उत्तर मिला।',
    context: 'ब्लैक स्टोन जलाधारी सेट हेतु पूछताछ',
    authorLabel: 'पुणे, महाराष्ट्र से शिवभक्त',
    rating: 5,
    isSample: false,
  },
  {
    id: 'test-amarkantak-3',
    name: 'पं. विवेक जोशी',
    avatar: devoteeAmarkantak,
    location: 'अमरकंटक, मध्य प्रदेश',
    quote: 'नर्मदा का हर कंकर शंकर होता है, और बकावां के कारीगरों की यह कला अद्भुत है। प्राकृतिक स्वयंभू बाणलिंग पर प्राकृतिक त्रिपुंड रेखाएं दिव्य हैं। नित्य जलाभिषेक से मन को असीम शांति मिलती है। हर हर महादेव!',
    context: 'प्राकृतिक तिलक बाणलिंगम हेतु पूछताछ',
    authorLabel: 'अमरकंटक क्षेत्र से आध्यात्मिक साधक',
    rating: 5,
    isSample: false,
  },
];
