import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "mzyxnuel",
	description: "manuel's personal website",
	category: "personal website portfolio",
	keywords: [
		"web developer",
		"software engineer",
		"portfolio",
		"personal website",
		"backend developer",
		"frontend developer",
		"sossai",
		"manuel",
		"sossai manuel",
		"mzyxnuel",
	],
};

const hanken = Hanken_Grotesk({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={hanken.className}>
			<body className="text-snow bg-ghost select-none overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
