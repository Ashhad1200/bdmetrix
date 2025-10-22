import Arrow from "@/public/images/v1/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
function BlogCard({ blog: { title, category, date, image } }) {
	return (
		<div className="sofax-blog-wrap-v4">
			<div className="sofax-blog-img">
				<Link href="/single-blog">
					<Image src={image} alt="blog thumb" />
				</Link>
			</div>
			<Link href="/single-blog">
				<div className="sofax-blog-content">
					<div className="sofax-blog-meta">
						<div className="blog-btn">{category}</div>
						<ul>
							<li>{date}</li>
						</ul>
					</div>
					<h4>{title}</h4>
					<div className="sofax-icon-btn  sofax-blog-icon-btn">
						Learn More <Image src={Arrow} alt="arrow" />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default BlogCard;
