import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/one-page";

function OnePageLayoutFive({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutFive;
