import HeroButton from "./HeroButton";
import HeroContent from "./HeroContent";
import HeroThumb from "./HeroThumb";

function Hero() {
	return (
		<>
			<div className="sofax-section-padding4 pb-80">
				<div className="container">
					<HeroContent />

					<HeroButton />
				</div>
			</div>
			<HeroThumb />
		</>
	);
}

export default Hero;
