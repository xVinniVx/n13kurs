// import { ProductList } from "@/ui/organisms/ProductList";
// import { getProductsListByPage, getTotalProductCount } from "@/api/products";
// import { Pagination } from "@/ui/organisms/Pagination";

// export default async function ProductsPage({ params }: { params: { page: number } }) {
// 	const products = await getProductsListByPage(20, 1);
// 	const totalProducts = await getTotalProductCount();
// 	const page = params.page;
// 	return (
// 		<>
// 			Page [category]: {page}
// 			<ProductList products={products} />
// 			<Pagination href="/products" totalProducts={totalProducts} page={page} />
// 		</>
// 	);
// }

export default function ProductsPage() {
	return <div></div>;
}
