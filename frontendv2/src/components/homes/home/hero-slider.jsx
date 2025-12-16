import Image from 'next/image';
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrow from "@/src/svg/line-arrow";
import Link from "next/link";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/src/modals/video-popup";
import React, { useState, useEffect } from "react";


import shape_1 from "@assets/img/hero/shape-1.png";
import shape_2 from "@assets/img/hero/shape-2.png";
import shape_3 from "@assets/img/hero/shape-3.png";
import shape_4 from "@assets/img/hero/shape-4.png";
import shape_5 from "@assets/img/hero/shape-7.png";
import service_shape from "@assets/img/hero/shape-5.png";
import service_quote from "@assets/img/hero/quot.png";

// slider setting 
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};
// slider data 
const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/hero/hero-2.jpg",
    sub_title_1: "Web Development • Custom ERPs • POS Systems • SaaS • Mobile Apps • AI Automation",
    sub_title_2: "",
    hero_title_1: "We Build Digital Systems",
    hero_title_2: "That Scale Businesses",
    hero_support: "BD Matrix is a US & UK–based digital solutions provider, now operating in Pakistan. We design, develop, and automate digital products that help businesses grow faster, smarter, and stronger.",
  },
  {
    id: 2,
    bg_img: "/assets/img/hero/hero-1.jpg",
    sub_title_1: "Web Development • Custom ERPs • POS Systems • SaaS • Mobile Apps • AI Automation",
    sub_title_2: "",
    hero_title_1: "Custom Software &",
    hero_title_2: "CRM Solutions",
    hero_support: "Tailor-made software solutions built to automate operations, reduce manual work, and scale with your business.",
  },
  {
    id: 3,
    bg_img: "/assets/img/hero/hero-3.jpg",
    sub_title_1: "Web Development • Custom ERPs • POS Systems • SaaS • Mobile Apps • AI Automation",
    sub_title_2: "",
    hero_title_1: "Powering Modern",
    hero_title_2: "Business Worldwide",
    hero_support: "From idea to launch — we help you build scalable SaaS platforms and digital infrastructure.",
  },
];
// shapes 
const shapes = [
  { id_cls: 1, img: shape_1 },
  { id_cls: 2, img: shape_2 },
  { id_cls: 3, img: shape_3 },
  { id_cls: 4, img: shape_4 },
  { id_cls: 7, img: shape_5 },
]

const HeroSlider = () => {
  const [isLoop, setIsLoop] = useState(false)
  useEffect(() => {
    setIsLoop(true)
  }, [])


  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="tp-hero-area tp-hero-space pb-95">
        <div className="tp-hero-wrapper p-relative">
          <div className="hero-active-1 swiper-container">
            <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade]}>
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-hero-inner-1">
                    <div className="container">
                      <div className="tp-hero-shape">
                        {shapes.map((shape, index) =>
                          <Image key={index}
                            className={`shape-${shape.id_cls}`}
                            src={shape.img} alt="theme-pure" />
                        )}
                      </div>
                      <div className="tp-hero-1">
                        <div className="tp-hero-bg tp-hero-overlay p-relative"
                          style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="tp-hero-content p-relative">
                              <div className="tp-hero-title-wrapper">
                                <span className="tp-section-title__pre p-relative">
                                  {item.sub_title_1}{" "}
                                  <span className="title-pre-color">
                                    {item.sub_title_2}
                                  </span>
                                  <AngleArrow />
                                </span>
                                <h3 className="tp-hero-title">
                                  {item.hero_title_1} <LineArrow />
                                  <span className="title-color">
                                    {item.hero_title_2}
                                  </span>{" "}
                                  <br />{" "}
                                  <span className="title-text-transparent">
                                    {item.hero_support}
                                  </span>
                                </h3>
                                <div className="tp-hero-btn">
                                  <Link className="tp-btn" href="/contact">
                                    Get a Free Consultation{" "}
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                  </Link>
                                  <Link className="tp-btn tp-btn-border ml-20" href="/portfolio">
                                    View Our Work
                                  </Link>
                                </div>
                              </div>
                              <div className="tp-hero-shape-animation">
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="tp-hero-play-btn">
                              <button className="popup-video" onClick={() => setIsVideoOpen(true)}>
                                <i className="fa-sharp fa-solid fa-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="tp-hero-nav d-none d-xxl-block">
            <button type="button"
              className="hero-button-prev-1 tp-btn-hover-clear alt-color">
              <i className="fa-regular fa-arrow-left"></i>
              <b></b>
            </button>
            <button
              type="button"
              className="hero-button-next-1 tp-btn-hover-clear alt-color"
            >
              <i className="fa-regular fa-arrow-right"></i>
              <b></b>
            </button>
          </div>

          <div className="tp-hero-bottom">
            <div className="tp-hero-experince">
              <span className="year"> 13
                <br /> <i className="experince">Years of Experince</i>
              </span>
            </div>
          </div>

          <div
            className="tp-hero-service"
            style={{ backgroundImage: `url(/assets/img/hero/shape-6.png)` }}
          >
            <div className="tp-hero-service-shape">
              <Image src={service_shape} alt="theme-pure" />
            </div>
            <p>
              BD Matrix is a digital solutions provider with over 7 years of <br />
              experience delivering high-quality software solutions worldwide.
            </p>
            <div className="tp-hero-service-quote">
              <Image src={service_quote} alt="theme-pure" />
            </div>
          </div>

        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroSlider;
