import { redirect } from "next/navigation";

export default function CategoriesBlankPage({ params }: { params: { slug: string } }) {
	redirect(`/categories/${params.slug}/1`);
}
