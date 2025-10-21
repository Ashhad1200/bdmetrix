import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/multi-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Five",
	description: "Sofax || Responsive Next.js Template",
};
function LayoutFive({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutFive;
