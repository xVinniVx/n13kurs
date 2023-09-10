import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "N13M - Kurs",
	description: "Abrakadabra - opis sklepu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<nav className="bg-amber-200">
					<ul className="flex justify-center gap-4 py-3">
						<li>
							<ActiveLink href="/">Start</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/products">Produkty</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="sm:py-18 mx-auto flex w-full max-w-screen-2xl flex-grow flex-col bg-gray-200 py-8 sm:px-6 lg:max-w-screen-2xl">
					{children}
				</section>
				<footer>
					<p className="py-4 text-center text-gray-500">To jest footer 2023</p>
				</footer>
			</body>
		</html>
	);
}
