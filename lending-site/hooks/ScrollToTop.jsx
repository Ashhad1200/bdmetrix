"use client";
import ArrowTop from "@/public/images/arrowtop.png";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ScrollToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 700) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		showTopBtn && (
			<div className="paginacontainer">
				<div className="progress-wrap" onClick={goToTop}>
					<svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
						<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
					</svg>
					<div className="top-arrow">
						<Image src={ArrowTop} alt="arrow top" />
					</div>
				</div>
			</div>
		)
	);
}
