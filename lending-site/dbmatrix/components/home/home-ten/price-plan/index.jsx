import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: 1,
		title: "Basic",
		price: 29,
		description: "Multiple websites share same server, Bluehost, HostGator, SiteGround.",
		features: ["AI tools", "10 Websites", "Chat support", "10 GB SSD storage", "Sell products online"],
	},
	{
		id: 2,
		title: "Choice Plus",
		price: 33,
		description: "A specific web hosting plan offered by Bluehost with a all websites.",
		features: ["AI tools", "50 Websites", "Chat/Phone support", "50 GB SSD storage", "Sell products online"],
	},
	{
		id: 3,
		title: "Online Store",
		price: 39,
		description: "Specialized to a web hosting plans tailored for e-commerce websites.",
		features: [
			"AI tools",
			"100 Websites",
			"Optimized for high traffic",
			"100 GB SSD storage",
			"Sell products online",
		],
	},
];
function PricePlan() {
	return (
		<section className="section sofax-section-padding" id="pricing">
			<div className="container">
				<div className="sofax-section-title center ">
					<div className="tg-heading-subheading animation-style3">
						<h2>Discover the right price plan for you</h2>
					</div>
				</div>
				<div className="row">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4">
							<PricingCard pricing={pricing} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
