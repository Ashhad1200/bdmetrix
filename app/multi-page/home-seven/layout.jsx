import Footer from "@/components/home/home-seven/footer";
import Header from "@/components/home/home-seven/header/multi-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Seven",
	description: "Sofax || Responsive Next.js Template",
};
function LayoutSeven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutSeven;
