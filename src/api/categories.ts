import {
	type CategoriesListGraphQLData,
	type CategoryListType,
	type CategorySeoBySlugGraphQLData,
	type Seo,
} from "@/ui/types";
import { executeGraphQL } from "@/api/graphql";
import { CategoriesGetListDocument, CategoryGetSeoBySlugDocument } from "@/gql/graphql";

export const getCategories = async (): Promise<CategoryListType[]> => {
	const apiData = (await executeGraphQL(
		CategoriesGetListDocument,
		{},
	)) as CategoriesListGraphQLData;
	return mapCategoriesListGraphQLDataToCategoryType(apiData);
};

export const getCategorySeoById = async (slug: string): Promise<Seo> => {
	const apiData = (await executeGraphQL(CategoryGetSeoBySlugDocument, {
		slug: slug,
	})) as CategorySeoBySlugGraphQLData;
	return mapCategorySeoByIdGraphQLDataToSeo(apiData);
};

export const mapCategoriesListGraphQLDataToCategoryType = (
	data: CategoriesListGraphQLData,
): CategoryListType[] => {
	if (!data.categories || !data.categories.data) {
		return [];
	}

	return data.categories.data.map((item) => {
		const attributes = item.attributes;

		return {
			name: attributes.name,
			slug: attributes.slug,
		};
	});
};

export const mapCategorySeoByIdGraphQLDataToSeo = (data: CategorySeoBySlugGraphQLData): Seo => {
	if (!data.categories || !data.categories.data) {
		throw TypeError("No data for category seo");
	} else {
		return {
			seoTitle:
				data.categories.data[0].attributes.seo?.seoTitle ?? data.categories.data[0].attributes.name,
			seoDescription:
				data.categories.data[0].attributes.seo?.seoDescription ??
				data.categories.data[0].attributes.description,
		};
	}
};
