import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Eight",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutEight;
