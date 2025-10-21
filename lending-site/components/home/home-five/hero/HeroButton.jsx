import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroButton() {
	return (
		<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
			<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill" data-text="Let's Talk" href="/contact-us">
					<span className="button-wraper">Let's Talk</span>
				</Link>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill outline-btn" data-text="Explore Our Services" href="/service">
					<span className="button-wraper">Explore Our Services</span>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroButton;
