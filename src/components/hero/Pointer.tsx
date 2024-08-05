"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuMousePointer2 } from "react-icons/lu";

type Props = {
	text: string;
	accent: string;
};

const Pointer = ({ text, accent }: Props) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const movePointer = () => {
			const x = Math.random() * 50 - 25;
			const y = Math.random() * 50 - 25;
			setPosition({ x, y });
		};

		const interval = setInterval(movePointer, 1500);
		return () => clearInterval(interval);
	}, []);

	function switchAccent(accent: string) {
		switch (accent) {
			case "pig":
				return <span className="bg-pig rounded-full py-0.5 px-2">{text}</span>;
			case "lake":
				return <span className="bg-lake rounded-full py-0.5 px-2">{text}</span>;
			case "onion":
				return (
					<span className="bg-onion rounded-full py-0.5 px-2">{text}</span>
				);
		}
	}

	return (
		<motion.div
			animate={{ x: position.x, y: position.y }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className="flex absolute items-center pl-10 md:pt-5 lg:pt-10"
		>
			<LuMousePointer2 className="text-lg mr-2" />
			<div className="text-sm md:text-md lg:text-lg">
				{switchAccent(accent)}
			</div>
		</motion.div>
	);
};

export default Pointer;
