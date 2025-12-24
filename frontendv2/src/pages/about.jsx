import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import About from '../components/about';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';

const index = () => {
    const breadcrumbItems = [
        { name: "Home", url: "http://bdmatrix.org/" },
        { name: "About Us", url: "http://bdmatrix.org/about" }
    ];

    return (
        <Wrapper>
            <SEO pageTitle="About Us" />
            <BreadcrumbSchema items={breadcrumbItems} />
            <About />
        </Wrapper>
    );
};

export default index;