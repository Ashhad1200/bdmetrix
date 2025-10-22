import Shape2 from "@/public/images/v4/shape2.png";
import Shape3 from "@/public/images/v4/shape3.png";
import Shape4 from "@/public/images/v4/shape4.png";
import Shape5 from "@/public/images/v4/shape5.png";
import Shape6 from "@/public/images/v4/shape6.png";
import Shape7 from "@/public/images/v4/shape7.png";
import Shape8 from "@/public/images/v4/shape8.png";
import Image from "next/image";

function HeroShapes() {
	return (
		<>
			<div className="hero4-shape2">
				<Image src={Shape2} alt="" />
			</div>
			<div className="hero4-shape3">
				<Image src={Shape3} alt="" />
			</div>
			<div className="hero4-shape4">
				<Image src={Shape4} alt="" />
			</div>
			<div className="hero4-shape5">
				<Image src={Shape5} alt="" />
			</div>
			<div className="hero4-shape6">
				<Image src={Shape6} alt="" />
			</div>
			<div className="hero4-shape7">
				<Image src={Shape7} alt="" />
			</div>
			<div className="hero4-shape8">
				<Image src={Shape8} alt="" />
			</div>
		</>
	);
}

export default HeroShapes;
