import Footer from "@/components/home/home-two/footer";
import Header from "@/components/home/home-two/header/one-page";

function OnePageLayoutTwo({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutTwo;
