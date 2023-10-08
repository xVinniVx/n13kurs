import React, { Suspense } from "react";
import { getProductById, getProductSeoById } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { RatingStar } from "@/ui/atoms/RatingStar";
import { SectionHeader } from "@/ui/atoms/SectionHeader";

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const seoData = await getProductSeoById(params.productId);
	return {
		title: seoData.seoTitle,
		description: seoData.seoDescription,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<div className="mx-auto my-12 max-w-screen-2xl">
				<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3">
						<img
							className="mx-auto"
							src={`/products/${product.image.url}`}
							alt={product.image.altText}
						/>
					</div>

					<div className="w-full px-2 lg:w-2/3 lg:px-10">
						<p className="text-gray-500">{product.category}</p>
						<h1 className="text-5xl">{product.name}</h1>
						<RatingStar rating={product.ratingsAvg} />
						<article>
							<p>{product.shortDescription}</p>
						</article>
					</div>
				</div>
			</div>

			<Suspense fallback={"Wczytuję...."}>
				{
					<>
						<SectionHeader title={"Sugerowane produkty"} text={"Wydaj jeszcze trochę pieniążków"} />
						<SuggestedProducts />
					</>
				}
			</Suspense>
		</>
	);
}
