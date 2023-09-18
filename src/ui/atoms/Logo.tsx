import { pageTitle } from "@/app/globalVariables";

export const Logo = () => {
	return (
		<a href="/" title={pageTitle} className="mx-auto">
			<img src="/img/logo.svg" className="h-4 lg:h-8" alt={pageTitle} />
		</a>
	);
};
