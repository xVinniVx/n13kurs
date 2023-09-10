import { type ProductItemType } from "@/ui/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItemType[] = [
	{
		id: 1,
		category: "Shoes",
		name: "Modern Sneakers",
		price: 2345,
		image: {
			src: "/img/shoe_a_01.jpg",
			alt: "Product Image",
		},
		oldPrice: 1987,
	},
	{
		id: 2,
		category: "Bags",
		name: "Super Awesome Bag",
		price: 5127,
		image: {
			src: "/img/bag_a_01.jpg",
			alt: "Product Image",
		},
		oldPrice: 3674,
	},
	{
		id: 3,
		category: "Accessories",
		name: "Premium Belt - I think",
		price: 789,
		image: {
			src: "/img/belt_a_01.jpg",
			alt: "Product Image",
		},
		oldPrice: 0,
	},
	{
		id: 4,
		category: "Shoes",
		name: "Classic Sneakers",
		price: 4210,
		image: {
			src: "/img/shoe_b_01.jpg",
			alt: "Product Image",
		},
		oldPrice: 0,
	},
];

export default function Home() {
	return (
		<body className="bg-white">
			<section className="sm:py-18 mx-auto flex w-full max-w-screen-2xl flex-grow flex-col bg-gray-200 py-8 sm:px-6 lg:max-w-screen-2xl">
				<ProductList products={products} />
			</section>
		</body>
	);
}
