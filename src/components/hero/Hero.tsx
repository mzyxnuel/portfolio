import {
	ImagePath,
	Place,
	PrimaryInfo,
	PrimaryJob,
	SecondaryInfo,
	SecondaryJob,
} from "@/source";
import Image from "next/image";
import LetsConnectButton from "./LetsConnect";

const Hero = () => {
	return (
		<div className="py-24 my-auto min-h-screen">
			<div className="flex items-center justify-center">
				{/* TODO */}
				<div className="flex items-center justify-center pt-1 rounded-full w-12 h-12 bg-snow lg:w-16 lg:h-16">
					{/* Memoji */}
					<Image
						alt="memoji"
						width="60"
						height="50"
						className="rounded-full w-12 h-12 lg:w-16 lg:h-16"
						src={ImagePath}
					/>
				</div>
				<div className="p-2 pr-4 border rounded-full border-bline lg:py-4">
					{/* Hero */}
					<h1 className="text-md sm:text-xl border-xs border-shadow rounded-full pl-3 pr-3 pt-2 pb-2">
						Hello, I'm Manuel
						{/* Pointer */}
					</h1>
				</div>
			</div>
			<div className="sm:hidden">{/* Pointer */}</div>
			<div className="flex text-[10px] items-center justify-center gap-2 pr-6 sm:ml-10">
				<h1 className="sm:hidden">
					// {PrimaryInfo} <br />
					{SecondaryInfo}
				</h1>
				<h1 className="text-5xl font-semibold text-beetles md:text-6xl lg:text-8xl">
					DIGITAL
				</h1>
				<h1 className="sm:text-xs md:text-sm lg:text-base">
					// Based in <br />
					{Place}
				</h1>
			</div>
			<div className=" flex text-[10px] items-center justify-center gap-4">
				<h1 className="text-5xl font-semibold text-banana md:text-6xl lg:text-8xl">
					EXPERIENCE
				</h1>
			</div>
			<div className="flex text-[10px] items-center justify-center gap-1">
				<h1 className="text-5xl font-semibold text-accentl md:text-6xl lg:text-8xl">
					{PrimaryJob}
				</h1>
				<div>
					{/* Let's Connect Button */}
					<LetsConnectButton />
					<div>{/* Pointer */}</div>
				</div>
			</div>
			<div className="flex text-[10px] items-center justify-center gap-4 sm:mr-24">
				<h1 className="hidden sm:inline-block sm:text-xs md:text-sm lg:text-base">
					// {PrimaryInfo} <br />
					{SecondaryInfo}
					<div>{/* Pointer */}</div>
				</h1>
				<h1 className="text-5xl font-semibold text-ocean md:text-6xl lg:text-8xl">
					<span className="text-snow">&amp; </span>
					{SecondaryJob}.
				</h1>
			</div>
			<div className="pt-2">
				<h1 className="pt-2 font-medium leading-5 text-center text-md sm:text-xl sm:pt-4 md:text-2xl lg:text-3xl">
					I create a digital experience that borders on <br />
					<span className="text-beetles">efficiency</span>,{" "}
					<span className="text-banana">aesthetics</span> and{" "}
					<span className="text-ocean">functionality</span>.
				</h1>
			</div>
		</div>
	);
};

export default Hero;
