import Header from "@/components/common/header";
import Footer from "@/components/home/home-eight/footer";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
