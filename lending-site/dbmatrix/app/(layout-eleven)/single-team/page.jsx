import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleTeamDetails from "@/components/team-page/single/SingleTeamDetails";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Single Team Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function SingleTeamPage() {
  return (
    <>
      <BreadCrumb title="Team Details" />
      <SingleTeamDetails />
      <AutoSlider />
      <Faq />
    </>
  );
}

export default SingleTeamPage;
