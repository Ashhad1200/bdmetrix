import Image from "next/image";

function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-iconbox-wrap2 features-vr8">
			<div className="sofax-iconbox-icon2">
				<Image src={icon} alt="Icon" />
			</div>
			<div className="sofax-iconbox-data2">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
