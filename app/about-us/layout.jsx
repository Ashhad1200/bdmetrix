import Header from "@/components/common/header";
import Footer from "@/components/home/home-eight/footer";

export default function AboutLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
