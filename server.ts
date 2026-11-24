import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory rate limiting map for enquiry endpoint
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limitWindow = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 10;

  const current = rateLimitMap.get(ip);
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + limitWindow });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
}

// Health Check API
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    brand: 'Trilok Shivling Art',
    timestamp: new Date().toISOString(),
  });
});

// Download Complete Website Project Zip
app.get('/api/download-website-zip', (_req: Request, res: Response) => {
  const zipPath = path.join(process.cwd(), 'trilok-shivling-art-website.zip');
  res.download(zipPath, 'trilok-shivling-art-website.zip', (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ error: 'Zip download failed' });
    }
  });
});

// Production-ready Enquiry Submission API
app.post('/api/enquiry', async (req: Request, res: Response) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: 'कृपया कुछ मिनट प्रतीक्षा करें या सीधे व्हाट्सएप पर 9575501337 पर संपर्क करें।',
      });
    }

    const { name, phone, email, city, productInterest, message, honeypot } = req.body;

    // Honeypot spam detection
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from ${clientIp}`);
      return res.status(200).json({
        success: true,
        message: 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है।',
      });
    }

    // Input Validations
    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({ success: false, error: 'कृपया अपना पूरा नाम दर्ज करें (कम से कम 2 अक्षर)।' });
    }

    const phoneRegex = /^[0-9+ \-()]{7,16}$/;
    if (!phone || !phoneRegex.test(String(phone).trim())) {
      return res.status(400).json({ success: false, error: 'कृपया वैध मोबाइल अथवा व्हाट्सएप नंबर दर्ज करें।' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return res.status(400).json({ success: false, error: 'कृपया वैध ईमेल आईडी दर्ज करें।' });
    }

    const sanitizedData = {
      name: String(name).trim().slice(0, 100),
      phone: String(phone).trim().slice(0, 20),
      email: String(email).trim().toLowerCase().slice(0, 100),
      city: city ? String(city).trim().slice(0, 100) : 'Not specified',
      productInterest: productInterest ? String(productInterest).trim().slice(0, 150) : 'General Enquiry',
      message: message ? String(message).trim().slice(0, 1500) : 'No additional message provided',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ip: clientIp,
    };

    console.log('====================================================');
    console.log(`[NEW ENQUIRY - TRILOK SHIVLING ART]`);
    console.log(`From: ${sanitizedData.name} <${sanitizedData.email}>`);
    console.log(`Phone: ${sanitizedData.phone}`);
    console.log(`City: ${sanitizedData.city}`);
    console.log(`Product Interested: ${sanitizedData.productInterest}`);
    console.log(`Message: ${sanitizedData.message}`);
    console.log(`Time: ${sanitizedData.submittedAt} (IST)`);
    console.log('====================================================');

    // Attempt real email dispatch if SMTP configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || `Trilok Shivling Art <${smtpUser}>`,
        to: 'mayurbirla907@gmail.com',
        replyTo: sanitizedData.email,
        subject: `[New Website Enquiry] ${sanitizedData.productInterest} - from ${sanitizedData.name}`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0d0b0; border-radius: 8px; overflow: hidden; background: #faf8f5;">
            <div style="background: #14151a; color: #d4af37; padding: 24px; text-align: center; border-bottom: 2px solid #d4af37;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">TRILOK SHIVLING ART</h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; color: #e6e2dc;">New Spiritual Art & Shivling Enquiry</p>
            </div>
            <div style="padding: 24px; color: #2c2925;">
              <p style="font-size: 16px; margin-top: 0;"><strong>Enquirer Details:</strong></p>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; font-weight: bold; width: 35%;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #ebdcc5;">${sanitizedData.name}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; font-weight: bold;">Phone / WhatsApp:</td><td style="padding: 8px; border-bottom: 1px solid #ebdcc5;"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a> (<a href="https://wa.me/${sanitizedData.phone.replace(/[^0-9]/g, '')}">Open in WhatsApp</a>)</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ebdcc5;"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; font-weight: bold;">City / Region:</td><td style="padding: 8px; border-bottom: 1px solid #ebdcc5;">${sanitizedData.city}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; font-weight: bold;">Product Interested In:</td><td style="padding: 8px; border-bottom: 1px solid #ebdcc5; color: #9c6e09; font-weight: 600;">${sanitizedData.productInterest}</td></tr>
              </table>
              <p style="font-size: 15px; margin-bottom: 6px;"><strong>Customer Message:</strong></p>
              <div style="background: #ffffff; padding: 16px; border-left: 4px solid #d4af37; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #444;">
                ${sanitizedData.message.replace(/\n/g, '<br/>')}
              </div>
              <p style="font-size: 12px; color: #888; margin-top: 24px; text-align: center;">Submitted on: ${sanitizedData.submittedAt} (IST) via Trilok Shivling Art Web Showcase</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[EMAIL DISPATCHED] Successfully routed email to mayurbirla907@gmail.com`);
    }

    return res.status(200).json({
      success: true,
      message: 'धन्यवाद! आपकी पूछताछ प्राप्त हो गई है। हम शीघ्र ही आपसे संपर्क करेंगे।',
      enquiryId: `TSA-${Date.now().toString(36).toUpperCase()}`,
      data: {
        name: sanitizedData.name,
        productInterest: sanitizedData.productInterest,
      },
    });
  } catch (error) {
    console.error('Error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'पूछताछ संसाधित करने में समस्या आई। कृपया सीधे व्हाट्सएप पर 9575501337 पर संपर्क करें।',
    });
  }
});

// Vite middleware or static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Trilok Shivling Art server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
