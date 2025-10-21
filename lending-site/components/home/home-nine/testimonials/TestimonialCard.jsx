import RatingFull from "@/public/images/v2/yellowstart.svg";
import Image from "next/image";

function TestimonialCard({ testimonial: { rating, content, author, designation, img } }) {
	return (
		<div className="sofax-t-slider-item">
			<div className="row">
				<div className="col-lg-5">
					<div className="testimonial-thumb">
						<Image src={img} alt="thumb" />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="sofax-testimonial-slider-content">
						<div className="sofax-testimonial-rating">
							<ul>
								{[...Array(rating)].map(() => (
									<li key={crypto.randomUUID()}>
										<Image src={RatingFull} alt="Rating" />
									</li>
								))}
							</ul>
						</div>
						<p> {content}</p>
						<div className="testimonial-author">
							<h4>{author}</h4>
							<p>{designation}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
