import thumb1 from "@/public/images/blog/thumb1.png";
import thumb2 from "@/public/images/blog/thumb2.png";
import Image from "next/image";
import Link from "next/link";

const commentsData = [
	{
		id: 1,
		author: "Ricky Smith",
		date: "June 21, 2024",
		avatar: thumb1,
		comment:
			"It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.",
		children: false,
	},
	{
		id: 2,
		author: "Ricky Smith",
		date: "June 21, 2024",
		avatar: thumb1,
		comment:
			"It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.",
		children: true,
	},
	{
		id: 3,
		author: "Joshua Jones",
		date: "September 22, 2024",
		avatar: thumb2,
		comment:
			"It is a long established fact that a reader will be distra readable content of a page when looking its layout. The point of using.",
		children: false,
	},
];
function CommentList() {
	return (
		<div className="sofax-post-comment">
			<h3>Comments:</h3>
			<ul>
				{commentsData.map((item) => (
					<li className={`${item.children && "children"}`} key={item.id}>
						<div className="sofax-post-comment-wrap">
							<div className="sofax-post-comment-thumb">
								<Image src={item.avatar} alt={item.author} />
							</div>
							<div className="sofax-post-comment-data">
								<div className="sofax-post-comment-data-wrap">
									<div className="sofax-post-comment-text">
										<strong>{item.author}</strong>
										<span>{item.date}</span>
									</div>
									<div className="sofax-post-comment-text">
										<ul>
											<li>
												<Link href="/blog">Reply</Link>
											</li>
										</ul>
									</div>
								</div>
								<p>{item.comment}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CommentList;
