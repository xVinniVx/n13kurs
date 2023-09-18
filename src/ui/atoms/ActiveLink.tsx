"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const currentPathname = usePathname();
	const isActive = currentPathname === href;
	return (
		<Link
			href={href}
			className={clsx(`font-semibold underline-offset-4 hover:text-red-400 hover:underline`, {
				underline: isActive,
			})}
		>
			{children}
		</Link>
	);
};
// <Link
// 	href={href}
// 	className={clsx(
// 		`font-semibold hover:text-purple-700 hover:underline`,
// 		isActive && `text-blue-600`,
// 	)}
// />
