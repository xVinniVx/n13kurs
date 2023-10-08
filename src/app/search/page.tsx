import { redirect } from "next/navigation";
import { getProductsListBySearch } from "@/api/products";
import { defaultProductCountPerPage } from "@/app/globalVariables";
import { ProductList } from "@/ui/organisms/ProductList";

interface SearchPageProps {
	searchParams: { query: string; page: number };
}
export default async function SearchPage({ searchParams: { query, page } }: SearchPageProps) {
	if (!page) {
		page = 1;
	}

	if (!query) {
		redirect("/products");
	}

	const products = await getProductsListBySearch(query, defaultProductCountPerPage, page);

	return (
		<>
			<h2 className="pb-3 pt-8 text-center text-3xl">Wynik wyszukania</h2>
			<p className="text-center text-3xl text-gray-500">&bdquo;{query}&ldquo;</p>
			<ProductList products={products} />
		</>
	);
}
