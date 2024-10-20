export async function fetchCars() {
	const headers = {
		"X-RapidAPI-Key": "31431567camsh6792c347cb9065ep1582cdjsn1cd87eb693cd",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};
	const response = await fetch(
		"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
		{
			headers: headers,
		},
	);

	const result = await response.json();

	return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05;

	// Calculate additional price based on mileage and age
	const mileagePrice = city_mpg * mileageFactor;
	const agePrice = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental price by adding base price and additional price
	const rentalPrice = basePricePerDay + mileagePrice + agePrice;

	return rentalPrice.toFixed(0);
};
