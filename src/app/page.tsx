import { Hero, NavBar } from "@/components";

export default function main() {
	return (
		<main className="text-snow bg-ghost select-none flex flex-col items-center justify-center w-screen min-h-screen mx-auto">
			<div className="sticky top-0 w-full">
				<NavBar />
			</div>
			<Hero />
		</main>
	);
}
