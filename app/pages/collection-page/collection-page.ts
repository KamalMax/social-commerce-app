import { EventData } from 'data/observable';
import { ItemEventData } from 'ui/list-view';
import { Page, NavigatedData } from 'ui/page';

import navigationModule = require("../../shared/navigation");
import collectionsService = require("../../services/collections-service");

import { CollectionViewModel } from './collection-view-model';
import { ProductViewModel } from '../product-page/product-view-model';


let page: Page;
let viewModel: CollectionViewModel;

export function onNavigated(navigatedData: NavigatedData) {
	page = <Page> navigatedData.object;
	collectionsService.
		getCollectionByName(navigatedData.context).then(
			col => {
				viewModel = new CollectionViewModel(col);
				page.bindingContext = viewModel;
			}
		);
}

export function onItemTap(eventData: ItemEventData) {
	var productVM = <ProductViewModel> eventData.view.bindingContext;
	navigationModule.goToProductPage(productVM);
}