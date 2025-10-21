import Footer from "@/components/home/home-ten/footer";
import Header from "@/components/home/home-ten/header/one-page";

function OnePageLayoutTen({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutTen;
