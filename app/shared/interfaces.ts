export interface Product {
	id: number;
	name: string;
	price: number;
	likes:number;
	imgUrl: string;
	description: string;
}

export interface Category {
	id: number;
	name: string;
	imgUrl: string;
	products: Array<Product>;
}

export interface Collection {
	id: number;
	name: string;
	imgUrl: string;
	products: Array<Product>;
}