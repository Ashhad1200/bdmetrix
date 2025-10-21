import Logo from "@/public/images/logo/dbmatrix.png";
import Image from "next/image";
import Link from "next/link";
import FooterBottom from "./FooterBottom";
function Footer() {
	return (
		<footer className="sofax-footer-section dark-bg light-color">
			<div className="container">
				<div className="sofax-footer-top">
					<div className="row">
						<div className="col-xl-4 col-md-12">
							<div className="sofax-footer-wrap mr15">
								<Link href="/multi-page/home-ten">
									<Image src={Logo} alt="Logo" />
								</Link>
								<p>
									Chooses a web hosting service to you are renting space on server where your websites
									files and data are stored.
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu ml-70 light-color">
								<h5>Company</h5>
								<ul>
									<li>
										<Link href="/about-us">About Us</Link>
									</li>
									<li>
										<Link href="/contact-us">Contact US</Link>
									</li>
									<li>
										<Link href="/contact-us">Privacy Policy</Link>
									</li>
									<li>
										<Link href="/terms-and-condition">Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-md-4">
							<div className="sofax-footer-menu ml-50 light-color">
								<h5>Utility pages</h5>
								<ul>
									<li>
										<Link href="/contact-us">Instructions</Link>
									</li>
									<li>
										<Link href="/contact-us">Style guide</Link>
									</li>
									<li>
										<Link href="/error-page">404 Pages</Link>
									</li>
									<li>
										<Link href="/contact-us">Licenses</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-4">
							<div className="sofax-footer-menu sofax-footer-active light-color">
								<h5>Resources</h5>
								<ul>
									<li>
										<Link href="/contact-us">Articles</Link>
									</li>
									<li>
										<Link href="/faq">FAQ</Link>
									</li>
									<li>
										<Link href="/career">Careers</Link>
									</li>
									<li>
										<Link href="/contact-us">Video guide</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
}

export default Footer;
