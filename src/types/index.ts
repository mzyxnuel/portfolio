import type { IconType } from "react-icons";

export type Link = {
	name: string;
	href: string;
	icon?: IconType;
};

export type Skill = {
	name: string;
	icon: IconType;
	color: string;
};

export type Project = {
	name: string;
	description: string;
	tags: string[];
	href: string;
};
