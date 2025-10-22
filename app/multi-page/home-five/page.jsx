import LogoSlider from "@/components/common/logo-slider";
import AboutOne from "@/components/home/home-five/about-one";
import AboutTwo from "@/components/home/home-five/about-two";
import Faq from "@/components/home/home-five/faq";
import Features from "@/components/home/home-five/features";
import Hero from "@/components/home/home-five/hero";
import Projects from "@/components/home/home-five/projects";
import Services from "@/components/home/home-five/services";
import Testimonials from "@/components/home/home-five/testimonials";

function HomeFive() {
	return (
		<>
			<Hero />
			<LogoSlider />
			<Features />
			<AboutOne />
			<Services />
			<AboutTwo />
			<Projects />
			<Testimonials />
			<Faq />
		</>
	);
}

export default HomeFive;
