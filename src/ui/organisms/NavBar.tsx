import { Logo } from "@/ui/atoms/Logo";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
export const Navbar = () => {
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
						<li className="">
							<span>
								<ActiveLink href="/">HOME</ActiveLink>
							</span>
							<svg
								fill="currentColor"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
								className="h-4 w-4 justify-end lg:hidden"
							>
								<path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
							</svg>
						</li>
						<li className="flex flex-row items-center justify-between py-2">
							<span>
								<ActiveLink href="/products">ALL</ActiveLink>
							</span>
							<svg
								fill="currentColor"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
								className="h-4 w-4 justify-end lg:hidden"
							>
								<path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
							</svg>
						</li>
						<li className="flex flex-row items-center justify-between py-2">
							<span>Kobieta</span>
							<svg
								fill="currentColor"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
								className="h-4 w-4 justify-end lg:hidden"
							>
								<path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
							</svg>
						</li>
						<li className="flex flex-row items-center justify-between py-2">
							<span>Mężczyzna</span>
							<svg
								fill="currentColor"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
								className="h-4 w-4 justify-end lg:hidden"
							>
								<path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
							</svg>
						</li>
						<li className="flex flex-row items-center justify-between py-2">
							<span>Akcesoria</span>
							<svg
								fill="currentColor"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 512"
								className="h-4 w-4 justify-end lg:hidden"
							>
								<path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
							</svg>
						</li>
					</ul>
				</nav>
				{/*<div className="relative mt-4 text-gray-600  sm:mt-0 md:w-2/6">*/}
				{/*	<input*/}
				{/*		type="search"*/}
				{/*		name="serch"*/}
				{/*		placeholder="Szukaj"*/}
				{/*		className="border-1 md:w-lg bor h-12 w-full rounded-full border border-gray-400 bg-white px-5 pr-10 text-sm focus:outline-none"*/}
				{/*	/>*/}
				{/*	<button type="submit" className="absolute right-0 top-0 mr-4 mt-3">*/}
				{/*		<svg*/}
				{/*			xmlns="http://www.w3.org/2000/svg"*/}
				{/*			fill="none"*/}
				{/*			viewBox="0 0 24 24"*/}
				{/*			strokeWidth="1.5"*/}
				{/*			stroke="currentColor"*/}
				{/*			className="h-6 w-6 stroke-gray-600"*/}
				{/*		>*/}
				{/*			<path*/}
				{/*				strokeLinecap="round"*/}
				{/*				strokeLinejoin="round"*/}
				{/*				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"*/}
				{/*			/>*/}
				{/*		</svg>*/}
				{/*	</button>*/}
				{/*</div>*/}
				<div className="flex w-4/12 justify-self-center">
					<Logo />
				</div>
				<div className="flex w-4/12 flex-row items-center justify-end sm:mt-0">
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
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
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

					{/*<div className="group px-4">*/}
					{/*	<svg*/}
					{/*		xmlns="http://www.w3.org/2000/svg"*/}
					{/*		fill="none"*/}
					{/*		viewBox="0 0 24 24"*/}
					{/*		strokeWidth="1.5"*/}
					{/*		stroke="currentColor"*/}
					{/*		className="h-12 w-12 rounded-full border border-gray-300 stroke-gray-600 p-2.5 group-hover:scale-125 group-hover:stroke-red-600 group-hover:shadow-lg group-hover:transition group-hover:duration-300"*/}
					{/*	>*/}
					{/*		<path*/}
					{/*			strokeLinecap="round"*/}
					{/*			strokeLinejoin="round"*/}
					{/*			d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"*/}
					{/*		/>*/}
					{/*	</svg>*/}
					{/*</div>*/}
					{/*<div className="flex flex-row items-center">*/}
					{/*	<div className="group border-l border-gray-300 pl-4 pr-2">*/}
					{/*		<svg*/}
					{/*			xmlns="http://www.w3.org/2000/svg"*/}
					{/*			fill="none"*/}
					{/*			viewBox="0 0 24 24"*/}
					{/*			strokeWidth="1.5"*/}
					{/*			stroke="currentColor"*/}
					{/*			className="h-12 w-12 rounded-full border border-gray-300 stroke-gray-600 p-2.5 group-hover:scale-125 group-hover:stroke-red-600 group-hover:shadow-lg group-hover:transition group-hover:duration-300"*/}
					{/*		>*/}
					{/*			<path*/}
					{/*				strokeLinecap="round"*/}
					{/*				strokeLinejoin="round"*/}
					{/*				d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"*/}
					{/*			/>*/}
					{/*		</svg>*/}
					{/*	</div>*/}
					{/*	/!*<p className="text-md text-gray-600">Loguj</p>*!/*/}
					{/*</div>*/}
				</div>
				{/*<div className="ml-auto">*/}
				{/*	<label htmlFor="search" className="sr-only">*/}
				{/*		Szukaj*/}
				{/*	</label>*/}
				{/*	<input*/}
				{/*		className="w-full rounded-md border-0 bg-gray-50 py-2 pl-11 pr-4 text-sm text-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-400"*/}
				{/*		placeholder="Szukaj..."*/}
				{/*		type="search"*/}
				{/*		name="search"*/}
				{/*		value=""*/}
				{/*	/>*/}
				{/*</div>*/}
				{/*<nav className="w-full max-w-2xl">*/}
				{/*	<ul className="flex justify-center gap-2 text-sm font-medium text-gray-600">*/}
				{/*		<li>T-shirts</li>*/}
				{/*		<li>Shoes</li>*/}
				{/*		<li>Belts</li>*/}
				{/*		<li>Accessories</li>*/}
				{/*	</ul>*/}
				{/*</nav>*/}
				{/*<div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">*/}
				{/*	<div className="w-full max-w-lg lg:max-w-xs">*/}
				{/*		<label htmlFor="search" className="sr-only">*/}
				{/*			Szukaj*/}
				{/*		</label>*/}
				{/*		<div className="relative">*/}
				{/*			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">*/}
				{/*				<svg*/}
				{/*					xmlns="http://www.w3.org/2000/svg"*/}
				{/*					width="24"*/}
				{/*					height="24"*/}
				{/*					viewBox="0 0 24 24"*/}
				{/*					fill="none"*/}
				{/*					stroke="currentColor"*/}
				{/*					strokeWidth="2"*/}
				{/*					strokeLinecap="round"*/}
				{/*					strokeLinejoin="round"*/}
				{/*					className="h-5 w-5 text-gray-300"*/}
				{/*					aria-hidden="true"*/}
				{/*				>*/}
				{/*					<circle cx="11" cy="11" r="8"></circle>*/}
				{/*					<path d="m21 21-4.3-4.3"></path>*/}
				{/*				</svg>*/}
				{/*			</div>*/}
				{/*			<input*/}
				{/*				className="w-full rounded-md border-0 bg-gray-50 py-2 pl-11 pr-4 text-sm text-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"*/}
				{/*				placeholder="Search"*/}
				{/*				type="search"*/}
				{/*				name="search"*/}
				{/*				value=""*/}
				{/*			/>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*	<div className="ml-auto h-full lg:ml-4">*/}
				{/*		<a*/}
				{/*			className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-800"*/}
				{/*			href="/cart"*/}
				{/*		>*/}
				{/*			<svg*/}
				{/*				xmlns="http://www.w3.org/2000/svg"*/}
				{/*				width="24"*/}
				{/*				height="24"*/}
				{/*				viewBox="0 0 24 24"*/}
				{/*				fill="none"*/}
				{/*				stroke="currentColor"*/}
				{/*				strokeWidth="2"*/}
				{/*				strokeLinecap="round"*/}
				{/*				strokeLinejoin="round"*/}
				{/*				className="h-6 w-6 flex-shrink-0"*/}
				{/*				aria-hidden="true"*/}
				{/*			>*/}
				{/*				<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>*/}
				{/*				<path d="M3 6h18"></path>*/}
				{/*				<path d="M16 10a4 4 0 0 1-8 0"></path>*/}
				{/*			</svg>*/}
				{/*			<div className="w-4">*/}
				{/*				<span className="ml-2 text-sm font-medium ">0</span>*/}
				{/*				<span className="sr-only">items in cart, view bag</span>*/}
				{/*			</div>*/}
				{/*		</a>*/}
				{/*	</div>*/}
				{/*	<div className="ml-2 flex h-full w-14 items-center justify-center border-b-2 border-transparent text-center text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">*/}
				{/*		<button>Sign in</button>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</header>
	);
};
