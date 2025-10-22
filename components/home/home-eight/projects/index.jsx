import thumb1 from "@/public/images/v8/thumb1v8.png";
import thumb2 from "@/public/images/v8/thumb2v8.png";
import thumb3 from "@/public/images/v8/thumb3v8.png";
import thumb4 from "@/public/images/v8/thumb4v8.png";
import thumb5 from "@/public/images/v8/thumb5v8.png";
import thumb6 from "@/public/images/v8/thumb6v8.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    image: thumb1,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
  {
    id: 2,
    image: thumb2,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
  {
    id: 3,
    image: thumb3,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
  {
    id: 4,
    image: thumb4,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
  {
    id: 5,
    image: thumb5,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
  {
    id: 6,
    image: thumb6,
    title: "CRM Software",
    category: "Development",
    link: "single-portfolio.html",
  },
];
function Projects() {
  return (
    <div className="section sofax-section-padding" id="projects">
      <div className="container">
        <div className="sofax-section-title">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="tg-heading-subheading animation-style3">
                <h2>Recently completed to our latest projects</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
              <div className="sofax-title-btn wow fadeInUpX">
                <Link
                  className="sofax-default-btn pill"
                  data-text="View All Projects"
                  href="/service"
                >
                  <span className="button-wraper">View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {projectsData.map((project, index) => (
            <FadeInStagger
              key={project.id}
              index={index}
              className="col-lg-4 col-md-6"
            >
              <ProjectCard project={project} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
