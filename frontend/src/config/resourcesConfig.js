/**
 * Central Configuration for GROW India Resources, Brochure & Questionnaire Portal
 *
 * This configuration controls:
 * 1. The dedicated landing page URL encoded in the single QR code.
 * 2. The Brochure PDF source, availability flag, and pending fallback messaging.
 * 3. The Questionnaire route integration.
 * 4. QR Code asset paths for PNG, SVG, and print-ready card.
 */

import { contactDetails } from '../data/contact';

// Public production site base URL (can be customized via VITE_PUBLIC_SITE_URL)
const DEFAULT_PRODUCTION_BASE = 'https://growbusinesspartner.in';

export const resourcesConfig = {
  // Base website URL - prioritizes Vite environment variable if set
  baseUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_PUBLIC_SITE_URL) || DEFAULT_PRODUCTION_BASE,

  // Dedicated landing page path
  landingPagePath: '/resources',

  // Full canonical landing page URL (this is the single URL encoded inside the QR Code)
  get landingPageUrl() {
    return `${this.baseUrl.replace(/\/$/, '')}${this.landingPagePath}`;
  },

  // Existing Questionnaire route
  questionnairePath: '/questionnaire',

  // Brochure configuration
  brochure: {
    isAvailable: true,
    title: 'GROW India Corporate Brochures',
    subtitle: 'Institutional Profile, Governance Systems, SOP Architecture & Services Suite',
    description: 'Explore the two official GROW India corporate brochures: the Tri-Fold Corporate Brochure and the Executive Strategic Guide with QR diagnostic.',
    items: [
      {
        id: 'trifold',
        title: 'GROW India Tri-Fold Brochure',
        tagline: 'Official Corporate Profile & Services',
        image: '/brochures/GROW_India_TriFold_Brochure_Resized.png',
        downloadName: 'GROW_India_TriFold_Corporate_Brochure.png',
        description: 'Comprehensive corporate presentation covering the 7 practice divisions, institutional credentials, and organizational transformation models.'
      },
      {
        id: 'executive-qr',
        title: 'GROW Executive Brochure (QR Edition)',
        tagline: 'Strategic Diagnostic & Systems Guide',
        image: '/brochures/GROW_brochure_updated_working_QR.png',
        downloadName: 'GROW_Brochure_Strategic_Guide.png',
        description: 'Executive overview featuring diagnostic health check vectors, quick scan access, and advisory methodologies.'
      }
    ]
  },

  // Questionnaire card configuration
  questionnaire: {
    title: 'Free Corporate Health Check-Up',
    subtitle: 'GROW Free Audit Questionnaire • 2-Minute Diagnostic',
    description: 'Evaluate your organization across 12 strategic operating vectors including GRC, SOPs, Cash Controls, MIS, and KRAs. Receive an instant 2-page downloadable PDF certificate.',
    badge: '100% Free • Instant PDF'
  },

  // QR Code asset references (located in /public/qr/)
  qrCode: {
    pngPath: '/qr/grow-resources-qr.png',
    svgPath: '/qr/grow-resources-qr.svg',
    cardSvgPath: '/qr/grow-resources-qr-card.svg',
    cardPngPath: '/qr/grow-resources-qr-card.png',
    label: 'Scan to View Brochure & Questionnaire'
  },

  // Quick WhatsApp link helper
  getWhatsAppBrochureRequestUrl() {
    const phone = contactDetails.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(this.brochure.pendingNotice.whatsappPrompt);
    return `https://wa.me/${phone}?text=${text}`;
  }
};

export default resourcesConfig;
