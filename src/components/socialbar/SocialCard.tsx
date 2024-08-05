import type { Link } from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialCard = ({ name, href }: Link) => {
	function iconSwitch(name: string) {
		switch (name) {
			case "github":
				return <FaGithub />;
			case "linkedin":
				return <FaLinkedin />;
		}
	}

	return (
		<a
			href={href}
			className="flex border-shadow hover:border-sky border-xs items-center m-4 rounded-md h-16"
		>
			<div className="ml-4 flex-grow">{name}</div>
			<div className="mr-4 text-xl">{iconSwitch(name)}</div>
		</a>
	);
};

export default SocialCard;
