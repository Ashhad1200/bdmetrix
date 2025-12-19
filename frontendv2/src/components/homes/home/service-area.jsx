import Link from 'next/link';
import Image from 'next/image'
import Count from '@/src/common/count';
import React, { useEffect, useRef, useState } from 'react';
import service_data from '@/src/data/service-data';

// svg icon
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import GreenRightArrow from '@/src/svg/green-right-arrow';

// fun fact shape
import fun_fact_shape_1 from "@assets/img/fun-fact/shape-1.png";
import fun_fact_shape_2 from "@assets/img/fun-fact/shape-2.png";
import fun_fact_shape_3 from "@assets/img/fun-fact/shape-3.png";
import fun_fact_shape_4 from "@assets/img/fun-fact/shape-4.png";
import fun_fact_shape_5 from "@assets/img/fun-fact/shadow.png";
import reload_img from "@assets/img/fun-fact/world.png";


const counter_content = [
   {
      id: 1,
      count: 500,
      info: "Projects Delivered",
      cls: "",
      cls_2: "purecounter",
      icon: "+",
   },
   {
      id: 2,
      count: 250,
      info: "Happy Clients",
      cls: "purecounter",
      cls_2: "",
      icon: "+",
   },
   {
      id: 3,
      count: 10,
      info: "Years Experience",
      cls: "purecounter",
      cls_2: "",
      icon: "+",
   },
]

