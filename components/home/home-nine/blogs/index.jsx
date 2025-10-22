import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import BlogCard from "./BlogCard";

import Image1 from "@/public/images/v9/thumb4v9.png";
import Image2 from "@/public/images/v9/thumb5v9.png";
import Image3 from "@/public/images/v9/thumb6v9.png";

const blogsData = [
	{
		id: 1,
		image: Image1,
		title: "Craft to compelling subject lines that get your emails",
		description: "Ensure most important words are at the beginning. 5-9 words around",
		category: "Growth",
		date: "10 July 2024",
	},
	{
		id: 2,
		image: Image2,
		title: "Designing to effective emails that stand out in a crowded",
		description: "Make your content to more readable and a less cluttere",
		category: "Email",
		date: "10 July 2024",
	},
	{
		id: 3,
		image: Image3,
		title: "Avoidingthe spam folder the best practices for email",
		description: "Confirm subscriptions with a double opt-in process to ensure th",
		category: "Email",
		date: "10 July 2024",
	},
];

function Blogs() {
	return (
		<section className="section sofax-section-padding" id="blog">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Browse our articles on marketing and growth</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="View All Articles" href="/service">
									<span className="button-wraper">View All Articles</span>
								</Link>
							</div>
						</div>
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
