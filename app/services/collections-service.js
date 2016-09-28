"use strict";
var http = require("http");
var constants = require('../shared/constants');
function getCollectionsByPage(pageNum) {
    if (pageNum === void 0) { pageNum = 1; }
    var url = constants.SERVER_URL + "/collections/page/" + pageNum;
    return http.getJSON(url);
}
exports.getCollectionsByPage = getCollectionsByPage;
function getCollectionByName(colName) {
    var url = constants.SERVER_URL + "/collection/" + colName;
    return http.getJSON(url);
}
exports.getCollectionByName = getCollectionByName;
//# sourceMappingURL=collections-service.js.map