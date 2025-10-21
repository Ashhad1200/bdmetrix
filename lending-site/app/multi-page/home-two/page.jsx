import AboutOne from "@/components/home/home-two/about-one/AboutOne";
import Counter from "@/components/home/home-two/counter";
import CtaOne from "@/components/home/home-two/cta-one/CtaOne";
import CtaTwo from "@/components/home/home-two/cta-two/CtaTwo";
import Faq from "@/components/home/home-two/faq";
import Features from "@/components/home/home-two/features";
import Hero from "@/components/home/home-two/hero";
import LogoSlider from "@/components/home/home-two/logo-slider";
import Testimonials from "@/components/home/home-two/testimonials";
import WhyChooseUs from "@/components/home/home-two/why-choose-us/WhyChooseUs";

function HomeTwo() {
	return (
		<>
			<Hero />
			<Counter />
			<Features />
			<CtaOne />
			<AboutOne />
			<WhyChooseUs />
			<LogoSlider />
			<Testimonials />
			<Faq />
			<CtaTwo />
		</>
	);
}

export default HomeTwo;
