import type { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, model, year, limit, fuel } = filters;

  const headers = {
    'X-RapidAPI-Key': '31431567camsh6792c347cb9065ep1582cdjsn1cd87eb693cd',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const imagin_studio_customer_key = process.env.IMAGIN_STUDIO_CUSTOMER_KEY as string;

  const { make, model, year } = car;

  url.searchParams.append('customer', imagin_studio_customer_key);
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  if (angle) {
    url.searchParams.append('angle', `${angle}`);
  }

  return `${url}`;
};
