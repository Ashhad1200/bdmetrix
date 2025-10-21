import ArrowLeftImg from "@/public/images/blog/left-arrow.png";
import ArrowRightImg from "@/public/images/blog/right-arrow.png";
import Image from "next/image";
function Pagination() {
	return (
		<div className="sofax-navigation">
			<nav className="navigation pagination" aria-label="Posts">
				<div className="nav-links">
					<a className="next page-numbers" href="">
						<Image src={ArrowLeftImg} alt="Arrow Left" />
					</a>
					<span aria-current="page" className="page-numbers current">
						1
					</span>
					<a className="page-numbers" href="">
						2
					</a>
					<a className="page-numbers" href="">
						3
					</a>
					<a className="next page-numbers" href="">
						<Image src={ArrowRightImg} alt="arrow right" />
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Pagination;
