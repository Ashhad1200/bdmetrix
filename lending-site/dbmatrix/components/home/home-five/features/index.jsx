import Icon1 from "@/public/images/v5/icon1.png";
import Icon2 from "@/public/images/v5/icon2.png";
import Icon3 from "@/public/images/v5/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Analytics and Data Analysis",
		description:
			"Monitoring and analysis of digital performance metrics to assess the effectiveness of online campaigns.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Branding and Design Services",
		description:
			"Development of brand identity, logo design, and other visual elements to establish a strong brand presence.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Security and Compliance",
		description:
			"Implementation of security measures and also compliance with industry standards to protect digital assets.",
	},
];
function Features() {
	return (
		<section className=" section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Features that can help you boost your progress</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} className="col-lg-4 col-md-12" index={index}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
