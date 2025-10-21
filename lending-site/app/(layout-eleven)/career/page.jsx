import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
  ssr: false,
});
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Career Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function CareerPage() {
  return (
    <>
      <BreadCrumb title="Career" />
      <Career />
      <LogoSlider />
    </>
  );
}

export default CareerPage;
