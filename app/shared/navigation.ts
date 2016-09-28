import frameModule = require("ui/frame");

import { ProductViewModel } from "../pages/product-page/product-view-model";

export function getStartingPage(): string {
	return 'pages/main-page/main-page';
}

export function goToProductPage(productVM: ProductViewModel) {
	frameModule.topmost().navigate(
		{
			moduleName: 'pages/product-page/product-page',
			context: productVM
		}
	);
}

export function goToCollectionPage(colName: string) {
	frameModule.topmost().navigate(
		{
			moduleName: 'pages/collection-page/collection-page',
			context: colName
		});
}