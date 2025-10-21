import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
const menuItemsData = [
	{
		title: "Home",
		url: "#hero",
	},
	{
		title: "Service",
		url: "#service",
	},
	{
		title: "Pricing",
		url: "#pricing",
	},
	{
		title: "Integration",
		url: "#integration",
	},
	{
		title: "Testimonial",
		url: "#testimonial",
	},
];

function Header() {
	return (
		<header className="site-header sofax-header-section site-header--menu-center bg-white" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<a href="#hero" className="nav-link-item">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#service" className="nav-link-item">
										Service
									</a>
								</li>
								<li className="nav-item">
									<a href="#pricing" className="nav-link-item">
										Pricing
									</a>
								</li>
								<li className="nav-item">
									<a href="#integration" className="nav-link-item">
										Integration
									</a>
								</li>
								<li className="nav-item">
									<a href="#testimonial" className="nav-link-item">
										Testimonial
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />
					<MobileNavbar menuItemsData={menuItemsData} title="Sofax" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
