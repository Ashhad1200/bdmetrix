import Shape10 from "@/public/images/v4/shape10.png";
import Shape9 from "@/public/images/v4/shape9.png";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
const serviceData = [
	{
		id: 1,
		title: "Customer Service & Support",
		description:
			"Fingerprint devices often to produce high-resolution images, improving accuracy of a matching process.",
	},
	{
		id: 2,
		title: "Training & Engagement",
		description:
			"Trains employees to deliver exceptional customer experiences and fosters a customer-centric culture.",
	},
	{
		id: 3,
		title: "Content Creation",
		description:
			"Trains employees to deliver exceptional customer experiences and fosters a customer-centric culture.",
	},
	{
		id: 4,
		title: "Analytics & Insights",
		description: "Utilizes data analytics to track and measure key performance related to customer experience.",
	},
	{
		id: 5,
		title: "Loyalty Programs",
		description: "Develops and manages customer loyalty programs to reward and retain customers.",
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
