export const HeroSection = () => {
	return (
		<div className="mx-auto flex max-w-screen-2xl flex-col lg:flex-row">
			<div className="lg:mr-1 lg:h-1/2 lg:w-1/2">
				<img src="/img/hero-left-01.jpg" />
			</div>
			<div className="flex w-full flex-col items-center justify-center bg-green-100 py-5 lg:w-1/2">
				<p className="text-4xl tracking-widest lg:text-6xl">WYPRZEDAŻ</p>
				<p className="py-5 text-7xl font-bold lg:py-10 lg:text-9xl">-60%</p>
				<p className="text-gray-600">Tylko w tym miesiącu Loompex Day!.</p>
				<p className="text-gray-600">Kupuj po niższych cenach!</p>
				<a className="mt-10 block border border-gray-500 px-5 py-2 uppercase tracking-widest hover:bg-black hover:text-gray-200">
					Nasze produkty
				</a>
			</div>
		</div>
	);
};
