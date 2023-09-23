import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { RatingStar } from "@/ui/atoms/RatingStar";

//Generowane tylko podczas buildu aplikacji
export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};
//do statycznych
// export const metadata = {
// 	title: "Produkt ?",
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Produkt ${product.title} - Sklep`,
		description: `${product.description}`,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<div className="mx-auto my-12 max-w-screen-2xl">
				<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3">
						<img className="mx-auto" src={product.image} alt={product.title} />
					</div>

					<div className="w-full px-2 lg:w-2/3 lg:px-10">
						<p className="text-gray-500">{product.category}</p>
						<h1 className="text-5xl">{product.title}</h1>
						<RatingStar rating={product.rating.rate} />
						<p>{product.description}</p>
					</div>
				</div>
			</div>
			<h3 className="text-6xl">Sugerowane produkty</h3>
			<Suspense fallback={"Wczytuję...."}>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
