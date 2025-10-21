import Footer from "@/components/home/home-seven/footer";
import Header from "@/components/home/home-seven/header/multi-page";

function LayoutSeven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutSeven;
