import Icon4 from "@/public/images/v3/Icon4.png";
import Thumb from "@/public/images/v3/thumb1.png";

import Image from "next/image";
import FadeInLeft from "../../../animation/FadeInLeft";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";

function AboutOne() {
	return (
		<div className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow">
							<Image src={Thumb} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn>
										Manage your entire business from one centralized platform{" "}
									</TextSplitFadeIn>
								</h2>
							</div>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="Icon 4" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Improved Collaboration</h4>
										<p>
											Enables real-time communication and collaboration among team members,
											irrespective of their physical location.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="Icon 4" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Efficient Task Management</h4>
										<p>
											Streamlines task assignment, tracking, and completion, ensuring everyone is
											on the same page regarding project timelines.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="Icon 4" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Project Transparency</h4>
										<p>
											Provides a centralized platform for project documentation, updates and
											timelines, promoting transparency across the agency.
										</p>
									</div>
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
