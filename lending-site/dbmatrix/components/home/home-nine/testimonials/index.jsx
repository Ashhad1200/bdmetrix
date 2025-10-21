"use client";
import Thumb2Img from "@/public/images/v2/t-thumb2.png";
import Thumb3Img from "@/public/images/v2/t-thumb3.png";
import Thumb1Img from "@/public/images/v2/textimonialthumb.png";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am really satisfied to with your services. It’s a breath of fresh air to work financial advisor that genuinely cares about their clients requirement situations and preferences. Highly recommend freelance crypto trader.",
		author: "Nicholas Morgan",
		designation: "Online Specialist",
		img: Thumb3Img,
	},
];

const swiperSettings = {
	slidesPerView: 1,
	navigation: true,
	modules: [Navigation],
};

function Testimonials() {
	return (
		<section className="section sofax-section-padding2 bg-light" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>Trusted by more than 100K+ people</h2>
					</div>
				</div>
				<div className="position-ralatiove">
					<div className="sofax-testimonial-2column-slider">
						{
							<Swiper {...swiperSettings}>
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
										<TestimonialCard testimonial={testimonial} />
									</SwiperSlide>
								))}
							</Swiper>
						}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
