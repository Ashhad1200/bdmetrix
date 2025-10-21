import Shape1 from "@/public/images/v5/shape1.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Shape3 from "@/public/images/v5/shape3.png";
import Image from "next/image";
import HeroButton from "./HeroButton";
import HeroVideo from "./HeroVideo";
function Hero() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-section-title max-width1200 position-ralatiove">
					<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
						We make your digital dreams come true
					</h1>
					<p>
						We are a specialized agency for businesses looking to increase their online presence and brand
						awareness who execute comprehensive social media strategies tailored to meet our client's unique
						goals and objectives.
					</p>
					<div className="sofax-hero5-shape1">
						<Image src={Shape1} alt="Shape1" />
					</div>

					<HeroButton />

					<div className="sofax-hero5-shape2">
						<Image src={Shape2} alt="Shape" />
					</div>
					<div className="sofax-hero5-shape3">
						<Image src={Shape3} alt="Shape3" />
					</div>
				</div>
			</div>
			<HeroVideo />
		</div>
	);
}

export default Hero;
