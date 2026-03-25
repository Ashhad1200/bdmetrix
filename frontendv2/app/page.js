'use client';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ClientLogos from './components/ClientLogos/ClientLogos';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTABanner />
      <Footer />
    </main>
  );
}
