import IconArrow from "@/public/images/v2/icon9.png";
import IconCheck from "@/public/images/v7/icon5v6.png";
import Thumb from "@/public/images/v7/image1v7.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
function AboutTwo() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInUp className="about-thumb mr-50 ">
							<Image src={Thumb} alt="Thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="tac">Lightning-fast crypto trading in just 3 steps</h2>
							</div>
							<p className="tac">
								One of the largest and best-known cryptocurrency platforms offering a user-friendly
								interface to buy, sell & manage various cryptocurrencies in easy steps.
							</p>
							<div className="extra-mt">
								<FadeInStaggerTwo
									className="accordion sofax-accordion-wrap1 sofax-accordion-home7"
									id="sofax-accordion"
								>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<Image src={IconCheck} alt="Check Icon" />

											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
											>
												Ethical AI practics
											</button>
											<div className="accordion-icon">
												<Image src={IconArrow} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												AI developments are aligned with societal values and do not perpetuate
												biases or cause harm.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header" id="headingOne">
											<Image src={IconCheck} alt="Check Icon" />

											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
											>
												Cutting - edge research
											</button>
											<div className="accordion-icon">
												<Image src={IconArrow} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseTwo"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												AI developments are aligned with societal values and do not perpetuate
												biases or cause harm.
											</div>
										</div>
									</FadeInStaggerTwoChildren>
									<FadeInStaggerTwoChildren className="accordion-item sofax-accordion-item">
										<h3 className="accordion-header sofax-accordion-header">
											<Image src={IconCheck} alt="Check Icon" />

											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
											>
												Collaborative ecosystem
											</button>
											<div className="accordion-icon">
												<Image src={IconArrow} alt="Icon" />
											</div>
										</h3>
										<div
											id="collapseThree"
											className="accordion-collapse collapse"
											data-bs-parent="#sofax-accordion"
										>
											<div className="accordion-body sofax-accordion-body">
												AI developments are aligned with societal values and do not perpetuate
												biases or cause harm.
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

export default AboutTwo;
