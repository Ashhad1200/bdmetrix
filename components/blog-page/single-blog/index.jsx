import Categories from "../Categories";
import NewsLetter from "../NewsLetter";
import RecentPosts from "../RecentPosts";
import Search from "../Search";
import Tags from "../Tags";
import BlogDetails from "./BlogDetails";
function SingleBlog() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<BlogDetails />
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
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

export default SingleBlog;
