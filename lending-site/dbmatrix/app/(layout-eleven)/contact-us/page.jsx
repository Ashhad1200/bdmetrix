import BreadCrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/contact-us-page";
import MyMap from "@/components/contact-us-page/MyMap";
export const metadata = {
  title: "DBMatrix || Responsive Next.js Template Contact Us Page",
  description: "DBMatrix || Responsive Next.js Template",
};
function ContactUs() {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <Contact />
      <MyMap />
    </>
  );
}

export default ContactUs;
