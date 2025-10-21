import Thumb from "@/public/images/v5/contentthumb.png";
import Icon from "@/public/images/v5/icon4.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
function AboutTwo() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="about-thumbv5">
							<Image src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac mr-50">
							<div className="tg-heading-subheading animation-style3">
								<h2>Digital strategies to boost your growth</h2>
							</div>
							<p>
								We're a one-stop digital agency, taking care of everything from custom web design with
								meticulous planning to tailored strategies that boost your reach, drive traffic, and
								foster engagement.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>We offer end-to-end digital solutions for brand value</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Our team combines creativity with strategic planning</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Our focus is on driving traffic, increasing engagement</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Experience prompt and dedicated customer support</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="sofax-content-shapev5">
							<Image src={Shape2} alt="shape" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTwo;
