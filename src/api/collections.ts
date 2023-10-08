import { type CollectionListGraphQLData, type CollectionListType } from "@/ui/types";
import { executeGraphQL } from "@/api/graphql";
import { CollectionGetBySlugDocument, CollectionGetListDocument } from "@/gql/graphql";

export const getCollections = async (): Promise<CollectionListType[]> => {
	const apiData = (await executeGraphQL(
		CollectionGetListDocument,
		{},
	)) as CollectionListGraphQLData;
	return mapCollectionListGraphQLDataToCollectionListType(apiData);
};

export const getCollectionBySlug = async (slug: string): Promise<CollectionListType[]> => {
	const apiData = await executeGraphQL(CollectionGetBySlugDocument, {
		slug: slug,
	});
	return mapCollectionListGraphQLDataToCollectionListType(<CollectionListGraphQLData>apiData);
};

export const mapCollectionListGraphQLDataToCollectionListType = (
	data: CollectionListGraphQLData,
): CollectionListType[] => {
	if (!data.collections || !data.collections.data) {
		return [];
	}

	return data.collections.data.map((item) => {
		const attributes = item.attributes;

		return {
			id: item.id,
			name: attributes.name,
			slug: attributes.slug,
			description: attributes.description,
			image: attributes.image,
		};
	});
};
