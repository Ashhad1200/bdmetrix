"use client";
import Thumb from "@/public/images/v5/herothumb.png";
import Icon6 from "@/public/images/v5/icon6.png";
import Icon7 from "@/public/images/v5/icon7.png";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import FadeInUp from "../../../animation/FadeInUp";
function HeroVideo() {
	const [isOpen, setOpen] = useState(false);
	return (
		<FadeInUp className="hero5-thumb">
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="zE_WFiHnSlY"
				onClose={() => setOpen(false)}
			/>
			<Image src={Thumb} alt="Thumb" />
			<div className="play-btn-wrap">
				<button className="sofax-popup-video2 video-init" onClick={() => setOpen(true)}>
					<Image src={Icon7} alt="icon" />
				</button>

				<Image className="play-btn-img" onClick={() => setOpen(true)} src={Icon6} alt="Icon" />
			</div>
		</FadeInUp>
	);
}

export default HeroVideo;
