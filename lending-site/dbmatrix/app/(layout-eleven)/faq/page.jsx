import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/faq-page";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template FAQ Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function FaqPage() {
  return (
    <>
      <BreadCrumb title="Faq" />
      <Faq />
      <AutoSlider />
    </>
  );
}

export default FaqPage;
