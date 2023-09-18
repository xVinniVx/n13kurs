import React from "react";
import { HeroSection } from "@/ui/atoms/HeroSection";
import { SectionHeader } from "@/ui/atoms/SectionHeader";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { CategoryBoxList } from "@/ui/organisms/CategoryBoxList";
import { BlogBoxList } from "@/ui/organisms/BlogBoxList";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<SectionHeader title={"Szczególnie polecamy"} text={"Oto nasze lumpy w ofercie"} />
			<SuggestedProducts />
			<SectionHeader
				title={"Popularne kategorie"}
				text={"Nadmiar kategorii oszałamia? Oto najpopularniejsze z nich!"}
			/>
			<CategoryBoxList />
			<SectionHeader
				title={"Bestsellery miesiąca"}
				text={"Na tych produktach zarobiliśmy najwięcej!"}
			/>
			<SuggestedProducts />
			<SectionHeader title={"Nasz blog"} text={"Nikt normalny tego nie czyta, no ale SEO..."} />
			<BlogBoxList />
		</>
	);
}
