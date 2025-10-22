import Thumb from "@/public/images/v10/thumb1v10.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
import HeroContent from "./HeroContent";

function Hero() {
	return (
		<div className=" section sofax-section-padding4 position-ralatiove" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<HeroContent />
					</div>
					<div className="col-lg-5">
						<FadeInUp className="hero-thumbv10">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
