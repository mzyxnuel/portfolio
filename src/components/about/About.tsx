"use client";
import { AboutText, ImagePath, Place, PrimaryInfo, SecondaryInfo } from "@/source";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

const About = () => {
	return (
		<section
			id="about"
			className="w-full max-w-4xl mx-auto px-6 py-20"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-xs text-shadow mb-8"
			>
				// About
			</motion.h2>

			<div className="flex flex-col md:flex-row items-center md:items-start gap-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="flex-shrink-0 flex items-center justify-center pt-1 rounded-full w-24 h-24 bg-snow"
				>
					<Image
						alt="memoji"
						width={96}
						height={96}
						className="rounded-full w-24 h-24"
						src={ImagePath}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-wrap gap-2">
						<span className="border-xs border-shadow rounded-full px-3 py-1 text-sm text-beetles">
							{PrimaryInfo}
						</span>
						<span className="border-xs border-shadow rounded-full px-3 py-1 text-sm text-banana">
							{SecondaryInfo}
						</span>
						<span className="border-xs border-shadow rounded-full px-3 py-1 text-sm flex items-center gap-1">
							<MdLocationOn className="text-pig" />
							{Place}
						</span>
					</div>

					<p className="text-snow/80 text-base md:text-lg leading-relaxed max-w-xl">
						{AboutText}
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
