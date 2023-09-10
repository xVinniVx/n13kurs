export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string };
}) {
	// const product = await getProductById(params.productId);
	const referral = searchParams.referral !== null ? searchParams.referral.toString() : "";
	return (
		<div>
			<h1>Product Page</h1>
			{/*<SingleProductTemplate product={product} />*/}
			{params.productId}
			{referral}
		</div>
	);
}
