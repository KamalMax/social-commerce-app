"use strict";
var http = require("http");
var appSettings = require("application-settings");
;
var COOKIE_KEY = "COOKIE";
function login(name, password) {
    return http.request({
        url: "http://expa.ir:8585/user/login",
        method: "POST",
        content: "name=" + name + "&password=" + password
    });
}
exports.login = login;
function updateCookie(cookie) {
    appSettings.setString(COOKIE_KEY, cookie);
}
exports.updateCookie = updateCookie;
function getCookie() {
    return appSettings.getString(COOKIE_KEY, '');
}
exports.getCookie = getCookie;
//# sourceMappingURL=login-service.js.map