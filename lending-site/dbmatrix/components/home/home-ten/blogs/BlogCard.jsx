import Icon1 from "@/public/images/v9/icon7v9.png";
import Icon2 from "@/public/images/v9/icon8v9.png";
import Link from "next/link";
function BlogCard({ blog: { image, date, title, description, category } }) {
	return (
		<div className="sofax-blog-wrap-v4  sofax-blog-wrap-v9">
			<div className="sofax-blog-img">
				<Link href="/single-blog">
					<img src={image} alt="blog image" />
				</Link>
			</div>
			<Link href="/single-blog">
				<div className="sofax-blog-contentv9 blog-v7">
					<div className="sofax-blog-metav9 ">
						<div className="blog-btn-icon-wrap">
							<div className="market-iconv9">
								<img src={Icon1} alt="Icon" />
							</div>
							<div className="market-contentv9">
								<p>{category}</p>
							</div>
						</div>
						<div className="blog-btn-icon-wrap">
							<div className="market-iconv9">
								<img src={Icon2} alt="Icon" />
							</div>
							<div className="market-contentv9">
								<div className="market-contentv9">
									<ul>
										<li>{date}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<h4>{title}</h4>
					<p>{`${description}...`}</p>
					<div className="sofax-icon-btn  sofax-blog-icon-btn blog-versionv7">
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
