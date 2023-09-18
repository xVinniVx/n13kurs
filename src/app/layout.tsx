import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import React from "react";
import { Navbar } from "@/ui/organisms/NavBar";
//import { getProductsList } from "@/api/products";
import { pageDescription, pageTitle } from "@/app/globalVariables";

const jost = Jost({ subsets: ["latin-ext"], display: "swap" });

export const metadata: Metadata = {
	title: pageTitle,
	description: pageDescription,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// const products = await getProductsList();
	return (
		<html lang="pl">
			<body className={jost.className}>
				<Navbar />
				{/*<nav className="bg-amber-200">*/}
				{/*	<ul className="flex justify-center gap-4 py-3">*/}
				{/*		<li>*/}
				{/*			<ActiveLink href="/">Start</ActiveLink>*/}
				{/*		</li>*/}
				{/*		<li>*/}
				{/*			<ActiveLink href="/products">Produkty</ActiveLink>*/}
				{/*		</li>*/}
				{/*	</ul>*/}
				{/*</nav>*/}
				<div className="mx-auto max-w-screen-2xl">{children}</div>
				<footer>
					<p className="py-4 text-center text-gray-500">To jest footer 2023</p>
				</footer>
			</body>
		</html>
	);
}
