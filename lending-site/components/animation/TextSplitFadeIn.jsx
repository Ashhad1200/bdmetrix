"use client";
import { SplitText } from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";
import { memo } from "react";
const LetterWrapper = ({ children, countIndex }) => {
	const animationVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				ease: "easeOut",
				duration: 1,
				delay: 0.025 * countIndex,
			},
		},
	};

	return (
		<motion.span variants={animationVariants} initial="initial" whileInView="animate">
			{children}
		</motion.span>
	);
};
const MemoizedLetterWrapper = memo(LetterWrapper);

function TextSplitFadeIn({ children }) {
	const MemoizedLetterWrapper = memo(LetterWrapper);

	return <SplitText LetterWrapper={MemoizedLetterWrapper}>{children}</SplitText>;
}

export default TextSplitFadeIn;
