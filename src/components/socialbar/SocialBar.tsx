"use client";
import { ContactLink, SocialLinks } from "@/source";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { SiWakatime } from "react-icons/si";

const SocialBar = () => {
	function switchIcon(name: string) {
		switch (name) {
			case "github":
				return <IoLogoGithub />;

			case "linkedin":
				return <IoLogoLinkedin />;

			case "wakatime":
				return <SiWakatime />;
		}
	}

	return (
		<nav className="w-full h-16 border-t-xs border-t-shadow flex items-center justify-between">
			<div className="text-xs ml-4">
				// Code, Plan, <br />
				Engage
			</div>

			<div className="border-xs border-shadow rounded-full flex justify-center items-center gap-2 p-1 sm:ml-32">
				{SocialLinks.map((link) => (
					<motion.a
						whileHover={{
							y: -3,
						}}
						transition={{ duration: 0.2 }}
						key={link.name}
						href={link.href}
						className="flex items-center text-3xl p-1 bg-snow rounded-full text-ghost"
					>
						{switchIcon(link.name)}
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