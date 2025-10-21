import Image from "next/image";

function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-features-boxv7">
			<div className="sofax-features-iconv7">
				<Image src={icon} alt="icon" />
			</div>
			<div className="sofax-features-contentv7 light-color">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
