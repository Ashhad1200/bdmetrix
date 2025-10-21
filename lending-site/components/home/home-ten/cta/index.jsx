import Shape from "@/public/images/v10/shape1v10.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>See everything the web hosting on in one place</h2>
					</div>
					<p>
						Provide a comprehensive overview of web hosting, I'll break down thedifferent aspects and
						categories, including types of web hosting, key features, and popular providers.
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text="Get Started For - Free" href="/sign-up">
							<span className="button-wraper">Get Started For - Free</span>
						</Link>
						<span className="cta-bottom">Full access. No credit card needed.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<Image src={Shape} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
