import { ProductCardImage } from "@/ui/atoms/ProductCardImage";
import { ProductCardInfo } from "@/ui/atoms/ProductCardInfo";
import { type ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="m-4 rounded bg-white">
			<article>
				<ProductCardImage alt={product.image.alt} src={product.image.src} />
				<ProductCardInfo product={product} />
			</article>
		</li>
	);
};
