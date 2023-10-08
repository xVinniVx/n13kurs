import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByPage } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getProductsListByPage(4, 1);
	return (
		<div className="mx-auto my-10 max-w-screen-2xl" data-testid="related-products">
			{<ProductList products={products.slice(-4)} />}
		</div>
	);
};
