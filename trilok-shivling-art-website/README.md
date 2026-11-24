# त्रिलोक शिवलिंग आर्ट (Trilok Shivling Art) - Website Package

यह फोल्डर त्रिलोक शिवलिंग आर्ट वेबसाइट का संपूर्ण और नवीनतम कोडबेस है।

## 📁 फोल्डर संरचना (Folder Structure):
- `src/` : सभी React 19 कंपोनेंट्स, पेज, डेटा, स्टाइल्स और लॉजिक
- `public/` : इमेजेस, रोबोट्स फाइल, साइटमैप एवं अन्य संपत्तियां
- `server.ts` : Express + Node.js बैकएंड सर्वर (Enquiry Email Routing, Rate Limiting, Health Check)
- `index.html` : मुख्य HTML प्रवेश बिंदु
- `vite.config.ts` : Vite 6 बिल्ड एवं देव कॉन्फ़िगरेशन
- `package.json` : सभी डिपेंडेंसी और स्क्रिप्ट्स
- `tsconfig.json` : TypeScript कॉन्फ़िगरेशन
- `.env.example` : आवश्यक पर्यावरण चर (Environment variables)

## 🚀 इस वेबसाइट को चलाने के निर्देश (How to Run Locally / on Server):

### 1. डिपेंडेंसी इंस्टॉल करें:
```bash
npm install
```

### 2. डेवलपमेंट सर्वर शुरू करें:
```bash
npm run dev
```
लोकल ब्राउज़र में `http://localhost:3000` खोलें।

### 3. प्रोडक्शन बिल्ड बनाएं:
```bash
npm run build
```

### 4. प्रोडक्शन में चलाएं:
```bash
npm start
```

## 🌐 किसी अन्य होस्टिंग या फोल्डर पर अपलोड करना:
- आप इस पूरे `trilok-shivling-art-website` फोल्डर को अपने GitHub, cPanel, VPS, Render, Vercel या Netlify पर सीधे अपलोड कर सकते हैं।
- साथ ही `trilok-shivling-art-website.zip` फाइल भी तैयार की गई है जिसे सीधे डाउनलोड या अपलोड किया जा सकता है।
