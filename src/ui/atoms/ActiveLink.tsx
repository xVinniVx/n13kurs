"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | UrlObject;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};
export const ActiveLink = <T extends string>({
	href,
	children,
	className = "font-semibold underline-offset-4 hover:text-red-400 hover:border-b hover:border-gray-800",
	activeClassName = "border-b border-red-400",
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	//console.log("Pathname: " + pathname);
	//console.log("Href: " + href);
	const stringPathname = typeof href === "object" ? href.pathname || "" : href;
	//console.log("stringPathname: " + stringPathname);
	const isActive = exact ? pathname === stringPathname : pathname.includes(stringPathname);
	//console.log("isActive: " + isActive);
	return (
		<Link className={clsx(className, isActive && activeClassName)} href={href} role="link">
			{children}
		</Link>
	);
};

// "use client";
//
// import Link from "next/link";
// import clsx from "clsx";
// import { usePathname } from "next/navigation";
// import { type ReactNode } from "react";
//
// export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
// 	const currentPathname = usePathname();
// 	const isActive = currentPathname === href;
// 	return (
// 		<Link
// 			href={href}
// 			className={clsx(`font-semibold underline-offset-4 hover:text-red-400 hover:underline`, {
// 				underline: isActive,
// 			})}
// 		>
// 			{children}
// 		</Link>
// 	);
// };
// <Link
// 	href={href}
// 	className={clsx(
// 		`font-semibold hover:text-purple-700 hover:underline`,
// 		isActive && `text-blue-600`,
// 	)}
// />
