import { Hero, NavBar } from "@/components";

export default function main() {
	return (
		<main className="text-snow bg-ghost select-none">
			<div className="sticky top-0">
				<NavBar />
			</div>
			<Hero />
		</main>
	);
}
