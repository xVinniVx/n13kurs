import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemsType } from "@/ui/types";

export const ProductList = ({ products }: { products: ProductListItemsType[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
