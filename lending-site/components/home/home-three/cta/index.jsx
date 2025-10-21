import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";

function Cta() {
	return (
		<section className="sofax-section-padding2 accent-bg">
			<div className="container">
				<div className="sofax-section-title center max-width-large sofax-default-content pb-0">
					<div className="tg-heading-subheading animation-style3">
						<h2>See everything the team’s working on in one place</h2>
					</div>
					<p>
						It’s essential to choose the one that best fits your team’s needs and preferences. They all aim
						to provide a centralized hub for team collaboration and project management.
					</p>
					<FadeInUp className="extra-mt">
						<Link
							className="sofax-default-btn pill dark-btn"
							data-text="Get Started For - Free"
							href="/contact-us"
						>
							<span className="button-wraper">Get Started For - Free</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
		</section>
	);
}

export default Cta;
