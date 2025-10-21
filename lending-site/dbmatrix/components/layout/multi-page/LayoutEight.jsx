import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";

function LayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;
