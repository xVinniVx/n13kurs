import { type ProductItemType } from "@/ui/types";

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

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItemType[];
	return productsResponse.map((product) => productResponseItemToProductItemType(product));
	//return productResponseItemToProductItemType(productsResponse);
};

export const getProductById = async (id: ProductResponseItemType["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItemType;
	//return productResponse.map((product) => productResponseItemToProductItemType(product));
	return productResponseItemToProductItemType(productResponse);
	//return productsResponse.map((product) => productResponseItemToProductItemType(product));
	//lub skrótem:
	//return productsResponse.map(productResponseItemToProductItemType);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItemType,
): ProductItemType => {
	return {
		id: product.id,
		title: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		rating: {
			rate: product.rating.rate,
			count: product.rating.count,
		},
		image: product.image,
		longDescription: product.longDescription,
		oldPrice: 0,
	};
};
