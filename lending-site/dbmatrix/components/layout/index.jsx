import ScrollToTop from "../../hooks/ScrollToTop";
import useScrollTop from "../../hooks/useScrollTop";
function Layout() {
	useScrollTop();
	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
}

export default Layout;
