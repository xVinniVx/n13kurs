import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByPage, getTotalProductCount } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function ProductsPage() {
	const products = await getProductsListByPage(20, 1);
	const totalProducts = await getTotalProductCount();
	return (
		<>
			<ProductList products={products} />
			<Pagination href="/products" totalProducts={totalProducts} page={1} />
		</>
	);
}
