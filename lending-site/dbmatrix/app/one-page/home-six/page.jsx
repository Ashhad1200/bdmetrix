import About from "@/components/home/home-six/about";
import ContactUs from "@/components/home/home-six/contact-us";
import Counter from "@/components/home/home-six/counter";
import Faq from "@/components/home/home-six/faq";
import Features from "@/components/home/home-six/features";
import Hero from "@/components/home/home-six/hero";
import LogoSlider from "@/components/home/home-six/logo-slider";
import Services from "@/components/home/home-six/services";
import Testimonial from "@/components/home/home-six/testimonial";

function HomeSix() {
	return (
		<>
			<Hero />
			<LogoSlider />
			<Features />
			<About />
			<Counter />
			<Services />
			<Testimonial />
			<Faq />
			<ContactUs />
		</>
	);
}

export default HomeSix;
