import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByPage } from "@/api/products";
import { defaultProductCountPerPage } from "@/app/globalVariables";
import { Pagination } from "@/ui/organisms/Pagination";

export default async function ProductsPage() {
	const products = await getProductsListByPage(defaultProductCountPerPage, 1);
	return (
		<>
			<ProductList products={products} data-testid="products-list" />
			<div className="text-center">
				<a
					href="/products/1"
					title="Pokaż więcej produktów"
					className="py-3 text-center uppercase underline underline-offset-8"
				></a>
			</div>
			<Pagination href="/products" paginationData={products[0].pagination} page={1} />
		</>
	);
}
