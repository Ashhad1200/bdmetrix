import Dashboard from "@/public/images/v1/dashboard.png";
import Shape1 from "@/public/images/v1/shape1.png";
import Shape2 from "@/public/images/v1/shape2.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
function HeroThumbs() {
	return (
		<FadeInUp className="sofax-hero-thumb1">
			<Image src={Dashboard} alt="Dashboard" />
			<div className="sofax-hero-shape">
				<Image src={Shape1} alt="shape" />
			</div>
			<div className="sofax-hero-shape2">
				<Image src={Shape2} alt="shape" />
			</div>
		</FadeInUp>
	);
}

export default HeroThumbs;
