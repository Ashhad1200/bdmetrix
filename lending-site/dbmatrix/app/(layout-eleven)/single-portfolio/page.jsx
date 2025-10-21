import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import PortfolioDetails from "@/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/components/portfolio/single/RelatedProject";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Single Portfolio Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function SinglePortfolioPage() {
  return (
    <>
      <BreadCrumb title="Portfolio Deatails" />
      <PortfolioDetails />
      <RelatedProject />
      <AutoSlider />
    </>
  );
}

export default SinglePortfolioPage;
