import Icon from "@/public/images/v1/icon8.png";
import Image from "next/image";
import Link from "next/link";
function PricingCard({ pricing: { title, description, plan, price, features } }) {
	return (
		<div className="sofax-pricing-wrap pricing-wrapv10">
			<div className="sofax-pricing-header pricing-headerv10">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="sofax-pricing-price pricing-pricingv10">
				<h2>${price}</h2>
				<p
					className="dynamic-value"
					data-active="/Per Month"
					data-monthly="/Per Month"
					data-yearly="/Per Yearly"
				></p>
			</div>
			<div className="sofax-pricing-body pricing-bodyv10">
				<ul>
					{features.map((feature) => (
						<li key={feature}>
							<Image src={Icon} alt="Check Icon" />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-pricing-footer">
				<Link className="sofax-default-btn btn-hover d-block pill" href="/contact-us">
					Purchase now
				</Link>
			</div>
		</div>
	);
}

export default PricingCard;
