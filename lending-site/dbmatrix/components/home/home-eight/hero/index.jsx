import Image1 from "@/public/images/v8/image1v8.png";
import Shape1 from "@/public/images/v8/shape1v8.png";
import Shape2 from "@/public/images/v8/shape2v8.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div className=" section sofax-section-padding4" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<HeroContent />
					</div>
					<div className="col-lg-5">
						<FadeInUp className="sofax-hero-thumb8 position-ralatiove">
							<Image src={Image1} alt="Thumb" />
							<div className="sofax-hero-shape-v8">
								<Image src={Shape1} alt="Shape" />
							</div>
							<div className="sofax-hero-shape2-v8">
								<Image src={Shape2} alt="Shape" />
							</div>
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
