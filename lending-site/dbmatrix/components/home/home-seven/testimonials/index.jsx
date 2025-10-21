import image1 from "@/public/images/v7/image3v7.png";
import image2 from "@/public/images/v7/image4v7.png";
import image3 from "@/public/images/v7/image5v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
	{
		id: 1,
		image: image1,
		rating: 5,
		review: "Security is a top a concem for us & AI SaaS takes it seriously. It reassuring layer protection for our organization.",
		author: {
			name: "Robert Johan",
			title: "Manager",
		},
	},
	{
		id: 2,
		image: image2,
		rating: 5,
		review: "AI SaaS tools has revolutionized the way we process & analyze data. this is a game change for our business.",
		author: {
			name: "Jokbars Jeson",
			title: "Developer",
		},
	},
	{
		id: 3,
		image: image3,
		rating: 5,
		review: "It is accurate fast & support multiple languages support. It’s must for any internationl business success.",
		author: {
			name: "Alex Cleveiya",
			title: "Designer",
		},
	},
];

function Testimonials() {
	return (
		<section className="sofax-section-padding2 position-ralatiove bg-light">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2>See what our users have to say about it</h2>
					</div>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger key={testimonial.id} index={index} className="col-lg-4">
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
