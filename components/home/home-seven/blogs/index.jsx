import image1 from "@/public/images/v7/image6v7.png";
import image2 from "@/public/images/v7/image7v7.png";
import image3 from "@/public/images/v7/image8v7.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import BlogCard from "./BlogCard";

const blogsData = [
	{
		id: 1,
		image: image1,
		category: "Content",
		date: "13 june 2024",
		title: "Using AI - Generated content from our saas better maketing",
		description: "Includes personalized emails, blog posts & social media updates",
	},
	{
		id: 2,
		image: image2,
		category: "AI Tools",
		date: "11 june 2024",
		title: "Our Ai softwere revolutionizes your content marketing",
		description: "Includes personalized emails, blog posts & social media updates",
	},
	{
		id: 3,
		image: image3,
		category: "Marketing",
		date: "10 june 2024",
		title: "Our Ai softwere revolutionizes your content marketing",
		description: "Includes personalized emails, blog posts & social media updates",
	},
];

function Blogs() {
	return (
		<section className="section sofax-section-padding bg-light" id="blog">
			<div className="container">
				<div className="sofax-section-title center max-width-700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Latest trends & tips in AI consulting</h2>
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

export default Blogs;
