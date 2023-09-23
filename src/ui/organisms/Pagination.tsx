import { PaginationItem } from "@/ui/atoms/PaginationItem";

type PaginationProps = {
	href: string;
	totalProducts: number;
	page: number;
	text?: string;
};

export const Pagination = ({ href, totalProducts, page = 1, text }: PaginationProps) => {
	const nextPage = page + 1;
	const prevPage = page - 1;
	const maxPage = Math.ceil(totalProducts / 20);
	return (
		<>
			<ul className="flex items-center justify-center gap-2" aria-label="pagination">
				{/* gdy page > 1 wyświetl 1 oraz back item*/}
				{page > 1 && (
					<>
						<PaginationItem href={href} page={prevPage} text="&larr;" />
						{page > 2 && (
							<>
								<PaginationItem href={href} page={1} text={text} />
								<li>...</li>
							</>
						)}
						<PaginationItem href={href} page={prevPage} text={text} />
					</>
				)}
				<PaginationItem href={href} page={page} text={text} />
				{page < maxPage && (
					<>
						<PaginationItem href={href} page={nextPage} text={text} />
						{page < maxPage - 2 && <li>...</li>}
						{page < maxPage - 1 && <PaginationItem href={href} page={maxPage} text={text} />}
						<PaginationItem href={href} page={nextPage} text="&rarr;" />
					</>
				)}
			</ul>
			<p className="py-3 text-center text-sm">Produktów: {totalProducts}</p>
		</>
	);
};
