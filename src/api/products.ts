import { type ProductItemType } from "@/ui/types";

export const getProductsList = async () => {
	type ProductResponseItemType = {
		id: string;
		title: string;
		price: number;
		description: string;
		category: string;
		rating: {
			rate: number;
			count: number;
		};
		image: string;
		longDescription: string;
	};
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItemType[];

	return productsResponse.map(
		(product) =>
			({
				id: product.id,
				title: product.title,
				category: product.category,
				price: product.price,
				rating: { rate: product.rating.rate },
				image: product.image,
			}) as ProductItemType,
	);
};
