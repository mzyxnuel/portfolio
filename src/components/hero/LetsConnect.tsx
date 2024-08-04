const LetsConnectButton = () => {
	return (
		<div className="rounded-full w-2 h-2 bg-watermelon lg:w-4 lg:h-4">
			<div className="flex items-center justify-center gap-2 p-3 font-semibold rounded-full border border-bline text-[10px] sm:text-xs md:text-sm lg:text-base md:py-3 lg:py-4">
				<div className="relative mb-0.5 z-10">
					<div className="absolute w-2 h-2 rounded-full mt-0.5 bg-green sm:w-3 sm:h-3 md:h-4 md:w-4 flex items-center justify-center" />
					<div className="w-2 h-2 rounded-full mt-0.5 bg-green sm:w-3 sm:h-3 md:h-4 md:w-4 animate-ping" />
				</div>
				{/* TODO */}
				<a className="z-10" href="/ContactMe">
					Let's Connect
				</a>
			</div>
		</div>
	);
};

export default LetsConnectButton;
