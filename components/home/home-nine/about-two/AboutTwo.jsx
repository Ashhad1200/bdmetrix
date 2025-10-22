import IconCheck from "@/public/images/v5/icon4.png";
import Thumb from "@/public/images/v9/thumb3v9.png";
import Image from "next/image";
import Link from "next/link";
function AboutTwo() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<div className="sofax-content-thumb-v9 box-shadow ml-50 wow fadeInRight">
							<Image src={Thumb} alt="Thumb" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Revenues grow with our email marketing</h2>
							</div>
							<p>
								Effective strategy for driving revenue growth. Here are some strategies and tips to help
								maximize the impact of your email marketing efforts.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={IconCheck} alt="Icon check" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Segment your audience</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={IconCheck} alt="Icon check" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Protect sensitive data</h4>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap content-v5">
									<div className="sofax-iconbox-icon content-v5">
										<Image src={IconCheck} alt="Icon check" />
									</div>
									<div className="sofax-iconbox-data content-v5">
										<h4>Test and analyze</h4>
									</div>
								</div>
								<div className="sofax-title-btn extra-mt wow fadeInUpX">
									<Link className="sofax-default-btn pill" data-text="Get Started" href="/contact-us">
										<span className="button-wraper">Get Started</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTwo;
