import { links } from "@/source";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";

type Props = {
	isVisible: boolean;
};

const Menu = ({ isVisible }: Props) => {
	function iconSwitch(name: string): ReactNode {
		switch (name) {
			case "Home":
				return <RiHome2Line />;
			case "About":
				return <FaRegAddressCard />;
			case "Projects":
				return <MdOutlineWorkOutline />;
		}
	}

	return (
		<motion.div
			className="border-b-shadow border-b-xs"
			initial={{ opacity: 0 }}
			animate={{ opacity: isVisible ? 1 : 0 }}
		>
			<div className="bg-ghost w-full">
				{links.map(({ name, href }) => (
					<a href={href} key={name}>
						<motion.div
							className="flex border-shadow hover:border-sky border-xs items-center text-lg m-4 rounded-md h-16"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 20,
							}}
						>
							<div className="ml-4 flex-grow">{name}</div>
							<div className="mr-4 text-xl">{iconSwitch(name)}</div>
						</motion.div>
					</a>
				))}
			</div>
		</motion.div>
	);
};

export default Menu;