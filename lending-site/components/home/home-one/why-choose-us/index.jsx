import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/v1/contentimg2.png";
import ContentThumb from "@/public/images/v1/contentthumb1.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon9 from "@/public/images/v1/icon9.png";
import Shape3 from "@/public/images/v1/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function WhyChooseUs() {
	return (
		<div className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow mb-130">
							<Image src={ContentThumb} alt="ContentThumb" />
							<div className="sofax-card-shape">
								<Image src={Card} alt="Card" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							<div className="tg-heading-subheading animation-style3">
								<h2>Optimize your sales without any hassle</h2>
							</div>
							<p>
								Sales forecasting, & analytics that enable users to streamline their sales workflows,
								identify areas for improvement and also make data-driven.{" "}
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Streamline processes</h4>
										<p>
											Automate repetitive tasks such as lead nurturing, follow- ups and order to
											the processing with using salesphere.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Understand your audience</h4>
										<p>
											Utilize salesphere to gather data and insights about your target audience.
											Their needs preferences & pain points.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={CheckCircle} alt="check" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Utilize customer data</h4>
										<p>
											Use this data to understand your customers preferences behaviors and pain
											the points,tailor your sales pitches.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
							<Image src={Contentimg2} alt="Thumbs" />
							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2>Use sales insights to drive your strategy</h2>
							</div>
							<p>
								These are just a few examp & the best choice for you will depend on the factors such as
								your budget your team & the specific features you need.
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon9} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Time saved in closing deals</h4>
										<p>
											You'll save time managing and closing deals by having a centralized hub for
											all your sales activities.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Quick access of data & communication</h4>
										<p>
											Quickly access all the information you need to close deals. Have contact
											details for each prospect in one place.
										</p>
									</div>
								</div>
							</div>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Get started" href="/contact-us">
									<span className="button-wraper">Get started</span>
								</Link>
							</FadeInUp>
							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
