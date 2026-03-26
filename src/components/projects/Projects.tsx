"use client";
import { Projects as ProjectsData } from "@/source";
import type { Project } from "@/types";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full max-w-4xl mx-auto px-6 py-20"
		>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="text-xs text-shadow mb-8"
			>
				// Projects
			</motion.h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{ProjectsData.map((project: Project, i: number) => (
					<motion.a
						key={project.name}
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: i * 0.1 }}
						whileHover={{ y: -4 }}
						className="border-xs border-shadow rounded-2xl p-5 flex flex-col gap-3 group"
					>
						<div className="flex items-center justify-between">
							<h3 className="text-snow font-semibold text-lg">{project.name}</h3>
							<FiArrowUpRight className="text-shadow text-xl transition-colors group-hover:text-beetles" />
						</div>
						<p className="text-snow/60 text-sm leading-relaxed">
							{project.description}
						</p>
						<div className="flex flex-wrap gap-2 mt-auto pt-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="text-xs border-xs border-shadow rounded-full px-2 py-0.5 text-beetles"
								>
									{tag}
								</span>
							))}
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
};

export default Projects;
