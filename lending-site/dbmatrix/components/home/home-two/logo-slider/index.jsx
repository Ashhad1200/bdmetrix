"use client";
import Alterbone from "@/public/images/v2/1.png";
import Carbonia from "@/public/images/v2/2.png";
import Logoipsum from "@/public/images/v2/3.png";
import Tinygone from "@/public/images/v2/4.png";
import Waverio from "@/public/images/v2/5.png";
import Six from "@/public/images/v2/6.png";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		img: Waverio,
		title: "Tether",
	},
	{
		id: crypto.randomUUID(),
		img: Logoipsum,
		title: "Ethereum",
	},
	{
		id: crypto.randomUUID(),
		img: Alterbone,
		title: "Tron",
	},
	{
		id: crypto.randomUUID(),
		img: Carbonia,
		title: "Tezos",
	},
	{
		id: crypto.randomUUID(),
		img: Tinygone,
		title: "Algorand",
	},
	{
		id: crypto.randomUUID(),
		img: Waverio,
		title: "Tether",
	},
	{
		id: crypto.randomUUID(),
		img: Six,
		title: "Cardano",
	},
	{
		id: crypto.randomUUID(),
		img: Waverio,
		title: "Tether",
	},
	{
		id: crypto.randomUUID(),
		img: Logoipsum,
		title: "Ethereum",
	},
	{
		id: crypto.randomUUID(),
		img: Alterbone,
		title: "Tron",
	},
	{
		id: crypto.randomUUID(),
		img: Carbonia,
		title: "Tezos",
	},
	{
		id: crypto.randomUUID(),
		img: Tinygone,
		title: "Algorand",
	},
	{
		id: crypto.randomUUID(),
		img: Waverio,
		title: "Tether",
	},
	{
		id: crypto.randomUUID(),
		img: Six,
		title: "Cardano",
	},
];

const swiperSettings = {
	speed: 4000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 1,
	breakpoints: {
		640: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 5,
		},
	},
};

function LogoSlider() {
	return (
		<div className="section sofax-section-padding2 dark-bg">
			<div className="sofax-slider-logo-wrap">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="sofax-text-slider-wrap">
									<div className="sofax-text-slider-icon">
										<Image src={item.img} alt={item.title} />
									</div>

									<div className="sofax-text-slider-data light-color">
										<h3>{item.title}</h3>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default LogoSlider;
