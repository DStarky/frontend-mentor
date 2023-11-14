export type ImageType = {
	id: number;
	img: string;
	thumbnail: string;
	isActive: boolean;
};

export type Product = {
	name: string;
	price: number;
	currency: string;
	oldPrice: number;
	description: string;
	id: number;
};
