import Icon1 from "@/public/images/v4/icon1.png";
import Icon2 from "@/public/images/v4/icon2.png";
import Icon3 from "@/public/images/v4/icon3.png";
import Thumb from "@/public/images/v4/servicethumb.png";
import Image from "next/image";
import FadeInLeft from "../../../animation/FadeInLeft";
function AboutTwo() {
	return (
		<div className="sofax-section-padding3">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="sofax-content-thumb-v4 mr-80">
							<Image src={Thumb} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Creating a positive new brand identity</h2>
							</div>
						</div>
						<div className="extra-mt">
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon1} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Analytics and Reporting</h4>
									<p>
										Utilizing social media analytics tools to track and measure the performance of
										campaigns, providing clients with data-driven.
									</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon2} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Trend Analysis</h4>
									<p>
										Staying updated on social media trends, algorithm changes, and emerging
										platforms to adapt strategies accordingly.
									</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon3} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Client Education</h4>
									<p>
										Educating clients on social media best practices, industry trends, & the
										evolving landscape, fostering a collaborative.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutTwo;
