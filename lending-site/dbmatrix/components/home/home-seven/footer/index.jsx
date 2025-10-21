import LogoDark from "@/public/images/logo/dbmatrix.png";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="sofax-footer-section">
      <div className="container">
        <div className="sofax-footer-top">
          <div className="row">
            <div className="col-md-3">
              <div className="sofax-footer-menu">
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
                    <Link href="//terms-and-condition">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sofax-footer-menu ml-50">
                <h5>Utility Pages</h5>
                <ul>
                  <li>
                    <Link href="/contact-us">Instructions</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Style Guide</Link>
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
            <div className="col-md-3">
              <div className="sofax-footer-menu ml-90">
                <h5>Product</h5>
                <ul>
                  <li>
                    <Link href="/contact-us">Integration</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Customers</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Help Center</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sofax-footer-menu sofax-footer-active">
                <h5>Resource</h5>
                <ul>
                  <li>
                    <Link href="/contact-us">Releases</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Sales</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sofax-footer3-wrap">
          <div className="sofax-footer3-logo">
            <Link href="/multi-page/home-three">
              <Image src={LogoDark} alt="logo" />
            </Link>
          </div>
          <div className="sofax-footer3-text">
            <p>© 2024 Mthemeus All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
