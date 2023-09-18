export const SectionHeader = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className="mx-auto my-10 max-w-screen-2xl border-b border-b-gray-300 pb-1">
			<h2 className="text-4xl tracking-tighter">{title}</h2>
			<p className="py-3 text-gray-500">{text}</p>
		</div>
	);
};
