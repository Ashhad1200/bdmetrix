import Footer from "@/components/home/home-three/footer";
import Header from "@/components/home/home-three/header/one-page";

function OnePageLayoutThree({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutThree;
