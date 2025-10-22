import Icon1 from "@/public/images/v2/icon1.png";
import Icon2 from "@/public/images/v2/icon2.png";
import Icon4 from "@/public/images/v2/icon4.png";
import Icon5 from "@/public/images/v2/icon5.png";
import Phone from "@/public/images/v2/phone.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";

function Features() {
	return (
		<section className=" section sofax-section-padding" id="features">
			<div className="sofax-section-title center">
				<div className="tg-heading-subheading ">
					<h2>
						<TextSplitFadeIn>Secure solutions for your digital assets</TextSplitFadeIn>
					</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="row">
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon1} alt="features" />
								</div>
								<div className="sofax-features-content">
									<h4>Send & Receive</h4>
									<p>
										Sending & receiving cryptocurrencies such as Bitcoin, Ethereum or to other
										digital assets between deggerent.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon2} alt="Feature" />
								</div>
								<div className="sofax-features-content">
									<h4>100% Secure Wallet</h4>
									<p>
										Cryptocurrency wallets implement to robust security measures there is no such
										thing as absolute security.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
						</FadeInStaggerTwo>
						<div className="col-lg-4 col-md-12">
							<FadeInUp className="sofax-features-box features-v2 position-relative">
								<div className="sofax-features-icon">
									<Image src={Icon5} alt="Features Icon" />
								</div>
								<div className="sofax-features-content">
									<h4>IOS & Android App</h4>
									<p>
										Apps developed using programming languages such as swift or objective-c & are
										typically distributed.
									</p>
								</div>
								<div className="sofax-features-thumb">
									<Image src={Phone} alt="Phone" />
								</div>
							</FadeInUp>
						</div>
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon4} alt="Feature Ion" />
								</div>
								<div className="sofax-features-content">
									<h4>Tranding Charts</h4>
									<p>
										Traders investors & analyze historical price data, identify trendsand, make
										informed decisions about buying.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<div className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon5} alt="Icon 5" />
								</div>
								<div className="sofax-features-content">
									<h4>Real Time Tranding</h4>
									<p>
										This data includes current prices that trading volume, bid-ask to spreads or
										order book depth & relevant metrics.
									</p>
								</div>
							</div>
						</FadeInStaggerTwo>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
