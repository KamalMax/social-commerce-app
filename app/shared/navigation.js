"use strict";
var frameModule = require("ui/frame");
function getStartingPage() {
    return 'pages/main-page/main-page';
}
exports.getStartingPage = getStartingPage;
function goToProductPage(productVM) {
    frameModule.topmost().navigate({
        moduleName: 'pages/product-page/product-page',
        context: productVM
    });
}
exports.goToProductPage = goToProductPage;
function goToCollectionPage(colName) {
    frameModule.topmost().navigate({
        moduleName: 'pages/collection-page/collection-page',
        context: colName
    });
}
exports.goToCollectionPage = goToCollectionPage;
//# sourceMappingURL=navigation.js.map