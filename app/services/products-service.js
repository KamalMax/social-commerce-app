"use strict";
var http = require("http");
var constants = require('../shared/constants');
var loginService = require('./login-service');
function getProductsByPage(pageNum) {
    if (pageNum === void 0) { pageNum = 1; }
    var url = constants.SERVER_URL + "/products/page/" + pageNum;
    return http.getJSON(url);
}
exports.getProductsByPage = getProductsByPage;
function getProductByID(productID) {
    var url = constants.SERVER_URL + "/product/" + productID;
    return http.getJSON(url);
}
exports.getProductByID = getProductByID;
function likeProduct(productID) {
    return http.request({
        url: constants.SERVER_URL + "/product/" + productID + "/like",
        method: "GET",
        headers: { "Cookie": loginService.getCookie() }
    });
}
exports.likeProduct = likeProduct;
function orderProduct(productID, orderNum) {
    return http.request({
        url: constants.SERVER_URL + "/order/" + productID,
        method: "POST",
        headers: { "Cookie": loginService.getCookie() },
        content: "order_number=" + orderNum
    });
}
exports.orderProduct = orderProduct;
//# sourceMappingURL=products-service.js.map