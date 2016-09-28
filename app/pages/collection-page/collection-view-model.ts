import { Observable } from 'data/observable';

import { Collection, Product } from '../../shared/interfaces';
import collectionsService = require('../../services/collections-service');

export class CollectionViewModel extends Observable implements Collection {

	private _collection: Collection;

	constructor(source?: Collection) {
		super();

		if (source) {
			this._collection = source;	
		}
	}

	get id(): number {
		return this._collection.id;
	}

	get name(): string {
		return this._collection.name;
	}

	get imgUrl(): string {
		return this._collection.imgUrl;
	}

	get products(): Array<Product> {
		return this._collection.products;
	}
}