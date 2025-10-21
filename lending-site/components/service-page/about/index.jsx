import Icon2 from "@/public/images/service/icon2.png";
import Icon3 from "@/public/images/service/icon3.png";
import Icon4 from "@/public/images/service/icon4.png";
import Thumb from "@/public/images/service/service-thumb.png";
import Shape1 from "@/public/images/service/shape1.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
function About() {
	return (
		<section className="sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-service-thumb">
							<Image src={Thumb} alt="Thumbs" />
						</FadeInRight>
						<div className="sofax-inner-service-shape">
							<Image src={Shape1} alt="content-shape" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50 tac">
							<h2>Strategy takes it the next business level</h2>
							<p>
								Experience unparalleled business progress with Sofax. Our expert team in leveraging
								cutting.Digital strategies to propel your brand forward.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon2} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Multiply global marketing business to strategy</h4>
										<p>
											Conducting thorough markets research and analysis understand local market
											dynamics consumer.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon3} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Outstanding social media marketing business</h4>
										<p>
											Produces high-quality relevant & engaging content tailored each social media
											platform & audience.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Customizable workflow</h4>
										<p>
											These workflows are typically designed to integrate seamlessly with other
											systems, applications
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
