export const ProductCardImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="h-72">
			<img
				alt={alt}
				src={src}
				className="h-full max-h-96 w-full object-contain object-center transition-transform hover:scale-105"
			/>
		</div>
	);
};
