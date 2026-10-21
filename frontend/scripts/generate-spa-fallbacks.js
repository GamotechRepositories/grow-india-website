#!/usr/bin/env node

/**
 * GROW India - Static Route Fallback Generator
 *
 * For static hosts like Render, Vercel, and GitHub Pages:
 * Copies dist/index.html to physical route folders (e.g. dist/resources/index.html)
 * and dist/404.html so that direct URL access, QR scanning, and browser refresh
 * work 100% reliably even without server-side rewrite rules.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML = path.join(DIST_DIR, 'index.html');

// All frontend routes that might be visited directly
const STATIC_ROUTES = [
  'resources',
  'brochure',
  'questionnaire',
  'audit',
  'free-audit',
  'health-check',
  'business-audit',
  'about',
  'services',
  'contact',
  'reels',
  'videos',
  'corporate-consulting',
  'government-consulting',
  'industries',
  'methodology',
  'training',
  'partners',
  'clients',
  'clients-and-partners'
];

if (!fs.existsSync(INDEX_HTML)) {
  console.error(`Error: ${INDEX_HTML} not found. Run 'vite build' first.`);
  process.exit(1);
}

const indexHtmlContent = fs.readFileSync(INDEX_HTML, 'utf-8');

// 1. Create dist/404.html (standard fallback for static servers)
const fallback404 = path.join(DIST_DIR, '404.html');
fs.writeFileSync(fallback404, indexHtmlContent, 'utf-8');
console.log(` Created static fallback: dist/404.html`);

// 2. Create physical index.html in each route folder
for (const route of STATIC_ROUTES) {
  const routeDir = path.join(DIST_DIR, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  const routeIndex = path.join(routeDir, 'index.html');
  fs.writeFileSync(routeIndex, indexHtmlContent, 'utf-8');
}

console.log(` Created ${STATIC_ROUTES.length} static route fallbacks (including dist/resources/index.html)`);
