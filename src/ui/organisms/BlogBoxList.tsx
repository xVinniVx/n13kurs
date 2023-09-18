export const BlogBoxList = async () => {
	//const products = await getProductsList();
	//await sleep(5000);
	return (
		<>
			<div className="mx-auto my-10 flex max-w-screen-2xl flex-col items-center justify-between gap-2 lg:flex-row">
				<div className="w-1/2">
					<img
						src="/img/blog-01.jpg"
						alt="cat"
						className="transition-transform duration-300 hover:opacity-80"
					/>
					<h3 className="pt-3 text-2xl">Jak wieszać ubrania</h3>
					<p className="py-3 text-gray-500">
						Spekatakularny kurs z obsługi wieszaków. Ile t-shirtów można powiesić na rowerze
						stacjonarnym?
					</p>
					<a className=" uppercase underline underline-offset-8">czytaj więcej</a>
				</div>
				<div className="w-1/2">
					<img
						src="/img/blog-02.jpg"
						alt="cat"
						className="transition-transform duration-300 hover:opacity-80"
					/>
					<h3 className="pt-3 text-2xl">Składanie ubrań - robisz to źle</h3>
					<p className="py-3 text-gray-500">
						Spekatakularny kurs z obsługi wieszaków. Ile t-shirtów można powiesić na rowerze
						stacjonarnym?
					</p>
					<a className=" uppercase underline underline-offset-8">czytaj więcej</a>
				</div>
			</div>
		</>
	);
};
