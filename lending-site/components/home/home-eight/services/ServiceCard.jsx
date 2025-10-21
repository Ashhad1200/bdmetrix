import Image from "next/image";
import Link from "next/link";

function ServiceCard({ service: { icon, title, description } }) {
	return (
		<div>
			<div className="sofax-features-iconv7">
				<Image src={icon} alt="icon" />
			</div>
			<div className="sofax-features-contentv7">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<Link href="/single-service">
				<div className="sofax-icon-btn  sofax-blog-icon-btn blog-versionv7 mt-30">
					Read More
					<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 1L19 8M19 8L12 15M19 8L1 8"
							stroke="#0E0E0E"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</Link>
		</div>
	);
}

export default ServiceCard;
