import { Logo } from "@/ui/atoms/Logo";
import { SearchBar } from "@/ui/organisms/SearchBar";
import { getCategories } from "@/api/categories";
import { NavbarLink } from "@/ui/molecules/NavbarLink";
export const Navbar = async () => {
	const categories = await getCategories();
	return (
		<header className="header sticky top-0 z-40 w-full bg-white shadow-md">
			<div className="hidden lg:block lg:flex-row lg:items-center lg:justify-between lg:bg-black">
				<div className="mx-auto flex max-w-screen-2xl flex-row justify-between py-2 text-sm">
					<ul className="flex w-4/12 flex-row text-white">
						<li className="mr-6 inline-flex">
							<svg
								className="m-svg-icon mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
							>
								<path
									fill="currentColor"
									d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
								></path>
							</svg>
							<span>300k</span>
						</li>
						<li className="inline-flex">
							<svg
								className="m-svg-icon mr-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
								></path>
							</svg>
							<span>877k</span>
						</li>
					</ul>
					<div className="inline-flex w-4/12 justify-center text-center font-semibold text-white">
						<span className="mr-4 rounded-full bg-red-400 px-4">Hot</span>
						<span>Do każdego zamówienia reklamówka!</span>
					</div>
					<div className="inline-flex w-4/12 justify-end text-white">
						Polski
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="ml-1 h-6 w-6"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</div>
				</div>
			</div>
			<div className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between py-3">
				<button className="cursor-pointer pt-1 lg:hidden">
					<span className="text-primary  text-3xl  ">
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 352 512"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
						</svg>
					</span>
				</button>
				<nav
					role="navigation"
					className="absolute left-0 z-40 hidden min-h-screen w-60 bg-white p-4 font-semibold lg:relative lg:flex lg:min-h-0 lg:w-4/12 lg:flex-row "
				>
					<ul className="flex flex-col py-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
						<NavbarLink title="HOME" slug="/" />
						<NavbarLink title="ALL" slug="/products" />
						{categories.map((item) => (
							<NavbarLink
								title={item.name}
								slug={`/categories/${item.slug}`}
								key={item.name}
								exact={false}
							/>
						))}
					</ul>
				</nav>
				<div className="flex w-4/12 justify-self-center">
					<Logo />
				</div>
				<div className="flex w-4/12 flex-row items-center justify-end sm:mt-0">
					<SearchBar />
					{/*<svg*/}
					{/*	xmlns="http://www.w3.org/2000/svg"*/}
					{/*	fill="none"*/}
					{/*	viewBox="0 0 24 24"*/}
					{/*	strokeWidth="1.5"*/}
					{/*	stroke="currentColor"*/}
					{/*	className="mr-2 h-6 w-6 stroke-2 lg:mr-5"*/}
					{/*>*/}
					{/*	<path*/}
					{/*		strokeLinecap="round"*/}
					{/*		strokeLinejoin="round"*/}
					{/*		d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"*/}
					{/*	/>*/}
					{/*</svg>*/}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="mr-2 h-6 w-6 stroke-2 lg:mr-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="hidden h-6 w-6 stroke-2 lg:block"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
};
