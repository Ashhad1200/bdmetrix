import LogoWhite from "@/public/images/logo/dbmatrix.png";
import Image from "next/image";
import Link from "next/link";
import CopyRight from "./CopyRight";
function Footer() {
  return (
    <footer className="sofax-footer-section">
      <div className="container">
        <div className="sofax-footer-top">
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="sofax-footer-wrap mr15">
                <Link href="/multi-page/home-four">
                  <Image src={LogoWhite} alt="logo" />
                </Link>
                <p>
                  We are a branding agency that works to help companies grow
                  digitally. We have a successful track record of working with
                  various organizations.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div className="sofax-footer-menu ml-70">
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
              <div className="sofax-footer-menu ml-50">
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
              <div className="sofax-footer-menu sofax-footer-active">
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
        <CopyRight />
      </div>
    </footer>
  );
}

export default Footer;
