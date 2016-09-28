import http = require("http");

import constants = require('../shared/constants');
import loginService = require('./login-service');
import { Product } from '../shared/interfaces';

export function getProductsByPage(pageNum: number = 1): Promise<Array<Product>> {
	var url = `${constants.SERVER_URL}/products/page/${pageNum}`;
	return < Promise<Array<Product>> > http.getJSON(url);
}

export function getProductByID(productID: number): Promise<Product> {
	let url = `${constants.SERVER_URL}/product/${productID}`;
	return < Promise<Product> > http.getJSON(url);
}

export function likeProduct(productID: number): Promise<http.HttpResponse> {
	return http.request({
	    url: `${constants.SERVER_URL}/product/${productID}/like`,
	    method: "GET",
	    headers: { "Cookie": loginService.getCookie() }
	});
}

export function orderProduct(productID: number, orderNum: number): Promise<http.HttpResponse> {
	return http.request({
	    url: `${constants.SERVER_URL}/order/${productID}`,
	    method: "POST",
	    headers: { "Cookie": loginService.getCookie() },
	    content: `order_number=${orderNum}`
	});
}
