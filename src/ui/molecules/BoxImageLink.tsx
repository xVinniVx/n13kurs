export const BoxImageLink = ({
	image,
	slug,
	title,
}: {
	image: string;
	slug: string;
	title: string;
}) => {
	return (
		<div className="relative overflow-hidden">
			<img
				src={`img/${image}`}
				alt="cat"
				className="transition-transform duration-300 hover:scale-105"
			/>
			<a
				href={`/collections/${slug}`}
				className="absolute bottom-8 left-8 mx-auto block w-auto border border-black bg-black px-5 py-2 text-2xl uppercase text-gray-300 shadow-lg hover:bg-white hover:text-black"
			>
				{title}
			</a>
		</div>
	);
};
