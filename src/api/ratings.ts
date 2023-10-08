import { type RatingItemType, type RatingsListByProductGraphQLData } from "@/ui/types";
import { executeGraphQL } from "@/api/graphql";
import { RatingsGetListByProductDocument } from "@/gql/graphql";

export const getRatingsListByProduct = async (productId: string): Promise<RatingItemType[]> => {
	const apiData = (await executeGraphQL(RatingsGetListByProductDocument, {
		productId: productId,
	})) as RatingsListByProductGraphQLData;

	return mapRatingsListByProductGraphQLDataToRatingItemType(apiData);
};

export const mapRatingsListByProductGraphQLDataToRatingItemType = (
	data: RatingsListByProductGraphQLData,
): RatingItemType[] => {
	if (!data.ratings || !data.ratings.data) {
		return [];
	}

	return data.ratings.data.map((item) => {
		const attributes = item.attributes;

		return {
			name: attributes.name || "",
			email: attributes.email || "",
			title: attributes.title || "",
			content: attributes.content || "",
			rating: attributes.rating,
			createdAt: "",
			//count: data.ratings?.meta.pagination.total || 0,
		};
	});
};
