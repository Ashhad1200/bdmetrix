// IT Services Components (Home Eight Theme)
import AboutOne from "@/components/home/home-eight/about-one";
import AboutTwo from "@/components/home/home-eight/about-two/AboutTwo";
import Counter from "@/components/home/home-eight/counter";
import Features from "@/components/home/home-eight/features";
import Hero from "@/components/home/home-eight/hero";
import PricePlan from "@/components/home/home-eight/price-plan";
import Projects from "@/components/home/home-eight/projects";
import Services from "@/components/home/home-eight/services";
import Testimonials from "@/components/home/home-eight/testimonials";
import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";

export const metadata = {
  title: 'DBMatrix - IT Services & Solutions',
  description: 'Professional IT services and digital solutions',
};

function RootPage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutOne />
      <Counter />
      <Services />
      <AboutTwo />
      <PricePlan />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}

export default RootPage;
// Force rebuild at Wed Oct 22 14:52:34 PKT 2025
