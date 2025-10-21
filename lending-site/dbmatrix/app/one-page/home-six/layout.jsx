import Header from "@/components/home/home-six/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Six",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutSix({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default OnePageLayoutSix;
