import Footer from "@/components/home/home-six/footer";
import Header from "@/components/home/home-six/header/multi-page";

function LayoutSix() {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutSix;
