import Footer from "@/components/home/home-two/footer";
import Header from "@/components/home/home-two/header/multi-page";

function LayoutTwo({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutTwo;
