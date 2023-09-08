export const formatPrice = (amount: number, locale: string = "en-EN", currency: string = "EUR") => {
	return new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(amount);
};
