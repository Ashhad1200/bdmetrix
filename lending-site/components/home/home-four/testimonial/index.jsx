import Icon5 from "@/public/images/v4/icon5.png";
import Thumb from "@/public/images/v4/testimonialthumb.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
function Testimonial() {
	return (
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInUp className="sofax-content-thumb-v4 ml-70 position-ralatiove ">
							<Image src={Thumb} alt="Thumb" />
							<div className="sofax-testimonial-shapev4">
								<Image src={Icon5} alt="Icon" />
							</div>
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content testimonial-content-v4 tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>The value of our work is proven by reviews</h2>
							</div>
							<p className="extra-mt">
								"The incredible knack for transforming ideas into visually stunning and engaging
								campaigns. Their creative approach brings a fresh and also innovative perspective to our
								brand."
							</p>
						</div>
						<div className="sofax-testimonial-author-data-v4">
							<h4>Joanly Wallace</h4>
							<p>Co-Founder</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
