import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList();
	//await sleep(5000);
	return (
		<div className="mx-auto my-10 max-w-screen-2xl">
			<ProductList products={products.slice(-4)} />
		</div>
	);
};
