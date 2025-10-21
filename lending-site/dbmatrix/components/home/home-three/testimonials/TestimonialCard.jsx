import RatingFull from "@/public/images/v3/starticon.svg";
import Image from "next/image";

function TestimonialCard({
	testimonial: {
		rating,
		review,
		author: { title, name, image },
	},
}) {
	return (
		<div className="sofax-testimonial-content-wrap">
			<div className="sofax-testimonial-rating">
				<ul>
					{[...Array(rating)].map(() => (
						<li key={crypto.randomUUID()}>
							<Image src={RatingFull} alt="Rating" />
						</li>
					))}
				</ul>
			</div>
			<div className="sofax-testimonial-data">
				<p>{review}</p>
			</div>
			<div className="sofax-testimonial-author">
				<div className="sofax-testimonial-author-thumb">
					<Image src={image} alt="thumb" />
				</div>
				<div className="sofax-testimonial-author-data">
					<h5>{name}</h5>
					<p>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
