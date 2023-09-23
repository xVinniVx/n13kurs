import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByPage, getTotalProductCount } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";

// wygeneruj 5 static listingów (dla testów sprawdzenia) + API testowe wywala się przy pobraniu wszystkich 211 podstron...
export const generateStaticParams = async () => {
	// const totalProducts = await getTotalProductCount();
	// const result = [];
	//
	// for (let i = 1; i <= totalProducts; i++) {
	// 	result.push({ pageNumber: i.toString() });
	// }
	//
	// return [result];
	return [
		{ pageNumber: "1" },
		{ pageNumber: "2" },
		{ pageNumber: "3" },
		{ pageNumber: "4" },
		{ pageNumber: "5" },
	];
};

export default async function ProductsPage({ params }: { params: { pageNumber: number } }) {
	const pageNumber = params.pageNumber;
	const products = await getProductsListByPage(20, pageNumber);
	const totalProducts = await getTotalProductCount();

	//wyświetlanie products/1 jest bez sensu....
	if (pageNumber < 2) {
		redirect("/products");
	}

	return (
		<>
			<ProductList products={products} />
			<Suspense>
				<Pagination href="/products" totalProducts={totalProducts} page={Number(pageNumber)} />
			</Suspense>
		</>
	);
}
