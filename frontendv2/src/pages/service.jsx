import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Sevice from '../components/service';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';

const index = () => {
    const breadcrumbItems = [
        { name: "Home", url: "http://bdmatrix.org/" },
        { name: "Services", url: "http://bdmatrix.org/service" }
    ];

    const serviceData = {
        type: "Software Development",
        description: "Custom software development services including CRM, ERP, POS Systems, SaaS Platforms, Mobile Apps, and AI Automation"
    };

    return (
        <Wrapper>
            <SEO pageTitle="Our Services" />
            <BreadcrumbSchema items={breadcrumbItems} />
            <ServiceSchema service={serviceData} />
            <Sevice />
        </Wrapper>
    );
};

export default index;