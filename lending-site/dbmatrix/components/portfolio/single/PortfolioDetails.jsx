import Icon from "@/public/images/portfolio/Icon1.png";
import Thumbs from "@/public/images/portfolio/image3.png";
import Image from "next/image";
function PortfolioDetails() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content portfolio-details-content">
					<h2>Gradients can range from simple transitions to more complex ones</h2>
				</div>
				<div className="portfolio-details-thumb wow fadeInUpX">
					<Image src={Thumbs} alt="Iamge" />
				</div>
				<div className="sofax-portfolio-authore">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Client :</p>
								<h4>Henry Company</h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Services :</p>
								<h4>Web Design</h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Date :</p>
								<h4>March 27, 2024</h4>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="portfolio-details-content2">
								<p>Website :</p>
								<h4>
									Preview Project
									<a href="#">
										<Image src={Icon} alt="Icon 2" />
									</a>
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="portfolio-details-content3">
					<h3>Project Overview :</h3>
					<p>
						"Gradient Web Design" sounds like a project focused on incorporating gradients into web design.
						Gradients are a popular design element that involve a smooth transition between two or more
						colors. By creating a comprehensive project overview, you can ensure that the Gradient Web
						Design project progresses smoothly and achieves its objectives effectivel
					</p>
				</div>
				<div className="sofax-portfolio-authore-wrap">
					<div className="sofax-portfolio-authore-text">
						<h4>1. Objective </h4>
						<p>
							The objective of this project is to leverage gradient design elements to enhance the visual
							appeal, user experience, and overall aesthetics of our website.
						</p>
					</div>
					<div className="sofax-portfolio-authore-text">
						<h4>2. Scope</h4>
						<p>
							Integrating gradient designs into various components of the website, including but not
							limited to backgrounds, buttons, text elements, headers, & illustrations.
						</p>
					</div>
					<div className="sofax-portfolio-authore-text">
						<h4>3. Target Audience </h4>
						<p>
							Our target audience consists of define your target to audience demographics, interests, etc.
							The gradient designs will resonate with this audience.
						</p>
					</div>
					<div className="sofax-portfolio-authore-text">
						<h4>4. Research </h4>
						<p>
							Conduct research on current trends in web design, specifically focusing. Analyze competitor
							websites industry-leading examples to gather inspiration & identify.{" "}
						</p>
					</div>
				</div>
				<div className="portfolio-details-content-bottom">
					<h3>Positive User Feedback :</h3>
					<p>
						User feedback on the gradient designs has been overwhelmingly positive, with many users
						expressing that appreciation for the visually appealing & dynamic nature of the website. Users
						have reported that gradient designs contribute to a more immersive & enjoyable browsing
						experience, encouraging them to spend more time exploring the site.
					</p>
				</div>
			</div>
		</section>
	);
}

export default PortfolioDetails;
