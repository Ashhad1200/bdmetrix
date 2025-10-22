import icon5 from "@/public/images/v8/icon10v8.png";
import icon6 from "@/public/images/v8/icon11v8.png";
import icon1 from "@/public/images/v8/icon6v8.png";
import icon2 from "@/public/images/v8/icon7v8.png";
import icon3 from "@/public/images/v8/icon8v8.png";
import icon4 from "@/public/images/v8/icon9v8.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
const servicesData = [
  {
    id: 1,
    icon: icon1,
    title: "Software Development",
    description:
      "Define to the project scope, objectives, and feasibility. Conduct risk analysis and allocate resources.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Technology Advisory",
    description:
      "Development implementation supports risk management and staying ahead of technological trends.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Analytics & Research",
    description:
      "Investigating why a certain event trend or occurred. Identifying patterns and anomalies in data research.",
  },
  {
    id: 4,
    icon: icon4,
    title: "IT Strategy & Planning",
    description:
      "IT strategy and planning it effectively is essential for aligning technology with a business goals.",
  },
  {
    id: 5,
    icon: icon5,
    title: "SEO & Optimazation",
    description:
      "Google Analytics, Ahrefs, SEMrush, a Moz for keyword research, backlink analysis performance tracking.",
  },
  {
    id: 6,
    icon: icon6,
    title: "Network Management",
    description:
      "This includes wide range tasks such as monitoring network performance, troubleshooting issues.",
  },
];
function Services() {
  return (
    <section className="sofax-section-padding2 bg-light" id="services">
      <div className="container">
        <div className="sofax-section-title center">
          <div className="tg-heading-subheading animation-style3">
            <h2>We provide IT and business solutions</h2>
          </div>
        </div>

        <div className="sofax-features-wrapv8">
          {servicesData.map((service, index) => (
            <FadeInStagger
              key={service.id}
              index={index}
              className="sofax-features-boxv8"
            >
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
