export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	console.log(params.category);
	console.log("x ");
	return [];
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			Produkty z kategorii {params.category} i strony {params.pageNumber}
		</h1>
	);
}
