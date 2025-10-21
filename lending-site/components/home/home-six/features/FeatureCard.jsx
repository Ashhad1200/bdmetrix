import Image from "next/image";
import Link from "next/link";

function FeatureCard({ feature: { title, description, image } }) {
	return (
		<>
			<Link href="/contact-us">
				<div className="sofax-features-boxv6">
					<div className="sofax-features-imgv6">
						<Image src={image} alt="Thumb" />
					</div>
					<div className="sofax-features-author-data">
						<h4>{title}</h4>
						<p>{description}</p>
					</div>
				</div>
			</Link>
		</>
	);
}

export default FeatureCard;
