/** @type {import('next').NextConfig} */

// i18n locale config — App Router uses app/lib/i18n.js + middleware pattern.
// Supported locales: en (default) | ar, ur (RTL-ready).
// Full route-based i18n (/[lang]/...) is Phase 3.3.
export const localeConfig = {
  locales: ['en'],
  defaultLocale: 'en',
  rtlLocales: ['ar', 'ur'],
};

const nextConfig = {};

export default nextConfig;
