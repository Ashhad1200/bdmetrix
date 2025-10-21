import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-three-site-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="header-three-btn" href="/sign-in">
				Login
			</Link>
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Sign Up Free" href="/sign-up">
				<span className="button-wraper">Sign Up Free</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
