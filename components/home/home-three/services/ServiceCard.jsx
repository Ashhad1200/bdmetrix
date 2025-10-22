import Image from "next/image";

function ServiceCard({ service: { title, description, icon } }) {
	return (
		<div className="sofax-service-iconbox-wrap">
			<div className="sofax-service-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className="sofax-service-iconbox-icon">
				<Image src={icon} alt="icon" />
			</div>
		</div>
	);
}

export default ServiceCard;
