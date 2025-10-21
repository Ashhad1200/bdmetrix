import Icon from "@/public/images/v5/icon5.png";
import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, img, category } }) {
	return (
		<div className="sofax-portfolio-content-wrap">
			<div className="sofax-portfolio-thumb">
				<Link href="/single-portfolio">
					<Image src={img} alt="project image" />
				</Link>
			</div>
			<Link href="/single-portfolio">
				<div className="sofax-portfolio-author-wrap">
					<div className="sofax-portfolio-author-data">
						<h4>{title}</h4>
						<p>{category}</p>
					</div>
					<div className="sofax-portfolio-author-icon">
						<Image src={Icon} alt="Icon" />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;
