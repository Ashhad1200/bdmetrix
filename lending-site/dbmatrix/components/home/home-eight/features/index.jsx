import icon1 from "@/public/images/v8/icon3v8.png";
import icon2 from "@/public/images/v8/icon4v8.png";
import icon3 from "@/public/images/v8/icon5v8.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: icon1,
		title: "IT Management",
		description: "Processes to the ensure IT supports business goals.",
	},
	{
		id: 2,
		icon: icon2,
		title: "Cloud Services",
		description: "Providers and infrastructure maintenance and updates.",
	},
	{
		id: 3,
		icon: icon3,
		title: "Data Security",
		description: "Data and ensure compliance with regulatory standards.",
	},
];

function Features() {
	return (
		<section className="sofax-features-section-v8">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
