import Thumb from "@/public/images/v2/contentthumb2.png";
import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function WhyChooseUs() {
	return (
		<section className="section sofax-section-padding3">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="about-thumb mr-50 ">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content fs-19">
							<div className="tg-heading-subheading ">
								<h2 className="tac">
									<TextSplitFadeIn> Lightning-fast crypto trading in just 3 steps</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								One of the largest and best-known cryptocurrency platforms offering a user-friendly
								interface to buy, sell & manage various cryptocurrencies in easy steps.
							</p>
							<div className="extra-mt">
								<FadeInStaggerTwo className="accordion sofax-accordion-wrap1" id="sofax-accordion">
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												1. Download and create an account easily
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Effortlessly begin your cryptocurrency journey by downloading our
												user-friendly app. Within minutes, you can create a secure account.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header" id="headingOne">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												2. Link your bank account & make a payment
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Effortlessly begin your cryptocurrency journey by downloading our
												user-friendly app. Within minutes, you can create a secure account.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												3. Start buying & selling crypto as you wish
											</button>
											<div className="accordion-icon">
												<Image src={Icon} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												Effortlessly begin your cryptocurrency journey by downloading our
												user-friendly app. Within minutes, you can create a secure account.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
								</FadeInStaggerTwo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
