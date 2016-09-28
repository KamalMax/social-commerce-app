"use strict";
var page;
var viewModel;
function onNavigated(navigatedData) {
    page = navigatedData.object;
    viewModel = navigatedData.context;
    page.bindingContext = viewModel;
}
exports.onNavigated = onNavigated;
//# sourceMappingURL=product-page.js.map