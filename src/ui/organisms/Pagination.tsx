import { PaginationItem } from "@/ui/atoms/PaginationItem";
import type { ProductListPaginationType } from "@/ui/types";

type PaginationProps = {
	href: string;
	paginationData: ProductListPaginationType;
	page: number;
	text?: string;
};

export const Pagination = ({ href, paginationData, page = 1, text }: PaginationProps) => {
	const nextPage = paginationData.page + 1;
	const prevPage = paginationData.page - 1;
	const maxPage = paginationData.pageCount;
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
			<p className="py-3 text-center text-sm">Produktów: {paginationData.total}</p>
		</>
	);
};
