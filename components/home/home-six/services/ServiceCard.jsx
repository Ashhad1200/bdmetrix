import Link from "next/link";
function ServiceCard({ service: { id, title, description } }) {
	return (
		<div className="sofax-service-table-item">
			<div className="sofax-service-table-title">
				<h3>{`${id}. ${title}`}</h3>
			</div>
			<div className="sofax-service-table-body">
				<p>{description}</p>
			</div>
			<div className="sofax-service-table-btn">
				<Link className="sofax-default-btn pill outline-btn" data-text="Deatails" href="/single-service">
					<span className="button-wraper">Deatails</span>
				</Link>
			</div>
		</div>
	);
}

export default ServiceCard;
