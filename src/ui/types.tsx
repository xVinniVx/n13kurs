export type ProductItemType = {
	id: string;
	slug: string;
	name: string;
	shortDescription: string;
	longDescription: string;
	price: number;
	seo: Seo | string;
	category: string;
	image: Image;
	ratings: RatingItemType[] | string;
	ratingsCount: number;
	ratingsAvg: number;
};

export type ProductListItemsType = {
	id: string;
	slug: string;
	name: string;
	price: number;
	category: string;
	image: Image;
	ratingsCount: number;
	ratingsAvg: number;
	pagination: ProductListPaginationType;
	//ratings: RatingItemType | string;
};

export type ProductListPaginationType = {
	total: number;
	page: number;
	pageSize: number;
	pageCount: number;
};

export type RatingItemType = {
	name: string;
	email: string;
	title: string;
	content: string;
	rating: number;
	createdAt: string;
};

export type Seo = {
	seoTitle: string;
	seoDescription: string;
};

export type Image = {
	url: string;
	altText: string;
};

export type CategoryListType = {
	name: string;
	slug: string;
};

export type CollectionListType = {
	id: string;
	name: string;
	slug: string;
	description: string;
	image: string;
};

export type ProductItemByIdGraphQLData = {
	product: {
		data: {
			id: number;
			attributes: {
				name: string;
				slug: string;
				price: number;
				image: { url: string; altText: string };
				shortDescription: string;
				longDescription: string;
				seo: {
					seoTitle: string;
					seoDescription: string;
				};
				category: {
					data: {
						attributes?: {
							name: string;
						} | null;
					};
				};
				ratings: {
					data: Array<{
						attributes: {
							name: string;
							email: string;
							title: string;
							content: string;
							rating: number;
							createdAt: string;
						};
					}>;
				};
			};
		} | null;
	};
};

export type ProductSeoByIdGraphQLData = {
	product: {
		data: {
			id: number;
			attributes: {
				name: string;
				shortDescription: string;
				seo: {
					seoTitle: string;
					seoDescription: string;
				};
			};
		} | null;
	};
};

export type CategorySeoBySlugGraphQLData = {
	categories?: {
		data: Array<{
			id: number;
			attributes: {
				name: string;
				description: string;
				seo: {
					seoTitle: string;
					seoDescription: string;
				};
			};
		}>;
	};
};

export type ProductListByPageGraphQLData = {
	products:
		| {
				data: Array<{
					id: number;
					attributes: {
						name: string;
						slug: string;
						price: number;
						image: { url: string; altText: string };
						category: {
							data: {
								attributes?: {
									name: string;
								} | null;
							};
						};
						ratings: {
							data: Array<{
								attributes: {
									rating: number;
								};
							}>;
						};
					};
				}>;
				meta: {
					pagination: {
						total: number;
						page: number;
						pageSize: number;
						pageCount: number;
					};
				};
		  }
		| null
		| undefined;
};

export type ProductGetListPaginationGraphQLData = {
	products?:
		| {
				meta: {
					pagination: {
						total: number;
						page: number;
						pageSize: number;
						pageCount: number;
					};
				};
		  }
		| null
		| undefined;
};

export type CategoriesListGraphQLData = {
	categories?:
		| {
				data: Array<{
					id: string;
					attributes: {
						name: string;
						slug: string;
					};
				}>;
		  }
		| null
		| undefined;
};

export type RatingsListByProductGraphQLData = {
	ratings?:
		| {
				data: Array<{
					id: number;
					attributes: {
						name: string;
						email: string;
						title: string;
						content: string;
						rating: number;
					};
				}>;
				meta: {
					pagination: {
						total: number;
					};
				};
		  }
		| null
		| undefined;
};

export type CollectionListGraphQLData = {
	collections?:
		| {
				data: Array<{
					id: string;
					attributes: {
						name: string;
						slug: string;
						description: string;
						image: string;
					};
				}>;
		  }
		| null
		| undefined;
};
