"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";

const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const variants = {
		open: { scale: 1, opacity: 1 },
		closed: { scale: 0, opacity: 0 },
	};

	return (
		<>
			<nav className="flex items-center bg-ghost border-b-shadow border-b-xs h-16 ">
				<a href="/" className="ml-4 ">
					<div className="flex border-shadow border-xs rounded-full items-center ">
						<div className="w-4 h-4 bg-snow rounded-full m-3" />
						<div className="text-lg pr-3">mzyxnuel</div>
					</div>
				</a>

				{/* Menu */}
				<motion.div
					onClick={toggleVisibility}
					animate={isVisible ? "closed" : "opened"}
					variants={variants}
					transition={{ duration: 0.5 }}
					className="absolute top-5 right-4"
				>
					<IoMenu className="text-2xl" />
				</motion.div>
				<motion.div
					onClick={toggleVisibility}
					animate={isVisible ? "opened" : "closed"}
					variants={variants}
					transition={{ duration: 0.5 }}
					className="absolute top-5 right-4"
				>
					<IoClose className="text-2xl" />
				</motion.div>
			</nav>
			{isVisible && <Menu isVisible={isVisible} />}
		</>
	);
};

export default NavBar;
