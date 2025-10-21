import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home One",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutOne;
