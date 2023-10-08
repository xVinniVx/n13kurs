import { getCollectionBySlug } from "@/api/collections";

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
	const seoData = await getCollectionBySlug(params.slug);
	return {
		title: seoData[0].name,
		description: seoData[0].description,
	};
};
export default async function CollectionsPage({ params }: { params: { slug: string } }) {
	const collection = await getCollectionBySlug(params.slug);
	return (
		<div>
			<h2>{collection[0].name}</h2>
		</div>
	);
}
