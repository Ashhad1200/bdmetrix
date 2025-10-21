import Footer from "@/components/home/home-ten/footer";
import Header from "@/components/home/home-ten/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Ten",
	description: "Sofax || Responsive Next.js Template",
};
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
