"use client";
import Link from "next/link";
import CountUp from "react-countup";
import FadeInUp from "../../../animation/FadeInUp";
function AboutOne() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content tac mr-50">
							<div className="tg-heading-subheading animation-style3">
								<h2>Your business with a AI powered solutions</h2>
							</div>
							<p>
								AI-powered chatbots can handle customer inquiries 24/7, providing instant responses and
								reducing the workload on human customer service representatives.
							</p>
							<p>
								AI can analyze customer feedback and social media interactions to gauge customer
								sentiment and identify areas for improvement.
							</p>
						</div>
						<FadeInUp className="sofax-title-btn extra-mt">
							<Link className="sofax-default-btn pill" data-text="About Us" href="/contact-us">
								<span className="button-wraper">About Us</span>
							</Link>
						</FadeInUp>
					</div>
					<div className="col-lg-5">
						<div className="sofax-default-content">
							<div id="sofax-counter"></div>
							<div className="sofax-counter-wrapperv7 ml-50">
								<div className="sofax-counter-wrap-v7">
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp
												className="sofax-counter"
												end={75}
												duration={3}
												redraw={true}
												enableScrollSpy
											/>
											%
										</h2>
										<p>Positive Ratings</p>
									</div>
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp
												className="sofax-counter"
												end={80}
												duration={3}
												redraw={true}
												enableScrollSpy
											/>
										</h2>
										<p>Award Win</p>
									</div>
								</div>
								<div className="sofax-counter-wrap-v7">
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp
												className="sofax-counter"
												end={95}
												duration={3}
												redraw={true}
												enableScrollSpy
											/>
											%
										</h2>
										<p>Happy Customers</p>
									</div>
									<div className="sofax-counter-data-v7">
										<h2>
											<CountUp className="sofax-counter" end={90} duration={3} redraw={true} />%
										</h2>
										<p>Project Completed</p>
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
