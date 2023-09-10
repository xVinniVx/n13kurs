import { type ReactNode } from "react";

export default function StaticPagesLayout({ children }: { children: ReactNode }) {
	return <div className="max-w-sm text-2xl">{children}</div>;
}
