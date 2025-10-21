import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function CtaOne() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="about-thumb mr-50 ">
							<Image src={Thumb2} alt="Thumbs 2" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading ">
								<h2>
									<TextSplitFadeIn>
										Buy, sell & securely store a wide range of cryptocurrencies.
									</TextSplitFadeIn>
								</h2>
							</div>
							<p>
								You can now manage your cryptocurrencies with ease by buying, selling, storing &
								transferring them all in one place. Additionally, you can acquire the right to buy or
								sell stocks for a specific price with no commission fees.
							</p>
							<p>
								Finally, you can buy, sell and securely store a variety of cryptocurrencies with this
								app and protect your crypto with best-in-className cold storage.
							</p>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Sign up now" href="/sign-up">
									<span className="button-wraper">Sign up now</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaOne;
