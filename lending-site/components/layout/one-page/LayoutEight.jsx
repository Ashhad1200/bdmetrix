import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/one-page";

function OnePageLayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutEight;
