import Thumb2 from "@/public/images/v2/ctathumb.png";
import Shape1 from "@/public/images/v2/shape1.png";
import Shape3 from "@/public/images/v2/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function CtaTwo() {
	return (
		<section className="sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="sofax-cta-thumb mr-50">
							<Image src={Thumb2} alt="Thumbs" />
						</div>
						<div className="sofax-ctathumb-shape">
							<Image src={Shape3} alt="Shape" />
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-center">
						<div className="sofax-default-content ml-30">
							<div className="tg-heading-subheading ">
								<h2>
									<TextSplitFadeIn> Download and start your crypto journey </TextSplitFadeIn>
								</h2>
							</div>
							<p>
								Embark on your crypto journey effortlessly! Download our user-friendly app, create an
								account in minutes, and step into the exciting world of digital assets. Begin buying and
								selling cryptocurrencies with ease.
							</p>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Sign up now" href="/sign-up">
									<span className="button-wraper">Sign up now</span>
								</Link>
							</FadeInUp>
						</div>
						<div className="sofax-ctathumb-shape2">
							<Image src={Shape1} alt="Shape" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaTwo;
