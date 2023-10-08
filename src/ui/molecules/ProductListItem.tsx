import Link from "next/link";
import { ProductCardImage } from "@/ui/atoms/ProductCardImage";
import { ProductCardInfo } from "@/ui/atoms/ProductCardInfo";
import type { ProductListItemsType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductListItemsType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="m-4 p-8" key={product.id}>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCardImage src={product.image.url} alt={product.image.altText} />
					<ProductCardInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
