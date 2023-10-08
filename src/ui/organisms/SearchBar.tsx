"use client";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export const SearchBar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(searchParams.get("query") || "");
	// Tworzymy stan, który będzie przechowywać identyfikator timeout
	const [searchTimeoutId, setSearchTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const handleSearchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value;

		// if (newQuery === "") {
		// 	redirect("/products");
		// }

		setQuery(newQuery);

		// Anulujemy poprzedni timeout, jeśli istnieje
		if (searchTimeoutId !== null) {
			clearTimeout(searchTimeoutId);
		}

		// Ustawiamy nowy timeout na 500 ms
		const newTimeoutId = setTimeout(() => {
			router.push(`/search?query=${newQuery?.toString()}`);
		}, 500);

		// Zapisujemy identyfikator timeout do stanu
		setSearchTimeoutId(newTimeoutId);
	};

	const handleSearchOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/search?query=${query?.toString()}`);
	};

	return (
		<div className="mr-3 w-3/4">
			<form className="flex flex-row" action="/search" onSubmit={handleSearchOnSubmit}>
				<input
					type="search"
					className="w-full border border-gray-800 px-3 py-2"
					placeholder="Szukaj..."
					autoComplete="off"
					role="searchbox"
					value={query}
					onChange={handleSearchOnChange}
				/>
				<button
					type="submit"
					className="border border-l-0 border-black bg-black text-white hover:cursor-pointer hover:bg-white hover:text-black"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="mx-2 h-6 w-6 stroke-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};
