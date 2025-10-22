import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import AboutOne from "@/components/home/home-five/about-one";
import Faq from "@/components/home/home-five/faq";
import Features from "@/components/home/home-five/features";
import TeamMembers from "@/components/team-page/TeamMembers";

// Teams images
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template About Us",
  description: "DBMatrix || Responsive Next.js Template",
};
function AboutUs() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <Features />
      <AboutOne />
      <TeamMembers />
      <AutoSlider />
      <Faq />
    </>
  );
}

export default AboutUs;
