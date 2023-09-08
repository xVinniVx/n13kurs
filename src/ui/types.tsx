export type ProductItemType = {
	id: number;
	category: string;
	name: string;
	price: number;
	image: {
		src: string;
		alt: string;
	};
	oldPrice: number;
};
