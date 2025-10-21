import ThumbImg from "@/public/images/v3/shape2.png";
import Image from "next/image";
import FadeInUp from "../../../animation/FadeInUp";
function HeroThumb() {
	return (
		<FadeInUp className="hero3-thumb">
			<Image src={ThumbImg} alt="ThumbImg" />
		</FadeInUp>
	);
}

export default HeroThumb;
