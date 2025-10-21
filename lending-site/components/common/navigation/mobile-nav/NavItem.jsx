/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";
const NavItem = ({ items, depthLevel, showMenu, setShowMenu, onePage }) => {
	const [dropdown, setDropdown] = useState(false);

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	const animationVariants = {
		initial: {
			rotate: 0,
		},
		animate: () => {
			if (dropdown) {
				return {
					rotate: -180,
					transition: {
						// delay: 0,
						duration: 0.25,
					},
				};
			}
		},
	};

	return items.submenu ? (
		<li className="nav-item nav-item-has-children" onClick={closeDropdown}>
			<button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={(e) => toggleDropdown(e)}>
				{items.title}

				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					width="16"
					height="16"
					className="arrow-down-icon"
					variants={animationVariants}
					initial="initial"
					animate="animate"
				>
					<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
				</motion.svg>
			</button>
			{dropdown && <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />}
		</li>
	) : (
		<li className="nav-item" onClick={closeDropdown}>
			{onePage ? <a href={items.url}>{items.title}</a> : <Link href={`/${items.url}`}>{items.title}</Link>}
		</li>
	);
};

export default NavItem;
