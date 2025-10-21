import Link from "next/link";

function ServiceCard({ service: { id, title, description } }) {
	return (
		<div className="sofax-service-wrapv9 ">
			<div className="sofax-service-numberv9">
				<h3>{id}. </h3>
			</div>
			<div className="sofax-service-textv9">
				<h3> {title}</h3>
				<p>{description}</p>
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
		</div>
	);
}

export default ServiceCard;
