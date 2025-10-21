import Icon from "@/public/images/v3/Icon4.png";
import Thumb2Img from "@/public/images/v3/thumb2.png";
import Image from "next/image";
import FadeInLeft from "../../../animation/FadeInLeft";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function AboutTwo() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="sofax-content-thumb mr-80 box-shadow">
							<Image src={Thumb2Img} alt="Thumb2Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> Boost your team's easy collaboration </TextSplitFadeIn>{" "}
								</h2>
							</div>
							<p>
								Enhance your team's collaboration with our dynamic tools and features designed to boost
								communication, streamline workflows, and foster a culture of seamless teamwork.
							</p>
							<div className="sofax-list-icon-wrap">
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<Image src={Icon} alt="Icon" />
											Regular team meetings
										</li>
										<li>
											<Image src={Icon} alt="Icon" />
											Clear communication
										</li>
									</ul>
								</div>
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<Image src={Icon} alt="Icon" />
											Clear all project goals
										</li>
										<li>
											<Image src={Icon} alt="Icon" />
											Collaborative workspace
										</li>
									</ul>
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
