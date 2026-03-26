import type { Link, Project, Skill } from "@/types";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import {
	SiDocker,
	SiGit,
	SiGo,
	SiKubernetes,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRust,
	SiSpotify,
	SiTypescript,
	SiWakatime,
} from "react-icons/si";

export const ImagePath = "/memoji.webp";
export const PrimaryInfo = "Backend Developer";
export const SecondaryInfo = "Frontend Developer";
export const Place = "Treviso, Italy";
export const PrimaryJob = "DEVELOPER";
export const SecondaryJob = "MANAGER";
export const FirstPointer = "Product";
export const SecondPointer = "Dev";
export const ThirdPointer = "mzyxnuel";
export const ContactLink = "mailto:sossai-m@proton.me";

export const NavigationLinks: Link[] = [
	{
		name: "Home",
		href: "/",
		icon: RiHome2Line,
	},
	{
		name: "About",
		href: "#about",
		icon: FaRegAddressCard,
	},
	{
		name: "Projects",
		href: "#projects",
		icon: MdOutlineWorkOutline,
	},
];

export const AboutText =
	"Sono Manuel Sossai, uno sviluppatore con base a Treviso, Italia. Mi occupo sia di backend che di frontend, con una forte attenzione all'efficienza, all'estetica e alla funzionalità. Amo costruire sistemi solidi e interfacce pulite che fanno la differenza nell'esperienza digitale.";

export const Skills: Skill[] = [
	{ name: "TypeScript", icon: SiTypescript, color: "sky" },
	{ name: "React", icon: SiReact, color: "lake" },
	{ name: "Next.js", icon: SiNextdotjs, color: "snow" },
	{ name: "Go", icon: SiGo, color: "ocean" },
	{ name: "Python", icon: SiPython, color: "banana" },
	{ name: "Rust", icon: SiRust, color: "pig" },
	{ name: "PostgreSQL", icon: SiPostgresql, color: "beetles" },
	{ name: "Docker", icon: SiDocker, color: "lake" },
	{ name: "Kubernetes", icon: SiKubernetes, color: "beetles" },
	{ name: "Git", icon: SiGit, color: "watermelon" },
];

export const Projects: Project[] = [
	{
		name: "Portfolio",
		description:
			"Il mio sito personale — costruito con Next.js, Tailwind CSS e Framer Motion per un'esperienza fluida e moderna.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
		href: "https://github.com/mzyxnuel/portfolio",
	},
];

export const SocialLinks: Link[] = [
	{
		name: "github",
		href: "https://github.com/mzyxnuel",
		icon: IoLogoGithub,
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/sossai-manuel",
		icon: IoLogoLinkedin,
	},
	{
		name: "wakatime",
		href: "https://wakatime.com/@mzyxnuel",
		icon: SiWakatime,
	},
	{
		name: "spotify",
		href: "https://open.spotify.com/user/314izk2pxjhih3ykyu43lzudxjua?si=57697de090804d2f",
		icon: SiSpotify,
	},
];
