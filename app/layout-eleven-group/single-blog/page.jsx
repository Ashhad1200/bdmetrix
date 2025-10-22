import SingleBlog from "@/components/blog-page/single-blog";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Single Blog Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function SingleBlogPage() {
  return (
    <>
      <BreadCrumb title="Blog Details" />
      <SingleBlog />
      <AutoSlider />
    </>
  );
}

export default SingleBlogPage;
