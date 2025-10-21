import Footer from "@/components/home/home-two/footer";
import Header from "@/components/home/home-two/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Two",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutTwo({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default OnePageLayoutTwo;
