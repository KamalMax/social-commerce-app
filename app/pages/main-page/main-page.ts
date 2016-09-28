import { EventData } from 'data/observable';
import { ItemEventData } from 'ui/list-view';
import { Page } from 'ui/page';

import navigationModule = require("../../shared/navigation");

import { MainViewModel } from './main-view-model';
import { CollectionViewModel } from '../collection-page/collection-view-model';

let page: Page;
let viewModel = new MainViewModel();

export function onPageLoaded(eventData: EventData) {
	page = <Page> eventData.object;
	page.bindingContext = viewModel;
}

export function onItemTap(eventData: ItemEventData) {
	var collectionVM = <CollectionViewModel> eventData.view.bindingContext;
	navigationModule.goToCollectionPage(collectionVM.name);
}