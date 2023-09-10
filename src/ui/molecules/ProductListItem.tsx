import Link from "next/link";
import { ProductCardImage } from "@/ui/atoms/ProductCardImage";
import { ProductCardInfo } from "@/ui/atoms/ProductCardInfo";
import { type ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="m-4 rounded bg-white">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCardImage alt={product.title} src={product.image} />
					<ProductCardInfo product={product} />
				</article>
			</Link>
		</li>
	);
};
