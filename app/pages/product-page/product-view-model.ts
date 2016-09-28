import { Observable } from 'data/observable';

import { Product } from '../../shared/interfaces';
import productsService = require('../../services/products-service');

export class ProductViewModel extends Observable implements Product {

	private _product: Product;

	constructor(source?: Product) {
		super();

		if (source) {
			this._product = source;	
		}
	}

	get id(): number {
		return this._product.id;
	}

	get name(): string {
		return this._product.name;
	}

	get price(): number {
		return this._product.price;
	}

	get likes(): number {
		return this._product.likes;
	}

	get imgUrl(): string {
		return this._product.imgUrl;
	}

	get description(): string {
		return this._product.description;
	}

	public addLikes() {
		let tmpID = this._product.id;
		productsService.likeProduct(tmpID).then(
			(response) => {
				alert(response.content.toString());
				
				productsService.getProductByID(tmpID).then(
					(newProduct: Product) => {
						this._product = newProduct;
						this.notifyPropertyChange(
							'product', this._product);
					}
				);
			}
		);
	}
}