import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { CarretRight } from "@/ui/atoms/CarretRight";

export const NavbarLink = ({
	title,
	slug,
	exact,
}: {
	title: string;
	slug: string;
	exact?: boolean;
}) => {
	return (
		<li className="flex flex-row items-center justify-between py-2">
			<span>
				<ActiveLink href={slug} exact={exact}>
					{title}
				</ActiveLink>
			</span>
			<CarretRight />
		</li>
	);
};
