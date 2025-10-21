import Shape from "@/public/images/v1/shape4.png";
import Image from "next/image";
import Link from "next/link";
function Cta() {
	return (
		<section className="sofax-section-padding2 dark-bg light-color">
			<div className="container">
				<div className="sofax-cta-content fs-19">
					<div className="tg-heading-subheading animation-style3">
						<h2>Driving business growth with a new experience</h2>
					</div>
					<p>
						Start tracking your sales pipeline, manage leads, and automate your entire sales process in one
						place so you can easily focus on selling.
					</p>
					<div className="extra-mt wow fadeInUpX">
						<Link className="sofax-default-btn pill" data-text="Create a free account" href="/sign-up">
							<span className="button-wraper">Create a free account</span>
						</Link>
						<span className="cta-bottom">Full access. No credit card needed.</span>
					</div>
					<div className="sofax-cta-shape">
						<Image src={Shape} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
