import Link from "next/link";
function ServiceCard({ service: { id, title, description } }) {
	return (
		<div className="sofax-service-table-item">
			<div className="sofax-service-table-title sofax-service-table-titlev5">
				<h3>
					{id}. {title}
				</h3>
			</div>
			<div className="sofax-service-table-body sofax-service-table-bodyv5">
				<p>{description}</p>
			</div>
			<div className="sofax-service-table-btn sofax-service-table-btnv5">
				<Link className="sofax-default-btn pill outline-btn p15" href="/single-service">
					<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M5.861 2.21467C5.97102 0.95711 7.07967 0.0268449 8.33723 0.136868L27.6584 1.82725C28.9159 1.93727 29.8462 3.04591 29.7362 4.30348L28.0458 23.6246C27.9358 24.8822 26.8271 25.8124 25.5695 25.7024C24.312 25.5924 23.3817 24.4837 23.4917 23.2262L24.7012 9.40225L4.41495 26.4244C3.44792 27.2359 2.00619 27.1097 1.19476 26.1427C0.383325 25.1757 0.509462 23.7339 1.47649 22.9225L21.7627 5.90034L7.9388 4.6909C6.68124 4.58088 5.75098 3.47223 5.861 2.21467Z"
							fill="#0E0E0E"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
