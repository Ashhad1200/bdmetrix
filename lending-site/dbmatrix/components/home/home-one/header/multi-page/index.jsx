import DesktopMenu from "@/components/common/navigation/desktop-nav";
import { menuItemsData } from "@/components/common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";

function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopMenu />
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
