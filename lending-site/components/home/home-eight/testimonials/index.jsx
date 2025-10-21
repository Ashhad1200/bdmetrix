import image1 from "@/public/images/v8/image4v8.png";
import image2 from "@/public/images/v8/image5v8.png";
import image3 from "@/public/images/v8/image6v8.png";

import FadeInStagger from "../../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
  {
    id: 1,
    image: image1,
    rating: 5,
    review:
      "We are very satisfied to with a DBMatrix services we have to a recived from DBMatrix so far. Although DBMatrix has to only been around.",
    author: {
      name: "Derrick Turner",
      title: "Web Developer",
    },
  },
  {
    id: 2,
    image: image2,
    rating: 5,
    review:
      "It’s an all-in-one solution to that a has turbocharged the growth. The lead a generation & capbilities. our partner & result spesk.",
    author: {
      name: "Semits Johan",
      title: "Manager",
    },
  },
  {
    id: 3,
    image: image3,
    rating: 5,
    review:
      "Great results a enjoyable to the work with & most importanly, enabled us to the presence on the website needed conduct business.",
    author: {
      name: "Wellim Selith",
      title: "Markater",
    },
  },
];

function Testimonials() {
  return (
    <section className="sofax-section-padding bg-light" id="testimonial">
      <div className="container">
        <div className="sofax-section-title center max-width-large">
          <div className="tg-heading-subheading animation-style3">
            <h2>See what our customers say about us</h2>
          </div>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <FadeInStagger
              key={testimonial.id}
              index={index}
              className="col-xl-4 col-md-6"
            >
              <TestimonialCard testimonial={testimonial} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
