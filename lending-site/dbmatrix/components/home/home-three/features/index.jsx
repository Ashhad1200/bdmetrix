import Icon1 from "@/public/images/v3/icon1.png";
import Icon2 from "@/public/images/v3/icon2.png";
import Icon3 from "@/public/images/v3/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Communication Tools",
		description: "Provides seamless communication & channels with a dedicated ares for a teams to the collaborate.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Analytics & Repoting",
		description:
			"Analyze data & generate meaningful insights from it as well as to present these to the in a clear.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Customizable Workflow",
		description:
			"Enabling organizations to streamline their operations & optimize cffciency by aligning tools & processes.",
	},
];

function Features() {
	return (
		<section className="sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width-medium">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn> Key team management features for success </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
