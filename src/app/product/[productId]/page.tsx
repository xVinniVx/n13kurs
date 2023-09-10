import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

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
		<div>
			<h1>Product Page</h1>
			{/*<SingleProductTemplate product={product} />*/}
			{product.id}
			{product.title}
			<h3 className="text-6xl">Sugerowane produkty</h3>
			<Suspense fallback={"Wczytuję...."}>
				<SuggestedProducts />
			</Suspense>
		</div>
	);
}
