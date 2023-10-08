//import { headers } from "next/headers";
import {
	type ProductGetListPaginationGraphQLData,
	type ProductItemByIdGraphQLData,
	type ProductItemType,
	type ProductListByPageGraphQLData,
	type ProductListItemsType,
	type ProductListPaginationType,
	type ProductSeoByIdGraphQLData,
	type RatingItemType,
	type Seo,
} from "@/ui/types";
import { executeGraphQL } from "@/api/graphql";
import {
	ProductGetByIdDocument,
	ProductGetListByPageDocument,
	ProductGetListBySearchDocument,
	ProductGetPaginationByPageDocument,
	ProductGetSeoByIdDocument,
	ProductsGetListByCategoryDocument,
} from "@/gql/graphql";

export const getProductsListByPage = async (
	quantity: number,
	page: number,
): Promise<ProductListItemsType[]> => {
	const apiData = (await executeGraphQL(ProductGetListByPageDocument, {
		page: page,
		pageSize: quantity,
	})) as ProductListByPageGraphQLData;

	return mapProductListByPageGraphQLDataToProductListItemsType(apiData);
};

export const getProductsListPaginationByPage = async (
	quantity: number,
	page: number,
): Promise<ProductListPaginationType> => {
	const apiData = (await executeGraphQL(ProductGetPaginationByPageDocument, {
		page: page,
		pageSize: quantity,
	})) as ProductGetListPaginationGraphQLData;
	return mapProductListByPageGraphQLDataToProductListPaginationType(apiData);
};

export const getProductsListBySearch = async (
	search: string,
	quantity: number,
	page: number,
): Promise<ProductListItemsType[]> => {
	const apiData = (await executeGraphQL(ProductGetListBySearchDocument, {
		search: search,
		page: page,
		pageSize: quantity,
	})) as ProductListByPageGraphQLData;
	return mapProductListByPageGraphQLDataToProductListItemsType(apiData);
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const apiData = (await executeGraphQL(ProductGetByIdDocument, {
		id: id,
	})) as ProductItemByIdGraphQLData;
	return mapProductItemByIdGraphQLDataToProductItemType(apiData);
};

export const getProductSeoById = async (id: string): Promise<Seo> => {
	const apiData = (await executeGraphQL(ProductGetSeoByIdDocument, {
		id: id,
	})) as ProductSeoByIdGraphQLData;
	return mapProductSeoByIdGraphQLDataToSeo(apiData);
};

export const getProductsListByCategory = async (
	slug: string,
	quantity: number,
	page: number,
): Promise<ProductListItemsType[]> => {
	const apiData = (await executeGraphQL(ProductsGetListByCategoryDocument, {
		slug: slug,
		page: page,
		pageSize: quantity,
	})) as ProductListByPageGraphQLData;
	return mapProductListByPageGraphQLDataToProductListItemsType(apiData);
};

export const mapProductListByPageGraphQLDataToProductListItemsType = (
	data: ProductListByPageGraphQLData,
): ProductListItemsType[] => {
	if (!data.products || !data.products.data) {
		return [];
	}

	if (!data.products || !data.products.meta) {
		throw TypeError("Wrong data or no data for pagination");
	}

	return data.products.data.map((item) => {
		const attributes = item.attributes;
		const sum = attributes.ratings.data?.reduce((total, item) => total + item.attributes.rating, 0);

		return {
			id: String(item.id),
			slug: attributes.slug || "",
			name: attributes.name || "",
			price: attributes.price,
			category: attributes.category.data?.attributes?.name || "",
			image: {
				url: attributes.image.url || "",
				altText: attributes.image.altText || "",
			},
			ratingsCount: attributes.ratings.data.length,
			ratingsAvg: sum / attributes.ratings.data.length,
			pagination: {
				total: data.products?.meta.pagination.total || 0,
				page: data.products?.meta.pagination.page || 1,
				pageSize: data.products?.meta.pagination.pageSize || 1,
				pageCount: data.products?.meta.pagination.pageCount || 0,
			},
		};
	});
};

export const mapProductListByPageGraphQLDataToProductListPaginationType = (
	data: ProductGetListPaginationGraphQLData,
): ProductListPaginationType => {
	if (!data.products || !data.products.meta) {
		throw TypeError("Wrong data or no data for pagination");
	}
	return {
		total: data.products.meta.pagination.total,
		page: data.products.meta.pagination.page,
		pageSize: data.products.meta.pagination.pageSize,
		pageCount: data.products.meta.pagination.pageCount,
	};
};

export const mapProductItemByIdGraphQLDataToProductItemType = (
	data: ProductItemByIdGraphQLData,
): ProductItemType => {
	if (data.product.data === null) {
		throw TypeError("No data for product");
	}

	const attributes = data.product.data.attributes;

	const sum = attributes.ratings.data?.reduce((total, item) => total + item.attributes.rating, 0);

	const ratingsData = attributes.ratings.data.map((item): RatingItemType => {
		return {
			name: item.attributes.name,
			email: item.attributes.email,
			title: item.attributes.title,
			content: item.attributes.content,
			rating: item.attributes.rating,
			createdAt: item.attributes.createdAt,
		};
	});

	return {
		id: String(data.product.data.id),
		slug: attributes.slug || "",
		name: attributes.name || "",
		price: attributes.price,
		image: {
			url: attributes.image.url || "",
			altText: attributes.image.altText || "",
		},
		shortDescription: attributes.shortDescription,
		longDescription: attributes.longDescription,
		seo: {
			seoTitle: attributes.seo.seoTitle,
			seoDescription: attributes.seo.seoDescription,
		},
		category: attributes.category.data?.attributes?.name || "",
		ratings: JSON.stringify(ratingsData) || "",
		ratingsCount: attributes.ratings.data.length,
		ratingsAvg: sum / attributes.ratings.data.length,
	};
};

export const mapProductSeoByIdGraphQLDataToSeo = (data: ProductSeoByIdGraphQLData): Seo => {
	if (!data.product || !data.product.data) {
		throw TypeError("No data for product");
	} else {
		return {
			// seoTitle: data.product.data.attributes.seo?.seoTitle ?? data.product.data.attributes.name,
			seoTitle: data.product.data.attributes.name,
			seoDescription: data.product.data.attributes.shortDescription,
		};
	}
};
