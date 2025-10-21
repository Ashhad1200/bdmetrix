import Icon4 from "@/public/images/v4/icon4.png";
import Image from "next/image";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";
const pricingData = [
	{
		id: crypto.randomUUID(),
		plan: "Basic Plan",
		price: 19,
		features: ["12 Posts Per Month", "3 Social media accounts", "Monthly maintenance", "24/7 Customer Support"],
		active: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Enterprice Plan",
		price: 99,
		features: [
			"12 Posts Per Month",
			"6 Social media accounts",
			"Monthly maintenance",
			"Advanced ad targeting",
			"24/7 Customer Support",
		],
		active: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Professional Plan",
		price: 199,
		features: ["24 Posts Per Month", "10 Social media accounts", "Monthly maintenance", "24/7 Customer Support"],
		active: false,
	},
];
function PricingPlan() {
	return (
		<section className="section sofax-section-padding position-ralatiove bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<div className="tg-heading-subheading animation-style3">
						<h2>We provide simple pricing plans for you</h2>
					</div>
				</div>
				<div className="sofax-pricing-shapev4">
					<Image src={Icon4} alt="Icon" />
				</div>
				<div className="row">
					{pricingData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard item={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricingPlan;
