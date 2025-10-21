import HeroButton from "./HeroButton";
import HeroContent from "./HeroContent";
import HeroShapes from "./HeroShapes";
function Hero() {
	return (
		<div className="sofax-section-padding4 position-ralatiove" id="hero">
			<div className="container">
				<HeroContent />
				<HeroButton />
				<HeroShapes />
			</div>
		</div>
	);
}

export default Hero;
