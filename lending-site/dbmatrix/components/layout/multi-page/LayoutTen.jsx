import Footer from "@/components/home/home-ten/footer";
import Header from "@/components/home/home-ten/header/multi-page";

function LayoutTen({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutTen;
