import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog: { image, date, title, description, category } }) {
	return (
		<div className="sofax-blog-wrap-v4">
			<div className="sofax-blog-img">
				<Link href="/single-blog">
					<Image src={image} alt="blog image" />
				</Link>
			</div>
			<Link href="/single-blog">
				<div className="sofax-blog-content blog-v7">
					<div className="sofax-blog-meta">
						<div className="blog-btn">{category}</div>
						<ul>
							<li>{date}</li>
						</ul>
					</div>
					<h4>{title}</h4>
					<p>{`${description}...`}</p>
					<div className="sofax-icon-btn sofax-blog-icon-btn blog-versionv7">
						Read More
						<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 1L19 8M19 8L12 15M19 8L1 8"
								stroke="#0E0E0E"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default BlogCard;
