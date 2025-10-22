import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: 1,
		title: "Web Design & Development",
		description:
			"Creating and maintaining websites to ensure an effective online presence for your brand digitally.",
	},
	{
		id: 2,
		title: "Digital Marketing",
		description:
			"Employing various online marketing strategies such as search engine optimization (SEO) on social media.",
	},
	{
		id: 3,
		title: "E-commerce Solutions",
		description:
			"Assisting with the development and management of online stores for businesses engaged in ecommerce.",
	},
	{
		id: 4,
		title: "Mobile App Development",
		description:
			"Creating mobile applications for businesses looking to expand their reach & enhance user engagement.",
	},
	{
		id: 5,
		title: "Search Engine Optimization",
		description:
			"Optimizing websites to improve their visibility and ranking on search engine results pages for traffic.",
	},
];
function Services() {
	return (
		<section className="section sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>We take care of all your digital needs in one place</h2>
					</div>
				</div>

				<div className="sofax-service-table-wrap">
					{servicesData.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
