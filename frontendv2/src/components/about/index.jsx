import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from '../homes/home/about-area';
import FeatureArea from '../homes/home/feature-area';
import SupportArea from './support-area';

import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';

import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Our Company" page_title="Our Company" />
        <AboutArea about={true} />
        <FeatureArea about={true} />
        <SupportArea />

        <TestimonialFeature />
        <TestimonialArea />
        <BrandArea />

        <BlogArea />
        <FooterContact />
      </main>
      <FooterThree />
    </>
  );
};

export default About;