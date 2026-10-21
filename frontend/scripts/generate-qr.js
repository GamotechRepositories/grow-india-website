#!/usr/bin/env node

/**
 * GROW India - Single QR Code Generator for Brochure & Questionnaire
 *
 * Encodes the production landing page URL (/resources) into high-resolution PNG and
 * print-ready SVG vector formats with High error correction (Level H).
 *
 * Usage:
 *   node scripts/generate-qr.js
 *   node scripts/generate-qr.js --url=https://your-custom-domain.com/resources
 *   LANDING_PAGE_URL=https://custom-domain.com/resources node scripts/generate-qr.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target output directory: frontend/public/qr/
const OUTPUT_DIR = path.resolve(__dirname, '../public/qr');

// Default production URL for the landing page
const DEFAULT_URL = 'https://growbusinesspartner.in/resources';

// Parse command-line args for --url=...
function getTargetUrl() {
  const argUrl = process.argv.find((arg) => arg.startsWith('--url='));
  if (argUrl) {
    return argUrl.replace('--url=', '').trim();
  }
  if (process.env.LANDING_PAGE_URL) {
    return process.env.LANDING_PAGE_URL.trim();
  }
  if (process.env.VITE_PUBLIC_SITE_URL) {
    const base = process.env.VITE_PUBLIC_SITE_URL.replace(/\/$/, '');
    return `${base}/resources`;
  }
  return DEFAULT_URL;
}

async function generateQRCodes() {
  const targetUrl = getTargetUrl();

  console.log('='.repeat(70));
  console.log('  GROW INDIA - QR CODE ASSET GENERATOR');
  console.log('='.repeat(70));
  console.log(` Target Destination URL: ${targetUrl}`);
  console.log(` Error Correction Level : Level H (30% redundancy)`);
  console.log(` Quiet Zone (Margin)    : 4 modules (Full white border)`);
  console.log(` Output Directory       : ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 1. Generate High-Resolution PNG (1200x1200 px for digital sharing & display)
  const pngPath = path.join(OUTPUT_DIR, 'grow-resources-qr.png');
  await QRCode.toFile(pngPath, targetUrl, {
    type: 'png',
    width: 1200,
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#000000', // high contrast black
      light: '#FFFFFF' // pure white quiet zone
    }
  });
  const pngStats = fs.statSync(pngPath);
  console.log(` [1/3] High-Res PNG Generated:`);
  console.log(`       File: ${pngPath}`);
  console.log(`       Size: ${(pngStats.size / 1024).toFixed(2)} KB (1200 x 1200 px)`);

  // 2. Generate Scalable Vector SVG (Infinite scalability for commercial print)
  const svgPath = path.join(OUTPUT_DIR, 'grow-resources-qr.svg');
  const svgContent = await QRCode.toString(targetUrl, {
    type: 'svg',
    margin: 4,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  });
  fs.writeFileSync(svgPath, svgContent, 'utf-8');
  const svgStats = fs.statSync(svgPath);
  console.log(`\n [2/3] Print-Ready SVG Vector Generated:`);
  console.log(`       File: ${svgPath}`);
  console.log(`       Size: ${(svgStats.size / 1024).toFixed(2)} KB`);

  // 3. Generate Complete Branded Printable Artwork Card (SVG)
  // Contains official branding, QR Code, and "Scan to View Brochure & Questionnaire" label
  const cardSvgPath = path.join(OUTPUT_DIR, 'grow-resources-qr-card.svg');
  
  // Extract raw path/rect elements from the generated QR svg to embed seamlessly
  const qrInnerSvg = await QRCode.toString(targetUrl, {
    type: 'svg',
    margin: 2,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#070D1E', // corporate deep navy pattern
      light: '#FFFFFF'
    }
  });

  // Extract viewBox or dimension from inner SVG to scale cleanly
  const viewBoxMatch = qrInnerSvg.match(/viewBox="([^"]+)"/);
  const innerViewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

  const cardSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1100" width="800" height="1100">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="navyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#070D1E"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Clean Print Canvas -->
  <rect width="800" height="1100" fill="#F8FAFC"/>

  <!-- Main Card Container -->
  <rect x="40" y="40" width="720" height="1020" rx="24" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2" filter="url(#shadow)"/>

  <!-- Top Decorative Header Strip -->
  <path d="M 40 64 Q 40 40 64 40 L 736 40 Q 760 40 760 64 L 760 180 L 40 180 Z" fill="url(#navyGrad)"/>
  <rect x="40" y="176" width="720" height="4" fill="url(#goldGrad)"/>

  <!-- Brand Typography Header -->
  <text x="400" y="90" font-family="'Outfit', -apple-system, sans-serif" font-size="12" font-weight="700" fill="#FBBF24" text-anchor="middle" letter-spacing="3">OFFICIAL CLIENT RESOURCE PORTAL</text>
  <text x="400" y="125" font-family="'Outfit', -apple-system, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">GOVIND RAADHAA ORGANIZATIONAL WONDERS</text>
  <text x="400" y="152" font-family="'Outfit', -apple-system, sans-serif" font-size="12" font-weight="600" fill="#94A3B8" text-anchor="middle" letter-spacing="2">BUSINESS GROWTH AND SYSTEMS PARTNER INDIA</text>

  <!-- Gold Pill Tagline -->
  <rect x="220" y="210" width="360" height="34" rx="17" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="400" y="233" font-family="'Outfit', -apple-system, sans-serif" font-size="12" font-weight="800" fill="#92400E" text-anchor="middle" letter-spacing="1.5">GRC • SOPs • TRANSFORMATION • SYSTEMS</text>

  <!-- Main White Frame for QR with Quiet Zone -->
  <rect x="150" y="270" width="500" height="500" rx="24" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>

  <!-- Embedded Scaled QR Code -->
  <g transform="translate(180, 300)">
    <svg width="440" height="440" viewBox="${innerViewBox}">
      ${qrInnerSvg.replace(/<\/?svg[^>]*>/g, '')}
    </svg>
  </g>

  <!-- Clear Primary Call-To-Action Label -->
  <text x="400" y="820" font-family="'Outfit', -apple-system, sans-serif" font-size="24" font-weight="900" fill="#070D1E" text-anchor="middle" letter-spacing="0.5">SCAN TO VIEW BROCHURE &amp; QUESTIONNAIRE</text>
  <text x="400" y="852" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500" fill="#475569" text-anchor="middle">Access Corporate Brochure &amp; Free 2-Minute Health Check-Up Audit</text>

  <!-- Destination URL Display Badge -->
  <rect x="180" y="880" width="440" height="40" rx="10" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
  <text x="400" y="905" font-family="monospace" font-size="13" font-weight="600" fill="#0F172A" text-anchor="middle">${targetUrl}</text>

  <!-- Institutional Credentials & Verification Footer -->
  <line x1="80" y1="960" x2="720" y2="960" stroke="#E2E8F0" stroke-width="1.5"/>
  <text x="400" y="995" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="1">UDYAM REGISTRATION: UDYAM-MH-20-0338117</text>
  <text x="400" y="1020" font-family="-apple-system, sans-serif" font-size="11" font-weight="500" fill="#94A3B8" text-anchor="middle">Serving Enterprises Across India • Email: contact@growbusinesspartner.in</text>
</svg>`;

  fs.writeFileSync(cardSvgPath, cardSvg, 'utf-8');
  const cardStats = fs.statSync(cardSvgPath);
  console.log(`\n [3/3] Branded Printable Artwork Card Generated:`);
  console.log(`       File: ${cardSvgPath}`);
  console.log(`       Size: ${(cardStats.size / 1024).toFixed(2)} KB`);

  console.log('\n' + '='.repeat(70));
  console.log('  QR GENERATION COMPLETE');
  console.log('='.repeat(70));
  console.log('  The generated files are saved in `frontend/public/qr/`:');
  console.log('  1. grow-resources-qr.png      -> Digital sharing, messaging, web display');
  console.log('  2. grow-resources-qr.svg      -> Print-ready vector QR symbol');
  console.log('  3. grow-resources-qr-card.svg -> Complete ready-to-print branded artwork card\n');
}

generateQRCodes().catch((err) => {
  console.error('Error generating QR codes:', err);
  process.exit(1);
});
