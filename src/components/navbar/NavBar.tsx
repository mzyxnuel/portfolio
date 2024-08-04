"use client";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";

const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<nav className="flex items-center bg-ghost border-b-shadow border-b-xs h-16 w-full">
				<a href="/" className="ml-4 flex-grow">
					<div className="flex border-shadow border-xs rounded-full w-36 items-center">
						<div className="w-4 h-4 bg-snow rounded-full m-3" />
						<div className="text-lg pr-3">mzyxnuel</div>
					</div>
				</a>

				<div className="flex mr-4 ml-4">
					<IoMenu onClick={toggleVisibility} className="text-3xl" />
				</div>
			</nav>
			{isVisible && <Menu isVisible={isVisible} />}
		</>
	);
};

export default NavBar;
