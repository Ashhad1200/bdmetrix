"use client";
import CirclePlayImg from "@/public/images/v4/circle-play.png";
import PlayIconImg from "@/public/images/v4/play-icon.svg";
import { useState } from "react";
import ModalVideo from "react-modal-video";
function HeroVideo() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="aximo-hero-video-section">
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>
			<button className="aximo-video-popup3 video-init" onClick={() => setOpen(true)}>
				<img className="aximo-video-circle" src={CirclePlayImg} alt="CirclePlayImg" />
				<img className="aximo-video-icon" src={PlayIconImg} alt="PlayIconImg" />
			</button>
		</div>
	);
}

export default HeroVideo;
