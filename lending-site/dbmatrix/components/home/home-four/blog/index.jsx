import Thumb1 from "@/public/images/v4/bloghtumb1.png";
import Thumb2 from "@/public/images/v4/bloghtumb2.png";
import Thumb3 from "@/public/images/v4/bloghtumb3.png";
import Shape12 from "@/public/images/v4/shape12.png";
import Image from "next/image";
import FadeInStagger from "../../../animation/FadeInStagger";
import BlogCard from "./BlogCard";

const blogsData = [
	{
		id: crypto.randomUUID(),
		image: Thumb1,
		category: "Advertising",
		date: "15 March 2024",
		title: "Target audience including interests behaviors and creating.",
	},
	{
		id: crypto.randomUUID(),
		image: Thumb2,
		category: "Social",
		date: "12 March 2024",
		title: "How to optimize your campaigns to find out for your success",
	},
	{
		id: crypto.randomUUID(),
		image: Thumb3,
		category: "Promotion",
		date: "10 March 2024",
		title: "A guide to sofax captivating to your audience social media",
	},
];
function Blog() {
	return (
		<section className="section sofax-section-padding bg-light position-ralatiove" id="blog">
			<div className="container">
				<div className="sofax-section-title center max-width-large2 ">
					<div className="tg-heading-subheading animation-style3">
						<h2>The latest news & tips for optimal marketing</h2>
					</div>
					<div className="sofax-blog-shapev4">
						<Image src={Shape12} alt="Shape" />
					</div>
				</div>
				<div className="row">
					{blogsData.map((blog, index) => (
						<FadeInStagger key={blog.id} index={index} className="col-lg-4">
							<BlogCard blog={blog} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Blog;
