import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../animation/FadeInUp";

function SingleTeamMember({ member: { image, title, name, className } }) {
	return (
		<Link href="/single-team">
			<div className={`sofax-team-member-wrap ${className}`}>
				<FadeInUp className="sofax-team-member-img">
					<Image src={image} alt="team member" />
				</FadeInUp>
				<div className="sofax-team-member-content">
					<h4>{name}</h4>
					<p>{title}</p>
				</div>
			</div>
		</Link>
	);
}

export default SingleTeamMember;
