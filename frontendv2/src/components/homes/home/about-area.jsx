import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from "swiper";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AngleArrow from "@/src/svg/angle-arrow";

import about_img_1 from "@assets/img/about/icon-1.png";
import about_img_2 from "@assets/img/about/icon-2.png";
import about_img_3 from "@assets/img/about/icon-3.png";
import LineArrowTwo from '@/src/svg/line-arrow-2';
import shape_1 from "@assets/img/about/shape-1.png";
import about from "@assets/img/about/about-1.png";

const about_data = [
    {
        id: 1,
        img: about_img_1,
        title: "Restaurants",
        description: <>Complete digital solutions for restaurants <br /> including POS, online ordering, <br /> and customer management systems</>,
    },
    {
        id: 2,
        img: about_img_2,
        title: "Retail & E-Commerce",
        description: <>End-to-end retail solutions from <br /> inventory management to online <br /> stores and payment integration</>,
    },
    {
        id: 3,
        img: about_img_3,
        title: "Healthcare",
        description: <>Custom healthcare software for <br /> patient management, appointments, <br /> and medical record systems</>,
    },
    {
        id: 4,
        img: about_img_1,
        title: "Startups",
        description: <>MVP development, SaaS platforms, <br /> and scalable solutions to help <br /> startups launch and grow fast</>,
    },
    {
        id: 5,
        img: about_img_2,
        title: "Service Brands",
        description: <>CRM systems, booking platforms, <br /> and customer engagement tools <br /> for service-based businesses</>,
    },
    {
        id: 6,
        img: about_img_3,
        title: "Call Centers",
        description: <>Lead management, call tracking, <br /> and automation systems for <br /> high-volume sales teams</>,
    },
]

const setting = {
    slidesPerView: 3,
    spaceBetween: 82,
    navigation: {
        nextEl: ".about-button-next-1",
        prevEl: ".about-button-prev-1",
    },
    breakpoints: {
        '1860': {

        },
        '1800': {
            spaceBetween: 40,
        },
        '1701': {

        },
        '1600': {

        },
        '1560': {

        },
        '1400': {
            spaceBetween: 60,
        },
        '1200': {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        '992': {
            spaceBetween: 60,
            slidesPerView: 2,
        },
        '767': {
            slidesPerView: 2
        },
        '576': {
            slidesPerView: 2
        },
        '0': {
            slidesPerView: 1
        },
    },
}


const AboutArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])

    return (
        <>
            <section className="tp-about-area pb-45 box-plr p-relative">
                <div className="tp-about-shape d-none d-xl-block">
                    <Image className="shape-1" src={shape_1} alt="theme-pure" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
                                <Image src={about} alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-10">
                            <div className="tp-about-wrapper pl-50">

                                <div className="row">

                                    <div className="col-lg-8">
                                        <div className="tp-about-title-wrapper p-relative">
                                            <span className="tp-section-title__pre">
                                                Industries <span className="title-pre-color">We Serve</span>
                                                <AngleArrow />
                                            </span>
                                            <h3 className="tp-section-title">Digital Solutions For Every Industry
                                                <span className="title-left-shape">
                                                    <LineArrowTwo />
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="tp-about-nav d-none d-md-block p-relative">
                                            <button type="button" className="about-button-prev-1">
                                                <i className="fa-regular fa-arrow-left"></i>
                                            </button>
                                            <button type="button" className="about-button-next-1">
                                                <i className="fa-regular fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="tp-about-item-wrapper">
                                    <Swiper {...setting}
                                        modules={[Navigation]}
                                        loop={isLoop}
                                        className="about-active swiper-container"
                                    >
                                        {about_data.map((item, i) =>
                                            <SwiperSlide key={i} className="tp-about-item mb-30">
                                                <div className="tp-about-item-thumb">
                                                    <Image src={item.img} alt="theme-pure" />
                                                </div>
                                                <div className="tp-about-item-content">
                                                    <h4 className="about-title">{item.title}</h4>
                                                    <p>{item.description}</p>
                                                    <div className="tp-about-item-btn">
                                                        <Link href="/about">
                                                            <i className="fa-regular fa-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>

                                    <div className="tp-about-call">
                                        <a href="tel:+923001234567">
                                            <p><i className="fa-solid fa-phone"></i>
                                                Trusted by businesses in Pakistan & worldwide <span>+92 300 123 4567</span></p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;