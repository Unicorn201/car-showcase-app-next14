import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Showroom for your fav Cars",
	description: "Discover yhe best cars in the world. by Gyoza - World Hacker",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="relative">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
