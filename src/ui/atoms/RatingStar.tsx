import { Star } from "@/ui/atoms/Star";

type RatingStarProps = {
	rating: number;
	totalStars?: number;
	filledStarColor?: string;
	emptyStarColor?: string;
};
export const RatingStar = ({
	rating,
	totalStars = 5,
	filledStarColor = "#fde047",
	emptyStarColor = "gray",
}: RatingStarProps) => {
	const stars = [];
	// Wyznacz ile razy wyrenderować komponent <Star /> z rating=100
	const fullStarsCount = Math.floor(rating);
	//Fill gwiazdki częściowo zakolorowanej
	const partialStarFillPercentage = Math.round((rating % 1) * 100);
	// Obliczenie ile gwiazdek częściowo zakolorowanych (na podstawie reszty)
	const partialStarsCount = partialStarFillPercentage > 0 ? 1 : 0;
	// Obliczenie ile gwiazdek pustych
	const emptyStarsCount = totalStars - fullStarsCount - partialStarsCount;

	//Generuj zapełnione gwiazdki
	for (let i = 0; i < fullStarsCount; i++) {
		stars.push(
			<Star rating={100} filledStarColor={filledStarColor} emptyStarColor={emptyStarColor} />,
		);
	}

	//Generuj częściowo zapełnione gwiazdki
	for (let i = 0; i < partialStarsCount; i++) {
		stars.push(
			<Star
				rating={partialStarFillPercentage}
				filledStarColor={filledStarColor}
				emptyStarColor={emptyStarColor}
			/>,
		);
	}

	//Generuj puste gwiazdki
	for (let i = 0; i < emptyStarsCount; i++) {
		stars.push(
			<Star rating={0} filledStarColor={filledStarColor} emptyStarColor={emptyStarColor} />,
		);
	}

	return (
		<div className="my-4 inline-flex">
			{stars}
			<span className="ml-3 mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black">
				{rating}
			</span>
		</div>
	);
};
