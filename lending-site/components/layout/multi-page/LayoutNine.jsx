import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/multi-page";

function LayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutNine;
