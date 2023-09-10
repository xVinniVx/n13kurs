export const ProductCardImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<a href="#">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full max-h-80 w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</a>
	);
};
