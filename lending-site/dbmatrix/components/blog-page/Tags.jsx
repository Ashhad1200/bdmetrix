import Link from "next/link";
const tagsData = ["Business", "Web", "Digital", "Development", "Technology", "Agency", "UI/UX"];
function Tags() {
	return (
		<div className="sofax-subscription-field-group">
			<h4>Popular Tags:</h4>
			{tagsData.map((tag) => (
				<Link className="sofax-default-btn pill outline-btn" key={crypto.randomUUID()} href="/">
					{tag}
				</Link>
			))}
		</div>
	);
}

export default Tags;
