import Flag from "@/public/images/v7/flag.png";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function Integrations() {
	return (
		<section className="section integration-vertsion7 dark-bg">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 d-flex align-items-center">
						<div className="sofax-default-content tac light-color">
							<div className="tg-heading-subheading animation-style3">
								<h2>Across 40+ countries rely on our services</h2>
							</div>
							<p>
								Integrating with the countris that drive your business. Seamlessly connect with a your
								favorite or new to tools with a tailored recommendations.
							</p>
							<FadeInUp className="extra-mt">
								<Link
									className="sofax-default-btn pill"
									data-text="View all integrations"
									href="/contact-us"
								>
									<span className="button-wraper">View all integrations </span>
								</Link>
							</FadeInUp>
						</div>
					</div>
					<div className="col-lg-5">
						<FadeInRight className="integration-social-icon integrationv7">
							<Image src={Flag} alt="Flag" />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integrations;
