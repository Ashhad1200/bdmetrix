import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Blog Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function BlogPage() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <Blog />
      <AutoSlider />
    </>
  );
}

export default BlogPage;
