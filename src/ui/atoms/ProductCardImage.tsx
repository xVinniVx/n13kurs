export const ProductCardImage = ({ src, alt }: { src: string; alt: string }) => {
	const imageUrl = "/products/" + src;
	return (
		<div className="h-72">
			<img
				alt={alt}
				src={imageUrl}
				width="500"
				height="500"
				className="h-full max-h-96 w-full object-contain object-center transition-transform hover:scale-105"
			/>
		</div>
	);
};