const ServiceArea = () => {

   const splideRef = useRef(null);

   const [reloadClassName, setReloadClassName] = useState(null);
   useEffect(() => {
      const reload = document.getElementById('reload');
      setReloadClassName(reload);
   }, []);

   const scrollRotate = () => {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
   };

   useEffect(() => {
      if (reloadClassName !== null) {
         window.addEventListener('scroll', scrollRotate);
      }
      return () => {
         window.removeEventListener('scroll', scrollRotate);
      };
   }, [reloadClassName]);


   return (
      <>
         <div className="tp-service-funfact-box">

            {/* Modern Services Section */}
            <section className="bdm-section" style={{ background: '#FAFBFC' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="tp-service-title-wrapper text-center mb-60">
                           <span className="tp-section-title__pre">
                              Our <span className="title-pre-color">Core Services</span>
                              <AngleArrow />
                           </span>
                           <h2 className="tp-section-title">
                              Digital Solutions <i>Engineered</i> For Growth
                              <span className="title-center-shape">
                                 <LineArrowTwo />
                              </span>
                           </h2>
                           <p style={{ maxWidth: '700px', margin: '20px auto 0', fontSize: '1.125rem', color: 'var(--tp-text-body)' }}>
                              From CRM to ERP, POS to SaaS—we build custom software that drives measurable business outcomes.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="row g-4">
                     {service_data.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6">
                           <div className="bdm-card bdm-tilt" style={{
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              background: service.bg_color || 'white',
                              transition: 'all 0.3s ease',
                              borderLeft: `4px solid ${index % 2 === 0 ? 'var(--bdm-primary)' : 'var(--bdm-secondary)'}`
                           }}>
                              {/* Service Icon */}
                              <div style={{
                                 width: '80px',
                                 height: '80px',
                                 borderRadius: 'var(--bdm-radius-md)',
                                 background: 'white',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 marginBottom: '20px',
                                 padding: '12px',
                                 boxShadow: 'var(--bdm-shadow-md)'
                              }}>
                                 {service.icon && (
                                    <img
                                       src={service.icon}
                                       alt={service.title}
                                       style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                 )}
                              </div>

                              {/* Service Title */}
                              <h3 style={{
                                 fontSize: '1.5rem',
                                 fontWeight: '700',
                                 marginBottom: '8px',
                                 color: 'var(--tp-heading-primary)',
                                 fontFamily: 'var(--bdm-font-heading)'
                              }}>
                                 {service.title}
                              </h3>

                              {/* Subtitle */}
                              <div style={{
                                 fontSize: '0.875rem',
                                 color: 'var(--bdm-primary)',
                                 fontWeight: '600',
                                 marginBottom: '16px',
                                 textTransform: 'uppercase',
                                 letterSpacing: '0.5px'
                              }}>
                                 {service.subtitle}
                              </div>

                              {/* Description */}
                              <p style={{
                                 color: 'var(--tp-text-body)',
                                 marginBottom: '20px',
                                 lineHeight: '1.6',
                                 flexGrow: 1
                              }}>
                                 {service.description}
                              </p>

                              {/* Outcomes */}
                              {service.outcomes && service.outcomes.length > 0 && (
                                 <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                       fontSize: '0.875rem',
                                       fontWeight: '700',
                                       marginBottom: '12px',
                                       color: 'var(--tp-heading-primary)',
                                       textTransform: 'uppercase',
                                       letterSpacing: '0.5px'
                                    }}>
                                       Key Outcomes
                                    </h4>
                                    <ul style={{
                                       listStyle: 'none',
                                       padding: 0,
                                       margin: 0
                                    }}>
                                       {service.outcomes.slice(0, 2).map((outcome, idx) => (
                                          <li key={idx} style={{
                                             fontSize: '0.875rem',
                                             color: 'var(--tp-text-body)',
                                             marginBottom: '8px',
                                             display: 'flex',
                                             alignItems: 'flex-start',
                                             gap: '8px'
                                          }}>
                                             <span style={{ color: 'var(--bdm-secondary)', marginTop: '2px' }}>✓</span>
                                             <span>{outcome}</span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}

                              {/* CTA Button */}
                              <Link href={service.cta_link || '/contact'} className="bdm-btn bdm-btn-outline" style={{
                                 fontSize: '0.875rem',
                                 padding: '12px 24px',
                                 display: 'inline-block',
                                 textAlign: 'center'
                              }}>
                                 {service.cta_text || 'Learn More'}
                                 <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                              </Link>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* View All Services Button */}
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="text-center" style={{ marginTop: '60px' }}>
                           <Link className="bdm-btn bdm-btn-primary" href="/service">
                              View All Services
                              <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                           </Link>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

            {/* Fun Fact / Stats Section */}
            <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
               <div className="container container-1400">

                  <div className="tp-fun-fact-shape">
                     <Image className="shape-1" src={fun_fact_shape_1} alt="theme-pure" />
                     <Image className="shape-2" src={fun_fact_shape_2} alt="theme-pure" />
                     <Image className="shape-3" src={fun_fact_shape_3} alt="theme-pure" />
                     <Image className="shape-4" src={fun_fact_shape_4} alt="theme-pure" />
                     <Image className="shadow" src={fun_fact_shape_5} alt="theme-pure" />
                  </div>

                  <div className="row">
                     <div className="col-lg-2 col-md-4">
                        <div className="tp-fun-fact-wrapper-box">
                           {counter_content.map((item, i) =>
                              <div key={i} className="tp-fun-fact-wrapper">
                                 <h3 className={`counter-title ${item.cls}`}>
                                    <span data-purecounter-duration="4" className="purecounter">
                                       <Count number={item.count} text={item.icon} />
                                    </span></h3>
                                 <p>{item.info}</p>
                              </div>
                           )}
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-8">
                        <div className="tp-fun-fact-thumb p-relative">
                           <Image id="reload" src={reload_img} alt="scroll" />
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-12">
                        <div className="tp-fun-fact-content">
                           <div className="tp-fun-fact-title-wrapper">
                              <span className="tp-section-title__pre">
                                 Our <span className="title-pre-color">Development Process</span>
                                 <AngleArrow />
                              </span>
                              <h3 className="tp-section-title">Technology Powering Growth
                                 <span className="title-left-shape">
                                    <LineArrowTwo />
                                 </span>
                              </h3>
                              <p>
                                 We follow a proven 7-step development process to deliver <br /> quality digital solutions on time and within budget.
                              </p>
                              <ul>
                                 <li>
                                    <span> <GreenRightArrow /></span>
                                    Understand Your Business & Design Smart Solutions
                                 </li>
                                 <li>
                                    <span><GreenRightArrow /> </span>
                                    Develop Secure & Scalable Systems
                                 </li>
                                 <li>
                                    <span><GreenRightArrow /> </span>
                                    Test, Launch, Optimize & Grow With You
                                 </li>
                              </ul>
                              <div className="tp-fun-fact-btn">
                                 <Link className="tp-btn" href="/contact">Start Your Project</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

         </div>
      </>
   );
};

export default ServiceArea;