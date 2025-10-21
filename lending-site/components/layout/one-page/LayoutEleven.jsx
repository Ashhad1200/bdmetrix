import Header from "../common/header";
import Footer from "../home/home-five/footer";
function OnePageLayoutEleven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutEleven;
