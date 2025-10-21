import { DMSans, clashGrotesk, inter } from "./fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
import "react-modal-video/css/modal-video.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Bootstrap js
import ImportBsJS from "@/components/BootstrapClient";

// ScrollToTop
import ScrollToTop from "@/hooks/ScrollToTop";
// main css
import "../public/css/app.css";
import "../public/css/main.css";
import "../public/css/mobile-nav.css";

export const metadata = {
  title: "DBMatrix || Professional IT Services & Software Solutions",
  description:
    "DBMatrix - Leading IT services company providing software development, cloud solutions, and technology consulting for businesses worldwide",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.variable} ${DMSans.variable} ${clashGrotesk.variable}`}
      >
        <ImportBsJS />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
