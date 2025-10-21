import Icon5 from "@/public/images/v3/icon5.png";
import Icon6 from "@/public/images/v3/icon6.png";
import Icon7 from "@/public/images/v3/icon7.png";
import Icon8 from "@/public/images/v3/icon8.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Task and Project Management",
		description:
			"Efficiently organize tasks, responsibilities manage project timelines and ensuring streamlined collaboration.",
		icon: Icon5,
	},
	{
		id: crypto.randomUUID(),
		title: "Reporting and Analytics",
		description:
			"This helps managers make informed decisions and improvement optimize workflows for greater efficiency.",
		icon: Icon6,
	},
	{
		id: crypto.randomUUID(),
		title: "Collaborative Workspaces",
		description:
			"Collaborative work, enabling team members to collectively contribute to projects and initiatives.",
		icon: Icon7,
	},
	{
		id: crypto.randomUUID(),
		title: "Time Tracking and Attendance",
		description:
			"Monitor work hours, track attendance, & analyze productivity trends to optimize resource & project timelines.",
		icon: Icon8,
	},
];
function Services() {
	return (
		<section className="sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> The source of truth for your business </TextSplitFadeIn>
								</h2>
							</div>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex align-items-center justify-content-end">
							<FadeInUp className="sofax-title-btn">
								<Link
									className="sofax-default-btn pill"
									data-text=" View all services "
									href="/service"
								>
									<span className="button-wraper"> View all services </span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
				<div className="row">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
