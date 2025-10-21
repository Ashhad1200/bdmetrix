import Footer from "@/components/home/home-three/footer";
import Header from "@/components/home/home-three/header/multi-page";

function LayoutThree({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutThree;
