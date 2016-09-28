"use strict";
var observable_1 = require('data/observable');
var CollectionViewModel = (function (_super) {
    __extends(CollectionViewModel, _super);
    function CollectionViewModel(source) {
        _super.call(this);
        if (source) {
            this._collection = source;
        }
    }
    Object.defineProperty(CollectionViewModel.prototype, "id", {
        get: function () {
            return this._collection.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "name", {
        get: function () {
            return this._collection.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "imgUrl", {
        get: function () {
            return this._collection.imgUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollectionViewModel.prototype, "products", {
        get: function () {
            return this._collection.products;
        },
        enumerable: true,
        configurable: true
    });
    return CollectionViewModel;
}(observable_1.Observable));
exports.CollectionViewModel = CollectionViewModel;
//# sourceMappingURL=collection-view-model.js.map