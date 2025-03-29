"use client";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { LuMousePointer2 } from "react-icons/lu";

type Props = {
	text: string;
	accent: string;
};

const Pointer = ({ text, accent }: Props) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const bgs: { [key: string]: string } = {
		pig: "bg-pig",
		lake: "bg-lake",
		onion: "bg-onion",
	};

	const texts: { [key: string]: string } = {
		pig: "text-pig",
		lake: "text-lake",
		onion: "text-onion",
	};

	const generateRandomPosition = useCallback(() => {
		const maxX = 70;
		const maxY = 70;

		return {
			x: Math.random() * maxX * (Math.random() > 0.5 ? 1 : -1),
			y: Math.random() * maxY * (Math.random() > 0.5 ? 1 : -1),
		};
	}, []);

	useEffect(() => {
		setPosition(generateRandomPosition());

		const intervalId = setInterval(() => {
			setPosition(generateRandomPosition());
		}, 3000);

		return () => clearInterval(intervalId);
	}, [generateRandomPosition]);

	return (
		<motion.div
			className="flex absolute items-center pl-10 md:pt-5 lg:pt-10 pointer-float"
			initial={{ x: 0, y: 0 }}
			animate={{
				x: position.x,
				y: position.y,
			}}
			transition={{
				duration: 3,
				type: "tween",
				ease: [0.4, 0.0, 0.2, 1],
			}}
		>
			<LuMousePointer2 className={`text-lg mr-2 ${texts[accent]}`} />
			<div
				className={`rounded-full py-0.5 px-2 text-sm md:text-md lg:text-lg ${bgs[accent]}`}
			>
				{text}
			</div>
		</motion.div>
	);
};

export default Pointer;
