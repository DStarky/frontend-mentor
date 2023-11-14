import { Product } from 'src/types';

import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';

import image1thumb from 'images/image-product-1-thumbnail.jpg';
import image2thumb from 'images/image-product-2-thumbnail.jpg';
import image3thumb from 'images/image-product-3-thumbnail.jpg';
import image4thumb from 'images/image-product-4-thumbnail.jpg';

export const images = [
	{
		id: 1,
		img: image1,
		thumbnail: image1thumb,
		isActive: false,
	},
	{
		id: 2,
		img: image2,
		thumbnail: image2thumb,
		isActive: false,
	},
	{
		id: 3,
		img: image3,
		thumbnail: image3thumb,
		isActive: false,
	},
	{
		id: 4,
		img: image4,
		thumbnail: image4thumb,
		isActive: false,
	},
];

export const products: Product[] = [
	{
		id: 1,
		name: 'Fall Limited Edition Sneakers',
		price: 125,
		currency: '$',
		oldPrice: 250,
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
	},
];
