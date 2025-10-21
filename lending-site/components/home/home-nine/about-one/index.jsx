import Icon1 from "@/public/images/v9/icon4v9.png";
import Icon2 from "@/public/images/v9/icon5v9.png";
import Icon3 from "@/public/images/v9/icon6v9.png";
import Thumb from "@/public/images/v9/thumb2v9.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
function AboutOne() {
	return (
		<div className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="sofax-content-thumb-v9 box-shadow">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-70">
							<div className="tg-heading-subheading animation-style3">
								<h2>Send outstanding in just few clicks email</h2>
							</div>
							<p>
								Outstanding tasks or payments quickly and easily. Could be a feature of an email client,
								a CRM system, or another type of productivity software.
							</p>
						</div>
						<div className="extra-mt ml-70">
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon1} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Track campaign performance</h4>
									<p>
										Achieving Its objectives such as increasing brand awareness, generating leads,
										or driving sales.
									</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon2} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Convert teads and customers</h4>
									<p>
										Approach is needed, combining communication to value proposition and follow-up
										to tactics.
									</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon3} alt="Icon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Engage customers effectively</h4>
									<p>
										Create detailed profiles and to understand your customers' needs, challenges,
										and motivations.
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

export default AboutOne;
