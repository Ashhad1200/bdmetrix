import Header from "@/components/common/header";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Coming Soon Page",
	description: "Sofax || Responsive Next.js Template",
};
function LayoutTwelve({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default LayoutTwelve;
