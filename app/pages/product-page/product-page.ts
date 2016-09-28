import { EventData } from 'data/observable';
import { GestureEventData } from 'ui/gestures';
import { Page, NavigatedData } from 'ui/page';

import { ProductViewModel } from './product-view-model';
import productsService = require('../../services/products-service');

let page: Page;
let viewModel: ProductViewModel;

export function onNavigated(navigatedData: NavigatedData) {
	page = <Page> navigatedData.object;
	viewModel = navigatedData.context;
	page.bindingContext = viewModel;
}