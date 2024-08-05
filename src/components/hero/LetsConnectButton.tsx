import { ContactLink } from "@/source";

const LetsConnectButton = () => {
	return (
		<a href={ContactLink}>
			<div className="flex items-center border-xs border-shadow gap-2 p-3 font-semibold rounded-full border border-bline text-[10px] sm:text-xs md:text-sm lg:text-base ">
				{/* Connect Icon */}
				<div className="rounded-full absolute w-2 h-2 bg-ocean lg:w-3 lg:h-3 animate-ping" />
				<div className="rounded-full w-2 h-2 bg-watermelon lg:w-3 lg:h-3" />

				<div className="hover:animate-pulse">Let's Connect</div>
			</div>
		</a>
	);
};

export default LetsConnectButton;
