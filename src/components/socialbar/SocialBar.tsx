"use client";
import { ContactLink, SocialLinks } from "@/source";
import type { Link } from "@/types";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";

const SocialBar = () => {
	return (
		<nav className="w-full h-16 border-t-xs border-t-shadow flex items-center justify-between">
			<div className="text-xs ml-4">
				// Code, Plan, <br />
				Engage
			</div>

			<div className="border-xs border-shadow rounded-full flex justify-center items-center gap-2 p-1 sm:ml-32">
				{SocialLinks.map((link: Link) => (
					<motion.a
						whileHover={{
							y: -3,
						}}
						transition={{ duration: 0.2 }}
						href={link.href}
						key={link.name}
						className="flex items-center text-3xl p-1 bg-snow rounded-full text-ghost"
					>
						{link.icon && <link.icon />}
					</motion.a>
				))}
			</div>

			<a
				href={ContactLink}
				className="border-xs border-shadow rounded-full justify-end mr-4"
			>
				<div className="flex items-center">
					<MdOutlineEmail className="bg-snow text-shadow rounded-full text-4xl p-1 m-1 border-xs border-shadow" />
					<div className="pr-2 hidden sm:block">
						{ContactLink.split(":")[1]}
					</div>
				</div>
			</a>
		</nav>
	);
};

export default SocialBar;
