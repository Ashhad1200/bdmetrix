import AboutOne from "@/components/home/home-ten/about-one";
import AboutThree from "@/components/home/home-ten/about-three/AboutThree";
import AboutTwo from "@/components/home/home-ten/about-two/AboutTwo";
import Counter from "@/components/home/home-ten/counter";
import Cta from "@/components/home/home-ten/cta";
import Features from "@/components/home/home-ten/features";
import Hero from "@/components/home/home-ten/hero";
import PricePlan from "@/components/home/home-ten/price-plan";
import Services from "@/components/home/home-ten/services";
import Testimonials from "@/components/home/home-ten/testimonials";

function HomeTen() {
	return (
		<>
			<Hero />
			<Counter />
			<Features />
			<AboutOne />
			<Services />
			<AboutTwo />
			<PricePlan />
			<AboutThree />
			<Testimonials />
			<Cta />
		</>
	);
}

export default HomeTen;
