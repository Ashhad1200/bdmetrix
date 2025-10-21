import Logo from "@/public/images/logo/dbmatrix.png";
import Image from "next/image";
import Link from "next/link";
function HeaderTwo() {
	return (
		<div className="sofax-form-header">
			<div className="container">
				<div className="sofax-form-header-logo">
					<Link href="/">
						<Image src={Logo} alt="logo" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HeaderTwo;
