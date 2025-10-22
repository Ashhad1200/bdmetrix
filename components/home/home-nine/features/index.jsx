import icon1 from "@/public/images/v9/icon1v9.png";
import icon2 from "@/public/images/v9/icon2v9.png";
import icon3 from "@/public/images/v9/icon3v9.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "Email Templates",
		description:
			"Pre-designed templates that can be customized. Drag-&-drop editors for creating emails without coding.",
	},
	{
		id: 2,
		icon: icon2,
		title: "A/B Testing",
		description:
			"Testing different versions of emails (subject lines, content, images) to see which performs better.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Mobile Optimization",
		description:
			"Ensuring emails are responsives and look good on mobile devices. Mobile-friendly templates and previews.",
	},
];

function Features() {
	return (
		<section className="sofax-section-padding dark-bg" id="features">
			<div className="container">
				<div className="sofax-section-title light-color center max-width-large3">
					<div className="tg-heading-subheading animation-style3">
						<h2>Email revenue with our powerful features</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
