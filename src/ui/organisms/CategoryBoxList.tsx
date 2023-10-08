export const CategoryBoxList = async () => {
	return (
		<>
			<div className="mx-auto my-10 flex max-w-screen-2xl flex-col items-center justify-between gap-2 lg:flex-row">
				<div className="relative overflow-hidden">
					<img
						src="/img/cat-02.jpg"
						alt="cat"
						className="transition-transform duration-300 hover:scale-105"
					/>
					<a className="absolute bottom-8 left-8 mx-auto block w-auto border border-black bg-black px-5 py-2 text-2xl uppercase text-gray-300 shadow-lg hover:bg-white hover:text-black">
						Kobieta
					</a>
				</div>
				<div className="relative overflow-hidden">
					<img
						src="/img/cat-01.jpg"
						alt="cat"
						className="transition-transform duration-300 hover:scale-105"
					/>
					<a className="absolute bottom-8 left-8 mx-auto block w-auto border border-black bg-black px-5 py-2 text-2xl uppercase text-gray-300 shadow-lg hover:bg-white hover:text-black">
						Mężczyzna
					</a>
				</div>
				<div className="relative overflow-hidden">
					<img
						src="/img/cat-03.jpg"
						alt="cat"
						className="transition-transform duration-300 hover:scale-105"
					/>
					<a className="absolute bottom-8 left-8 mx-auto block w-auto border border-black bg-black px-5 py-2 text-2xl uppercase text-gray-300 shadow-lg hover:bg-white hover:text-black">
						Akcesoria
					</a>
				</div>
			</div>
		</>
	);
};
