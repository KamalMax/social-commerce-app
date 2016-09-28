"use strict";
var observable_1 = require('data/observable');
var observableArray = require("data/observable-array");
var collection_view_model_1 = require('../collection-page/collection-view-model');
var collectionsService = require('../../services/collections-service');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this._collections = new Array();
        this.set('isLoading', true);
        this.init();
    }
    Object.defineProperty(MainViewModel.prototype, "collections", {
        get: function () {
            return new observableArray.ObservableArray(this._collections);
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        this.initListView();
    };
    MainViewModel.prototype.initListView = function () {
        var _this = this;
        collectionsService.
            getCollectionsByPage().then(function (items) {
            _this.pickListViewItems(items);
        }).catch(function () {
            alert('No internet trying in 10 seconds...');
            setTimeout(function () { _this.initListView(); }, 10000);
        });
    };
    MainViewModel.prototype.pickListViewItems = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this._collections.push(new collection_view_model_1.CollectionViewModel(item));
        }
        this.notifyPropertyChange('collections', this._collections);
        this.set('isLoading', false);
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map