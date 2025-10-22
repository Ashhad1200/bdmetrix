import Header from "@/components/home/home-four/header/one-page";
export const metadata = {
	title: "Sofax || Responsive Next.js Template Home Four",
	description: "Sofax || Responsive Next.js Template",
};
function OnePageLayoutFour({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default OnePageLayoutFour;
