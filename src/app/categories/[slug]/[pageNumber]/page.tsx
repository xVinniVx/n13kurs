import { Suspense } from "react";
import { getProductsListByCategory } from "@/api/products";
import { defaultProductCountPerPage } from "@/app/globalVariables";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/organisms/Pagination";
import { getCategorySeoById } from "@/api/categories";

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
	const seoData = await getCategorySeoById(params.slug);
	return {
		title: seoData.seoTitle,
		description: seoData.seoDescription,
	};
};

export default async function category({
	params,
}: {
	params: { slug: string; pageNumber: number };
}) {
	const pageNumber = Number(params.pageNumber);
	const products = await getProductsListByCategory(
		params.slug,
		defaultProductCountPerPage,
		pageNumber,
	);
	return (
		<>
			<h1 className="mt-10 py-4 text-center text-5xl font-semibold">{products[0].category}</h1>
			<ProductList products={products} />
			<Suspense>
				<Pagination
					href={`/categories/${params.slug}`}
					paginationData={products[0].pagination}
					page={pageNumber}
				/>
			</Suspense>
		</>
	);
}
