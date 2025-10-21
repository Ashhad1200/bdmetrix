import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";

import Card1 from "@/public/images/v6/Card1v6.png";
import Card2 from "@/public/images/v6/Card2v6.png";
import Card3 from "@/public/images/v6/Card3v6.png";
const featuresData = [
	{
		id: crypto.randomUUID(),
		image: Card1,
		title: "Individual Target Tracker",
		description: "Targets their to team members, track their progress, provide feedback.",
	},
	{
		id: crypto.randomUUID(),
		image: Card2,
		title: "Meeting Scheduling",
		description: "All necessary participants can attend and that the meeting to occurs.",
	},
	{
		id: crypto.randomUUID(),
		image: Card3,
		title: "Revenue Share",
		description: "Provide that resources to services or intellectual property that contribute.",
	},
];
function Features() {
	return (
		<section className="sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Powerful features to help you sales faster</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger className="col-lg-4" index={index} key={feature.id}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
