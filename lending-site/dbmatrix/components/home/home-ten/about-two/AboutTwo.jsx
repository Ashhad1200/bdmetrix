import IconCheck from "@/public/images/v10/icon5v6.png";
import Thumb from "@/public/images/v10/thumb3v10.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
function AboutTwo() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-thumb-v10">
							<Image src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="tac">Reason for choosing our strike hosting</h2>
							</div>
							<p className="tac">
								choosing strike Hosting for your web hosting needs, you might consider the following
								reasons and benefits that make it a compelling choice.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>15+ Years experienced web hosting company</h4>
										<p>
											That has been in business for over 15 years proven has been track to a
											record of the reliabilitystability.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>24/7 Technical support</h4>
										<p>
											24/7 support teams typically staffed knowledgeable professionals handle a
											wide range technical issues.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Safe and suceured</h4>
										<p>
											The user’s browser protecting sensitive information like login to the
											credentials and payment details.
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

export default AboutTwo;
