import type { TypedDocumentString } from "@/gql/graphql";

export const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + process.env.BEARER_TOKEN,
		},
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphQLResponse = (await res.json()) as GraphQLResponse<TResult>;
	// console.log(graphQLResponse);
	// console.log(graphQLResponse.errors);
	if (graphQLResponse.errors) {
		const errorMessages = graphQLResponse.errors.map((error, index) => {
			return `Error ${index + 1}: ${error.message}`;
		});
		console.error(errorMessages.join("\n"));
		throw TypeError("GRAPHQL Error");
	}

	return graphQLResponse.data;
};
