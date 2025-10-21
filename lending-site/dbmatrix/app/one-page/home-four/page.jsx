import AboutOne from "@/components/home/home-four/about-one";
import AboutTwo from "@/components/home/home-four/about-two";
import Blog from "@/components/home/home-four/blog";
import ContactUs from "@/components/home/home-four/contact-us";
import Hero from "@/components/home/home-four/hero";
import LogoSlider from "@/components/home/home-four/logo-slider";
import PricingPlan from "@/components/home/home-four/pricing-plan";
import Services from "@/components/home/home-four/services";
import Testimonial from "@/components/home/home-four/testimonial";

function HomeFour() {
	return (
		<>
			<Hero />
			<LogoSlider />
			<AboutOne />
			<Services />
			<AboutTwo />
			<PricingPlan />
			<Testimonial />
			<Blog />
			<ContactUs />
		</>
	);
}

export default HomeFour;
