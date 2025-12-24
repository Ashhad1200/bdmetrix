import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../layout/footers/footer";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import error_shape from "@assets/img/error/error-shape.png";
import error_img from "@assets/img/error/404.png";


const index = () => {
  return (
    <>
      <SEO pageTitle={"Oops.! Page Not Found!"} />
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center">
                      <Image src={error_img} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">Oops! Page Not Found</h4>
                      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>

                      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                        <h5 style={{ marginBottom: '1rem', color: '#6c757d' }}>Try these helpful links:</h5>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                          <Link href="/" style={{ color: '#0066FF', textDecoration: 'none' }}>Home</Link>
                          <span style={{ color: '#dee2e6' }}>|</span>
                          <Link href="/about" style={{ color: '#0066FF', textDecoration: 'none' }}>About Us</Link>
                          <span style={{ color: '#dee2e6' }}>|</span>
                          <Link href="/service" style={{ color: '#0066FF', textDecoration: 'none' }}>Services</Link>
                          <span style={{ color: '#dee2e6' }}>|</span>
                          <Link href="/contact" style={{ color: '#0066FF', textDecoration: 'none' }}>Contact</Link>
                        </div>
                      </div>

                      <Link
                        className="tp-btn-inner alt-color-black"
                        href="/"
                      >
                        <span className="tp-btn">Back To Home</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default index;
