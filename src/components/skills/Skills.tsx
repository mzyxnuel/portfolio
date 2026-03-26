"use client";
import { Skills as SkillsData } from "@/source";
import type { Skill } from "@/types";
import { motion } from "framer-motion";

const colorMap: Record<string, string> = {
	sky: "text-sky",
	lake: "text-lake",
	snow: "text-snow",
	ocean: "text-ocean",
	banana: "text-banana",
	pig: "text-pig",
	beetles: "text-beetles",
	watermelon: "text-watermelon",
	onion: "text-onion",
};

const Skills = () => {
	return (
		<section className="w-full max-w-4xl mx-auto px-6 py-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-xs text-shadow mb-8"
			>
				// Skills
			</motion.h2>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
				{SkillsData.map((skill: Skill, i: number) => (
					<motion.div
						key={skill.name}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						whileHover={{ y: -4 }}
						className="border-xs border-shadow rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default"
					>
						<skill.icon
							className={`text-3xl ${colorMap[skill.color] ?? "text-snow"}`}
						/>
						<span className="text-xs text-snow/70">{skill.name}</span>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Skills;
