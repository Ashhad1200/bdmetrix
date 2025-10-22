import Icon from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v7/image2v7.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
function AboutThree() {
	return (
		<section className="section sofax-section-padding3 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInRight className="about-thumbv5  ml-50">
							<Image src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Manage your data and derive insights</h2>
							</div>
							<p>
								To manage data and derive insights, let's break down the process into a few key steps
								ensure data is in a structured format.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>24/7 customer support</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Real-time adjustments</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={Icon} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Chatbots & virtual assistants</h4>
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

export default AboutThree;
