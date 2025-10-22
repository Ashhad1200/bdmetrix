import ArrowRight from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
function FeatureCard({ feature: { icon, title, description } }) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<Image src={icon} alt="Icons" />
			</div>
			<div className="sofax-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
				<Link className="sofax-icon-btn" href="/single-service">
					Learn More <Image src={ArrowRight} alt="Arrow" />
				</Link>
			</div>
		</div>
	);
}

export default FeatureCard;
