import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";

import Thumb4 from "@/public/images/v3/thumb4.png";
import Thumb5 from "@/public/images/v3/thumb5.png";
import Thumb6 from "@/public/images/v3/thumb6.png";
import FadeInUp from "../../../animation/FadeInUp";
import TestimonialCard from "./TestimonialCard";
const testimonialData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		review: "I am a would need more details to a provide relevant informatio business clients' reviews are feedback from in a individuals or companies.",
		author: {
			name: "Floyed Miltes",
			title: "Web Developer",
			image: Thumb4,
		},
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		review: "Great results enjoyable to the works with & most importanly enabled us to the presence on the website needed conduct business.",
		author: {
			name: "Darrell Steward",
			title: "Co-Founder",
			image: Thumb5,
		},
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		review: "It’s an all-in-one solution to that the has turbocharged the growth. The lead generation and capabilities. our partner & result spesk.",
		author: {
			name: "Piyanat Natakul",
			title: "Web Developer",
			image: Thumb6,
		},
	},
];
function Testimonials() {
	return (
		<section className="sofax-section-padding" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>We are the best from our client's point of view</h2>
					</div>
				</div>

				<div className="row">
					{testimonialData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-lg-4 col-md-6">
							<TestimonialCard testimonial={item} />
						</FadeInStagger>
					))}
				</div>

				<FadeInUp className="sofax-testimonial-btn">
					<Link className="sofax-default-btn pill" data-text="See More Client’s Stories" href="/contact-us">
						<span className="button-wraper">See More Client’s Stories</span>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Testimonials;
