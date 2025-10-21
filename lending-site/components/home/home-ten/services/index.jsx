import Icon1 from "@/public/images/v10/icon6v10.png";
import Icon2 from "@/public/images/v10/icon7v10.png";
import Icon3 from "@/public/images/v10/icon8v10.png";
import Icon4 from "@/public/images/v10/icon9v10.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "WordPress Hosting",
		description:
			"Can be either a shared managed hosting with features like one-click of WordPress installation automatic updates security.",
		icon: Icon1,
	},
	{
		id: crypto.randomUUID(),
		title: "Dedicated Hosting",
		description:
			"Provides maximum control, security, and performance. Suitable for large websites applications with high traffic & resource.",
		icon: Icon2,
	},
	{
		id: crypto.randomUUID(),
		title: "Managed Hosting",
		description:
			"A hosting service where the provider takes care of server management tasks like maintenance security updates.",
		icon: Icon3,
	},
	{
		id: crypto.randomUUID(),
		title: "Cloud Hosting",
		description:
			"Resources can be adjusted to based on demand, making it suitable for websites with variable or high traffic.",
		icon: Icon4,
	},
];
function Services() {
	return (
		<div className="section sofax-section-padding" id="service">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Find the perfect help offerings your business</h2>
					</div>
				</div>
				<div className="row">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
