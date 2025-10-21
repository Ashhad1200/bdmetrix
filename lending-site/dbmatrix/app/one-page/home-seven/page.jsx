import AboutOne from "@/components/home/home-seven/about-one";
import AboutThree from "@/components/home/home-seven/about-three/AboutThree";
import AboutTwo from "@/components/home/home-seven/about-two/AboutTwo";
import Blogs from "@/components/home/home-seven/blogs";
import Features from "@/components/home/home-seven/features";
import Hero from "@/components/home/home-seven/hero";
import Integrations from "@/components/home/home-seven/integrations";
import Services from "@/components/home/home-seven/services";
import Testimonials from "@/components/home/home-seven/testimonials";

function HomeSeven() {
	return (
		<>
			<Hero />
			<Features />
			<AboutOne />
			<Services />
			<AboutTwo />
			<AboutThree />
			<Testimonials />
			<Integrations />
			<Blogs />
		</>
	);
}

export default HomeSeven;
