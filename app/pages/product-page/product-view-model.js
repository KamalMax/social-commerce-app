"use strict";
var observable_1 = require('data/observable');
var productsService = require('../../services/products-service');
var ProductViewModel = (function (_super) {
    __extends(ProductViewModel, _super);
    function ProductViewModel(source) {
        _super.call(this);
        if (source) {
            this._product = source;
        }
    }
    Object.defineProperty(ProductViewModel.prototype, "id", {
        get: function () {
            return this._product.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "name", {
        get: function () {
            return this._product.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "price", {
        get: function () {
            return this._product.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "likes", {
        get: function () {
            return this._product.likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "imgUrl", {
        get: function () {
            return this._product.imgUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "description", {
        get: function () {
            return this._product.description;
        },
        enumerable: true,
        configurable: true
    });
    ProductViewModel.prototype.addLikes = function () {
        var _this = this;
        var tmpID = this._product.id;
        productsService.likeProduct(tmpID).then(function (response) {
            alert(response.content.toString());
            productsService.getProductByID(tmpID).then(function (newProduct) {
                _this._product = newProduct;
                _this.notifyPropertyChange('product', _this._product);
            });
        });
    };
    return ProductViewModel;
}(observable_1.Observable));
exports.ProductViewModel = ProductViewModel;
//# sourceMappingURL=product-view-model.js.map