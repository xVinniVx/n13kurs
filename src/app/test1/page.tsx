import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export default function Page() {
	// const db = await import("db");
	// const connection = await db.connect();
	return (
		<div>
			<Link className="block font-bold hover:text-purple-700 hover:underline" href="/test2">
				Idź do test2
			</Link>
			Page 1
			<ProductCounter />
		</div>
	);
}
