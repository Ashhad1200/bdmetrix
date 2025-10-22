import JobApplyForm from "./JobApplyForm";

import Cash from "@/public/images/career/cash.png";
import Clock from "@/public/images/career/clock.png";
import Location from "@/public/images/career/location-marker.png";
import Icon1 from "@/public/images/contact/icon1.png";
import Icon2 from "@/public/images/contact/icon2.png";
import Icon3 from "@/public/images/contact/icon3.png";
import Image from "next/image";

function JobDetails() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content career-details">
							<h2>Job Details:</h2>
							<p>
								UI/UX designers and user an experience (UX) designers are the similar—in fact, sometimes
								the titles are used interchangeably.
							</p>
						</div>
						<div className="sofax-career-content-icon-text-wrapper2 sofax-career-details1">
							<div className="sofax-career-content-icon-text-wrap">
								<div className="sofax-career-content-icon2">
									<Image src={Clock} alt="clock icon" />
								</div>
								<div className="sofax-career-content-text2">
									<h6>Full Time</h6>
								</div>
							</div>
							<div className="sofax-career-content-icon-text-wrap">
								<div className="sofax-career-content-icon2">
									<Image src={Location} alt="Location icon" />
								</div>
								<div className="sofax-career-content-text2">
									<h6>London, UK</h6>
								</div>
							</div>
							<div className="sofax-career-content-icon-text-wrap">
								<div className="sofax-career-content-icon2">
									<Image src={Cash} alt="Cash icon" />
								</div>
								<div className="sofax-career-content-text2">
									<h6>$25k-40K</h6>
								</div>
							</div>
						</div>
						<div className="sofax-career-details-content">
							<h3>Job Responsibilities</h3>
							<p>
								By partnering with cross-functional teams and customers, for you will turn your insights
								into delightful creative environment that requires proven leadership skills and the
								ability.
							</p>
							<div className="sofax-career-details-data">
								<ul>
									<li>Set design requirements based on information from internal teams.</li>
									<li>Identify new product improvement opportunities.</li>
									<li>Analyze how a new product satisfies market needs & consumer preferences.</li>
									<li>Stay up to date on current industry trends and market conditions.</li>
									<li>Coordinate with other design team members to ensure communication.</li>
								</ul>
							</div>
						</div>
						<div className="sofax-career-details-content">
							<h3>Requirements</h3>
							<p>
								Proven experience in all phases of the design process including user for a research,
								copywriting, wireframing, prototyping, visual design, interaction design, and usability
								testing
							</p>
							<div className="sofax-career-details-data">
								<ul>
									<li>An intuitive eye for customer needs beyond the obvious</li>
									<li>Ability to collaborate with cross-functional team members</li>
									<li>Ability to collect and interpret both qualitative and quantitative feedback</li>
									<li>Ability to effectively communicate and persuade around design concepts</li>
									<li>Passion for design; not satisfied with the status quo and always thinking</li>
								</ul>
							</div>
						</div>
						<div className="sofax-career-details-content">
							<h3>Skill & Experience</h3>
							<div className="sofax-career-details-data">
								<ul>
									<li>You have at least 3 years’ experience working as a Product Designer.</li>
									<li>You have experience using Sketch and InVision or Framer X and must figma</li>
									<li>You have some previous experience working in an agile environment</li>
									<li>You are familiar using Jira and Confluence in your workflow</li>
								</ul>
							</div>
						</div>
						<div className="sofax-career-details-content">
							<h3>Need help?</h3>
							<p>
								Not sure exactly what we’re looking for or just want clarification? We’d be happy to
								chat with you and clear things up for you. Anytime
							</p>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon1} alt="ICon" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Chat with us</h4>
									<p>We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon2} alt="icon 2" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Give us a call</h4>
									<p>QGive us a ring at (+088-234-567-90). Every monday-friday from 9 am to 5 pm.</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src={Icon3} alt="icon 3" />
								</div>
								<div className="sofax-iconbox-data2">
									<h4>Email Us</h4>
									<p>
										Drop us an email at example@gmail.com and you'll receive a reply within 24
										hours.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<JobApplyForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default JobDetails;
