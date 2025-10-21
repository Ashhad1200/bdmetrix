import JobDetails from "@/components/career-page/single/JobDetails";
import BreadCrumb from "@/components/common/Breadcrumb";
import LogoSlider from "@/components/common/logo-slider";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Single Carrer Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function SingleCareerPage() {
  return (
    <>
      <BreadCrumb title="UI/UX Designer" />
      <JobDetails />
      <LogoSlider light />
    </>
  );
}

export default SingleCareerPage;
