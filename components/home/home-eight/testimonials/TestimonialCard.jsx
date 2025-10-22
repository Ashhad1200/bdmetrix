import Rating from "@/public/images/v8/yellow-ratting.png";
import Image from "next/image";

function TestimonialCard({
	testimonial: {
		image,
		review,
		rating,
		author: { name, title },
	},
}) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<Image src={image} alt="icons" />
			</div>
			<div className="sofax-iconbox-data testimonial-vr8">
				<p>{review}</p>
			</div>
			<div className="sofax-testimonial-authore-wrapv8">
				<div className="sofax-testimonial-authore-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
				<div className="sofax-testimonial-authore-icon">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<Image src={Rating} alt="Rating" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
