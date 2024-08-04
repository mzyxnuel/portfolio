import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "mzyxnuel",
	description: "manuel's personal website",
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
			<body>{children}</body>
		</html>
	);
}
