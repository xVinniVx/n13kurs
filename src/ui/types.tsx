export type ProductItemType = {
	id: string;
	title: string;
	price: number;
	oldPrice: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export type Rating = {
	rate: number;
	count: number;
};
