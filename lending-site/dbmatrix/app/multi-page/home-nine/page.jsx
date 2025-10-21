import AboutOne from "@/components/home/home-nine/about-one";
import AboutTwo from "@/components/home/home-nine/about-two/AboutTwo";
import Blogs from "@/components/home/home-nine/blogs";
import Cta from "@/components/home/home-nine/cta";
import Features from "@/components/home/home-nine/features";
import Hero from "@/components/home/home-nine/hero";
import LogoSlider from "@/components/home/home-nine/logo-slider";
import Services from "@/components/home/home-nine/services";
import Testimonials from "@/components/home/home-nine/testimonials";

function HomeNine() {
	return (
		<>
			<Hero />
			<LogoSlider />
			<Features />
			<Services />
			<AboutOne />
			<AboutTwo />
			<Testimonials />
			<Blogs />
			<Cta />
		</>
	);
}

export default HomeNine;
