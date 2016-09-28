"use strict";
var navigationModule = require("../../shared/navigation");
var collectionsService = require("../../services/collections-service");
var collection_view_model_1 = require('./collection-view-model');
var page;
var viewModel;
function onNavigated(navigatedData) {
    page = navigatedData.object;
    collectionsService.
        getCollectionByName(navigatedData.context).then(function (col) {
        viewModel = new collection_view_model_1.CollectionViewModel(col);
        page.bindingContext = viewModel;
    });
}
exports.onNavigated = onNavigated;
function onItemTap(eventData) {
    var productVM = eventData.view.bindingContext;
    navigationModule.goToProductPage(productVM);
}
exports.onItemTap = onItemTap;
//# sourceMappingURL=collection-page.js.map