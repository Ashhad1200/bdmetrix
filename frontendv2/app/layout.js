'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Suspense } from 'react';
import PixelEvents from '../src/components/PixelEvents';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800']
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>BD Matrix - Custom Software Development & IT Solutions</title>
        <meta name="description" content="BD Matrix delivers custom software solutions including CRM, ERP, POS Systems, SaaS Platforms, Mobile Apps, and AI Automation. Based in Canada and UK, now in Karachi, Pakistan." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.variable}>
        <Suspense fallback={null}>
          <PixelEvents />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
