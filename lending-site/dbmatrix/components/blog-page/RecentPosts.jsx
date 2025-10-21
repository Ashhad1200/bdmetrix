import image1 from "@/public/images/blog/blogthumb4.png";
import image2 from "@/public/images/blog/blogthumb5.png";
import image3 from "@/public/images/blog/blogthumb6.png";
import Image from "next/image";

import Link from "next/link";
const recentPostData = [
	{
		id: 1,
		image: image1,
		date: "April 13, 2024",
		title: "Six what ifs that could the transforma digital agency",
	},
	{
		id: 2,
		image: image2,
		date: "11 April, 2024",
		title: "We have been to strategy thought leader for nearly",
	},
	{
		id: 3,
		image: image3,
		date: "10 April, 2024",
		title: "This week’s top to stories agency and about it",
	},
];
function RecentPosts() {
	return (
		<div className="sofax-subscription-field-post">
			<h4>Recent Posts:</h4>
			{recentPostData.map((post) => (
				<Link href="/single-blog" key={post.id}>
					<div className="title-post-thumb">
						<div className="title-post-img">
							<Image src={post.image} alt="blog post image" />
						</div>
						<div className="title-post-content">
							<ul>
								<li>{post.date}</li>
							</ul>
							<h6>{post.title}</h6>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default RecentPosts;
