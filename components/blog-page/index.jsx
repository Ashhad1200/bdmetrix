import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import blogThumb1 from "@/public/images/blog/blogthumb1.png";
import blogThumb2 from "@/public/images/blog/blogthumb2.png";
import blogThumb3 from "@/public/images/blog/blogthumb3.png";

import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

const blogData = [
	{
		id: 1,
		image: blogThumb1,
		category: "Technology",
		date: "April 13, 2024",
		title: "Optimizing your online store for a maximum to sales impact your business to the world.",
		description:
			"Optimizing your online store for maximum sales impact and exposure involves a multifaceted approach & incorporating a blog can be a crucial aspect.",
	},
	{
		id: 2,
		image: blogThumb2,
		category: "Business",
		date: "11 April 2024",
		title: "We’re here to explain how data analytics with sofax can help to grow your business.",
		description:
			"Businesses better understand their customer base by segmenting them based on various criteria such as demographics, purchasing behavior, and preferences.",
	},
	{
		id: 3,
		image: blogThumb3,
		category: "Agency",
		date: "10 April 2024",
		title: "The importance of logo design in branding strategies development with logo design.",
		description:
			"A logo is often the first point of contact between a company & its audience. It’s the visual representation of the brand & sets the tone for how the brand is perceived.",
	},
];
function Blog() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="sofax-inner-blog-wrap" key={blog.id} index={index}>
								<BlogCard blog={blog} />
							</FadeInStagger>
						))}
						<Pagination />
					</div>
					<div className="col-lg-4">
						<div className="sofax-inner-blog-sidebar-menu">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
							<NewsLetter />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blog;
