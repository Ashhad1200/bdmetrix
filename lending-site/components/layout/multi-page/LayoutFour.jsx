import Footer from "@/components/home/home-four/footer";
import Header from "@/components/home/home-four/header/multi-page";

function LayoutFour({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutFour;
