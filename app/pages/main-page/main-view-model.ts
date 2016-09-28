import { Observable } from 'data/observable';
import observableArray = require("data/observable-array");

import { CollectionViewModel } from '../collection-page/collection-view-model';
import { Collection } from '../../shared/interfaces';
import collectionsService = require('../../services/collections-service');


export class MainViewModel extends Observable {

	private _collections: Array<CollectionViewModel> = new Array<CollectionViewModel>(); 

	constructor() {
		super();
		this.set('isLoading', true);
		this.init();
	}

	get collections(): observableArray.ObservableArray<CollectionViewModel> {
		return new observableArray.ObservableArray(this._collections);
	}

	private init() {
		this.initListView();
	}

	private initListView() {
		collectionsService.
			getCollectionsByPage().then(
				(items: Array<Collection>) => {
					this.pickListViewItems(items);
				}
			).catch(
				() => {
					alert('No internet trying in 10 seconds...');
					setTimeout(
						() => { this.initListView(); }, 10000);
				}
			);
	}

	private pickListViewItems(items: Array<Collection>) {
		for (var item of items) {
			this._collections.push(
				new CollectionViewModel(item));
		}

		this.notifyPropertyChange(
			'collections', this._collections);
		this.set('isLoading', false);
	}
}