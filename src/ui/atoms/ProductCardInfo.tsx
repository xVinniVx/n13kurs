import { type ProductListItemsType } from "@/ui/types";
import { formatPrice } from "@/ui/utils";

type ProductCardInfoProps = {
	product: ProductListItemsType;
};

export const ProductCardInfo = ({ product: { name, category, price } }: ProductCardInfoProps) => {
	return (
		<div className="mt-4 justify-center px-5 pb-5 text-center">
			<p className=" text-sm tracking-tight text-gray-500">{category}</p>
			<h3 className="text-xl tracking-tight text-slate-900">{name}</h3>
			{/*<RatingStar rating={rating.rate} />*/}
			<span className="inline-block pr-2 text-3xl font-semibold text-slate-900">
				{formatPrice(price / 100)}
			</span>
			{/*{oldPrice > 0 ? (*/}
			{/*	<span className="inline-block align-middle text-sm text-slate-900 line-through">*/}
			{/*		{formatPrice(oldPrice / 100)}*/}
			{/*	</span>*/}
			{/*) : null}*/}
			{/*<a*/}
			{/*	href="#"*/}
			{/*	className="mt-3 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"*/}
			{/*>*/}
			{/*	<svg*/}
			{/*		xmlns="http://www.w3.org/2000/svg"*/}
			{/*		className="mr-2 h-6 w-6"*/}
			{/*		fill="none"*/}
			{/*		viewBox="0 0 24 24"*/}
			{/*		stroke="currentColor"*/}
			{/*		strokeWidth="2"*/}
			{/*	>*/}
			{/*		<path*/}
			{/*			strokeLinecap="round"*/}
			{/*			strokeLinejoin="round"*/}
			{/*			d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"*/}
			{/*		></path>*/}
			{/*	</svg>*/}
			{/*	Add to cart*/}
			{/*</a>*/}
		</div>
	);
};
