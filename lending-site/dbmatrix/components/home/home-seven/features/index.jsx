import Icon1 from "@/public/images/v7/icon1v7.png";
import Icon2 from "@/public/images/v7/icon2v7.png";
import Icon3 from "@/public/images/v7/icon3v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

const featuresData = [
	{
		id: "feature1",
		icon: Icon1,
		title: "Collaboration & Workflow",
		description: "Measures to ensure data privacy and security, including encryption and access controls.",
	},
	{
		id: "feature2",
		icon: Icon2,
		title: "Data Processing",
		description: "Data preprocessing, such as handling missing values, normalization and data transformation.",
	},
	{
		id: "feature3",
		icon: Icon3,
		title: "Security & Compliance",
		description: "Measures to ensure data privacy and security, including encryption and access controls.",
	},
];
function Features() {
	return (
		<section className="sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Integrate AI support with 1 line of code</h2>
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
