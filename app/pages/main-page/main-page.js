"use strict";
var navigationModule = require("../../shared/navigation");
var main_view_model_1 = require('./main-view-model');
var page;
var viewModel = new main_view_model_1.MainViewModel();
function onPageLoaded(eventData) {
    page = eventData.object;
    page.bindingContext = viewModel;
}
exports.onPageLoaded = onPageLoaded;
function onItemTap(eventData) {
    var collectionVM = eventData.view.bindingContext;
    navigationModule.goToCollectionPage(collectionVM.name);
}
exports.onItemTap = onItemTap;
//# sourceMappingURL=main-page.js.map