import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Nine",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutNine;
