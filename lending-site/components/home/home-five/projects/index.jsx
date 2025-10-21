"use client";
import image1 from "@/public/images/v5/image1.png";
import image2 from "@/public/images/v5/image2.png";
import image3 from "@/public/images/v5/image3.png";
import image4 from "@/public/images/v5/image4.png";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ProjectCard from "./projectCard";
const projectsData = [
	{
		id: crypto.randomUUID(),
		img: image1,
		title: "Gradient Web Design",
		category: "Web design & development",
	},
	{
		id: crypto.randomUUID(),
		img: image2,
		title: "Smart Watch Design",
		category: "App design & development",
	},
	{
		id: crypto.randomUUID(),
		img: image3,
		title: "Mobile Web Design",
		category: "Web design & development",
	},
	{
		id: crypto.randomUUID(),
		img: image4,
		title: "Responsive Web Design",
		category: "Web design & development",
	},
];

function Projects() {
	return (
		<section className="sofax-section-padding bg-light" id="project">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Check out all our latest feature projects</h2>
					</div>
				</div>

				<ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 992: 2 }}>
					<Masonry gutter="15px" columnsCount={2}>
						{projectsData.map((project, index) => (
							<FadeInStagger key={project.id} index={index}>
								<ProjectCard project={project} />
							</FadeInStagger>
						))}
					</Masonry>
				</ResponsiveMasonry>

				<FadeInUp className="sofax-portfolio-btn">
					<Link className="sofax-default-btn pill" data-text="View All Projects" href="/single-portfolio">
						<span className="button-wraper">View All Projects</span>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Projects;
