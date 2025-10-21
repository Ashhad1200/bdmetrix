import Shape from "@/public/images/v4/shape1.png";
import Image from "next/image";
import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
function HeroButton() {
	return (
		<>
			<FadeInStaggerTwo className="sofax-hero-btn-wrap">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text="Contact Us" href="/contact-us">
						<span className="button-wraper">Contact Us</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill outline-btn" data-text="View Our Services" href="/service">
						<span className="button-wraper">View Our Services</span>
					</Link>
				</FadeInStaggerTwoChildren>
				<div className="hero4-shape1">
					<Image src={Shape} alt="Shape" />
				</div>
			</FadeInStaggerTwo>
		</>
	);
}

export default HeroButton;
