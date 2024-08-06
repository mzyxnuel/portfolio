import { Hero, NavBar, SocialBar } from "@/components";

export default function main() {
	return (
		<section className="flex flex-col items-center justify-center w-screen min-h-screen">
			<div className="sticky top-0 w-full z-10">
				<NavBar />
			</div>
			<Hero />
			<SocialBar />
		</section>
	);
}
