import http = require("http");

import constants = require('../shared/constants');
import loginService = require('./login-service');
import { Collection, Product } from '../shared/interfaces';

export function getCollectionsByPage(pageNum: number = 1): Promise<Array<Collection>> {
	var url = `${constants.SERVER_URL}/collections/page/${pageNum}`;
	return < Promise<Array<Collection>> > http.getJSON(url);
}

export function getCollectionByName(colName: string): Promise<Collection> {
	let url = `${constants.SERVER_URL}/collection/${colName}`;
	return < Promise<Collection> > http.getJSON(url);
}