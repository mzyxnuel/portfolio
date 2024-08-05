import { Hero, NavBar } from "@/components";

export default function main() {
	return (
		<main className="text-snow bg-ghost select-none flex flex-col items-center justify-center w-screen min-h-screen">
			<div className="sticky top-0 w-full z-10">
				<NavBar />
			</div>
			<Hero />
		</main>
	);
}
