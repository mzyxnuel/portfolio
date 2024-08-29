import type { Link } from "@/types";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { SiSpotify, SiWakatime } from "react-icons/si";

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

export const SocialLinks: Link[] = [
	{
		name: "github",
		href: "https://github.com/mzyxnuel",
		icon: IoLogoGithub,
	},
	{
		name: "linkedin",
		href: "",
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
