import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home one",
	description: "Sofax || Responsive Next.js Template",
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
