"use client";
import { motion } from "framer-motion";
import { LuMousePointer2 } from "react-icons/lu";
import useWander from "./useWander";

type Props = {
	text: string;
	accent: string;
};

const Pointer = ({ text, accent }: Props) => {
	const { x, y } = useWander();

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

	return (
		<motion.div
			className="flex absolute items-center pl-10 md:pt-5 lg:pt-10 pointer-float"
			style={{ x, y }}
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
