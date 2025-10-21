import RatingFull from "@/public/images/v1/rattingful.svg";
import Image from "next/image";
function TestimonialCard({ testimonial: { rating, title, description, author, designation, img } }) {
	return (
		<div className="sofax-testimonial-content">
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
				<p>{description}</p>
			</div>
			<div className="sofax-testimonial-author">
				<div className="sofax-testimonial-author-thumb">
					<Image src={img} alt="author" />
				</div>
				<div className="sofax-testimonial-author-data">
					<h5>{author}</h5>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
