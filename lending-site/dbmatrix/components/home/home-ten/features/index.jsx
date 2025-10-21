import icon1 from "@/public/images/v10/icon1v10.png";
import icon2 from "@/public/images/v10/icon2v10.png";
import icon3 from "@/public/images/v10/icon3v10.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "Remote Daily Backup",
		description:
			"Data ispreserved off-site, providing a safeguard against data loss due to local disasters, hardware failures.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Worldwide Cybersecurity",
		description:
			"Cybersecurity refers to global efforts, policies, practices and technologies aimed at protecting systems.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Scale to Success",
		description: "Revenue and long-term sustainability while maintaining quality & managing resources optimally.",
	},
];

function Features() {
	return (
		<section className="sofax-section-padding" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>These features your make hosting faster</h2>
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
