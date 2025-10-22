import Logo from "@/public/images/logo/dbmatrix.png";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="light-version-logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
