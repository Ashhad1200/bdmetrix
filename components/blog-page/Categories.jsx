import Link from "next/link";
function Categories() {
	return (
		<div className="sofax-subscription-field-categories">
			<h4>Categories:</h4>
			<ul>
				<li>
					<Link href="/single-blog">Sass</Link>
				</li>
				<li>
					<Link href="/single-blog">Business</Link>
				</li>
				<li>
					<Link href="/single-blog">Marketing</Link>
				</li>
				<li>
					<Link href="/single-blog">Technology</Link>
				</li>
				<li>
					<Link href="/single-blog">Development</Link>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
