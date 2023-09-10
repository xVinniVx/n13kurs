import Link from "next/link";

export default async function BlogPage({ params }: { params: { pathname: string[] } }) {
	const pathname = params.pathname?.join("/") ?? [];
	return (
		<div>
			<h1>Blog page</h1>
			<Link
				prefetch={true}
				className="block font-bold hover:text-purple-700 hover:underline"
				href="/test2"
			>
				Idź do test2
			</Link>
			{pathname}
		</div>
	);
}
