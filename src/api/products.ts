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

// type Product = {
// 	// Definiuj strukturę obiektu Product zgodnie z danymi z API
// 	// Na przykład:
// 	id: number;
// 	name: string;
// 	// itd.
// };

type ApiResponse = {
	products: ProductResponseItemType[]; // Zakładam, że odpowiedź zawiera pole 'products' typu Product[]
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

export const getProductsListByPage = async (quantity: number, page: number) => {
	const offset = page - 1;
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${quantity}&offset=${offset}`,
	);
	const productsResponse = (await res.json()) as ProductResponseItemType[];
	return productsResponse.map((product) => productResponseItemToProductItemType(product));
};

export const getTotalProductCount = async () => {
	// try {
	let totalProductCount = 0;
	let offset = 0;
	const take = 500; // Ilość produktów do pobrania za każdym razem
	while (true) {
		const response = await fetch(
			`https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`,
		);
		//console.log(response);
		const data: ApiResponse = (await response.json()) as ApiResponse; // Przetwarzanie odpowiedzi jako JSON z określonym typem ApiResponse
		//console.log(data);
		const numberOfProperties = Object.keys(data).length;
		//console.log("pobrano z api: " + numberOfProperties);

		if (numberOfProperties === 0) {
			break;
		}
		totalProductCount += numberOfProperties;
		offset += take;
	}
	return totalProductCount;
	//console.log(`Liczba dostępnych produktów: ${totalProductCount}`);
	// } catch (error) {
	// 	console.error("Wystąpił błąd podczas pobierania danych:", error);
	// }
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
