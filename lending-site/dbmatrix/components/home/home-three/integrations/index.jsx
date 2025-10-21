"use client";
import Img1 from "@/public/images/v3/1.png";
import Img10 from "@/public/images/v3/10.png";
import Img11 from "@/public/images/v3/11.png";
import Img12 from "@/public/images/v3/12.png";
import Img2 from "@/public/images/v3/2.png";
import Img3 from "@/public/images/v3/3.png";
import Img4 from "@/public/images/v3/4.png";
import Img5 from "@/public/images/v3/5.png";
import Img6 from "@/public/images/v3/6.png";
import Img7 from "@/public/images/v3/7.png";
import Img8 from "@/public/images/v3/8.png";
import Img9 from "@/public/images/v3/9.png";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const sliderDataOne = [
	{
		id: crypto.randomUUID(),
		img: Img1,
	},
	{
		id: crypto.randomUUID(),
		img: Img2,
	},
	{
		id: crypto.randomUUID(),
		img: Img3,
	},
	{
		id: crypto.randomUUID(),
		img: Img4,
	},
	{
		id: crypto.randomUUID(),
		img: Img5,
	},
	{
		id: crypto.randomUUID(),
		img: Img6,
	},
	{
		id: crypto.randomUUID(),
		img: Img1,
	},
	{
		id: crypto.randomUUID(),
		img: Img2,
	},
	{
		id: crypto.randomUUID(),
		img: Img3,
	},
];
const sliderDataTwo = [
	{
		id: crypto.randomUUID(),
		img: Img7,
	},
	{
		id: crypto.randomUUID(),
		img: Img8,
	},
	{
		id: crypto.randomUUID(),
		img: Img9,
	},
	{
		id: crypto.randomUUID(),
		img: Img10,
	},
	{
		id: crypto.randomUUID(),
		img: Img11,
	},
	{
		id: crypto.randomUUID(),
		img: Img12,
	},
	{
		id: crypto.randomUUID(),
		img: Img7,
	},
	{
		id: crypto.randomUUID(),
		img: Img8,
	},
	{
		id: crypto.randomUUID(),
		img: Img9,
	},
];

const swiperSettingsOne = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	spaceBetween: 30,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1536: {
			slidesPerView: 6,
		},
	},
	className: "sofax-integration-slider-icon-data",
};
const swiperSettingsTwo = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	spaceBetween: 30,

	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1536: {
			slidesPerView: 6,
		},
	},
	className: "sofax-integration-slider-icon-data-wrap",
};

function Integrations() {
	return (
		<section className="sofax-section-padding bg-light" id="integration">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-6">
							<div className="tg-heading-subheading animation-style3">
								<h2>Integrate it with your favorite tools</h2>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-end">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link
									className="sofax-default-btn pill"
									data-text="Explore All Integrations"
									href="/contact-us"
								>
									<span className="button-wraper">Explore All Integrations</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{
					<Swiper {...swiperSettingsOne}>
						{sliderDataOne.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-integration-slider-icon">
									<Image src={item.img} alt="Brand Logo" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
				{
					<Swiper {...swiperSettingsTwo}>
						{sliderDataTwo.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-integration-slider-icon">
									<Image src={item.img} alt="Brand Logo" />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</section>
	);
}

export default Integrations;
