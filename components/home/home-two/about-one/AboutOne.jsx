import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Icon6 from "@/public/images/v2/icon6.png";
import Icon7 from "@/public/images/v2/icon7.png";
import Icon8 from "@/public/images/v2/icon8.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function AboutOne() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="about-thumb ml-50">
							<Image src={Thumb2} alt="Thumb2" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content">
							<div className="tg-heading-subheading ">
								<h2 className="tac">
									<TextSplitFadeIn> Easily trade anytime, anywhere on the go</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								Our user-friendly mobile app is designed for convenience, ensuring you can execute
								trades & manage your portfolio effortlessly anytime anywhere.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon6} alt="Icon6" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Largest public crypto app</h4>
										<p>
											Buy & sell popular digital currencies, keep track of them in the one place &
											watch currencies you’re interested.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon7} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Your assets are protected</h4>
										<p>
											Robust security features, such as two-factor authentication & encryption, to
											protect users accounts and transactions.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon8} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Get the help you need when you need it</h4>
										<p>
											Leading crypto app with top-notch security and robust asset protection.
											Access assistance whenever you need it.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
