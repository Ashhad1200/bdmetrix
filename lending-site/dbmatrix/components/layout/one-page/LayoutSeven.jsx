import Footer from "@/components/home/home-seven/footer";
import Header from "@/components/home/home-seven/header/one-page";

function OnePageLayoutSeven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutSeven;
