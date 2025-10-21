// Using IT Services Theme Header and Footer
import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
  title: "DBMatrix || Professional IT Services & Software Solutions",
  description:
    "Leading IT services company providing software development, cloud solutions, and technology consulting for businesses worldwide",
};
function LayoutOne({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutOne;
