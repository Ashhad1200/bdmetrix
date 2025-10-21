import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";

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
