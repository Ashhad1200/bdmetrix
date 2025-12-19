import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area";
import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import TestimonialArea from "./testimonial-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import BlogArea from "./blog-area";
import PortfolioShowcase from "./portfolio-showcase";
import ProcessSection from "./process-section";
import TechStackShowcase from "./tech-stack-showcase";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <AboutArea />
        <FeatureArea />
        <ServiceArea />
        <PortfolioShowcase />
        <ProcessSection />
        <TechStackShowcase />
        <BrandArea />
        <SupportArea />
        <TestimonialArea />
        <SliderArea />
        <FaqArea />
        <BlogArea />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
