import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }, { category: "boots" }, { category: "belts" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}
