import Shape10 from "@/public/images/v4/shape10.png";
import Shape9 from "@/public/images/v4/shape9.png";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
const serviceData = [
	{
		id: 1,
		title: "Social Media Strategy",
		description:
			"Crafting a customized social media strategy aligned with the client's business objectives, target users.",
	},
	{
		id: 2,
		title: "Audience Engagement",
		description: "Strategies to engage the audience actively include commenting, responding to messages.",
	},
	{
		id: 3,
		title: "Content Creation",
		description:
			"Developing engaging & shareable content, including text, images, videos, and other multimedia etc.",
	},
	{
		id: 4,
		title: "Community Building",
		description: "Building and nurturing an online community around the brand, fostering positive interactions.",
	},
];
function Services() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>We offer top-notch marketing services</h2>
					</div>
				</div>
				<div className="sofax-content-shape1">
					<Image src={Shape9} alt="shape" />
				</div>
				<div className="sofax-content-shape2">
					<Image src={Shape10} alt="shape" />
				</div>
				<div className="sofax-service-table-wrap">
					{serviceData.map((service, index) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
