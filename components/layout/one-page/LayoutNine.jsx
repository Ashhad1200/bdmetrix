import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/one-page";

function OnePageLayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutNine;
