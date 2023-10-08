import { SectionHeader } from "@/ui/atoms/SectionHeader";
import { type CollectionListType } from "@/ui/types";
import { BoxImageLink } from "@/ui/molecules/BoxImageLink";

export const SectionBoxList = ({
	title,
	text,
	elements,
}: {
	title: string;
	text: string;
	elements: CollectionListType[];
}) => {
	return (
		<>
			<SectionHeader title={title} text={text} />
			<div className="mx-auto my-10 flex max-w-screen-2xl flex-col items-center justify-between gap-2 lg:flex-row">
				{elements.map((element) => (
					<BoxImageLink
						image={element.image}
						slug={element.slug}
						title={element.name}
						key={element.id}
					/>
				))}
			</div>
		</>
	);
};
