import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationItemProps = {
	href: string;
	page: number;
	text?: string;
};

export const PaginationItem = ({ href, page, text }: PaginationItemProps) => {
	const displayText = text ?? String(page);
	return (
		<li className="rounded border border-gray-300 p-2">
			<ActiveLink
				href={href + "/" + page}
				className="text-gray-600 hover:text-gray-800"
				activeClassName="text-blue-500 hover:text-blue-700 font-semibold"
			>
				{displayText}
			</ActiveLink>
		</li>
	);
};
