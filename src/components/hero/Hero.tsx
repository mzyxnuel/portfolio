import {
	FirstPointer,
	ImagePath,
	Place,
	PrimaryInfo,
	PrimaryJob,
	SecondPointer,
	SecondaryInfo,
	SecondaryJob,
	ThirdPointer,
} from "@/source";
import Image from "next/image";
import LetsConnectButton from "./LetsConnectButton";
import Pointer from "./Pointer";

const Hero = () => {
	return (
		<div className="py-14 my-auto">
			<div className="flex items-center justify-center">
				<div className="flex items-center justify-center pt-1 rounded-full w-12 h-12 bg-snow lg:w-16 lg:h-16">
					{/* Memoji */}
					<Image
						alt="memoji"
						width="60"
						height="60"
						className="rounded-full w-12 h-12 lg:w-16 lg:h-16"
						src={ImagePath}
					/>
				</div>
				<div className="p-2 pr-4 border rounded-full border-bline lg:py-4">
					{/* Hero */}
					<h1 className="text-md sm:text-xl border-xs border-shadow rounded-full py-2 px-3">
						Hello, I'm Manuel
						<Pointer text={FirstPointer} accent="pig" />
					</h1>
				</div>
			</div>
			<div className="sm:hidden">
				<Pointer text={SecondPointer} accent="lake" />
			</div>
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
			<div className=" flex items-center justify-center gap-4">
				<h1 className="text-5xl font-semibold text-banana md:text-6xl lg:text-8xl">
					EXPERIENCE
				</h1>
			</div>
			<div className="flex text-[10px] items-center justify-center gap-1">
				<h1 className="text-5xl font-semibold text-accentl md:text-6xl lg:text-8xl">
					{PrimaryJob}
				</h1>
				{/* Let's Connect Button */}
				<LetsConnectButton />
				<Pointer text={ThirdPointer} accent="onion" />
			</div>
			<div className="flex text-[10px] items-center justify-center gap-4 sm:mr-24">
				<h1 className="hidden sm:inline-block sm:text-xs md:text-sm lg:text-base">
					// {PrimaryInfo} <br />
					{SecondaryInfo}
					<div className="hidden sm:inline-block">
						<Pointer text={SecondPointer} accent="lake" />
					</div>
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
					<span className="text-banana">aesthetic</span> and{" "}
					<span className="text-ocean">functionality</span>.
				</h1>
			</div>
		</div>
	);
};

export default Hero;
