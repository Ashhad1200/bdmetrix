import ServiceCard from "./ServiceCard";
const serviceData = [
	{
		id: 1,
		title: "HR & Recruitment",
		description: "Provides AI-powered tools for talent management, employee engagement, and workforce planning.",
	},
	{
		id: 2,
		title: "Operations & Supply",
		description:
			"AI-driven supply to chain a management solutions to enhance demand forecasting inventory optimization.",
	},
	{
		id: 3,
		title: "Finance & Accounting",
		description:
			"Uses AI to automate accounting tasks as invoicing & reconciliation simplifying financial management.",
	},
	{
		id: 4,
		title: "Product Development",
		description:
			"Platform for building, training and deploying machine learning models, supporting product development.",
	},
];
function Services() {
	return (
		<section className="section sofax-section-padding2 bg-light position-ralatiove" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>AI copy on the spot acros your faverate</h2>
					</div>
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
