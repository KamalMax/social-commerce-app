"use strict";
var loginService = require('../../services/login-service');
var page;
function onPageLoaded(eventData) {
    page = eventData.object;
}
exports.onPageLoaded = onPageLoaded;
function loginButtonTap(gesture) {
    var nameTextView = page.getViewById('login_name_tv');
    var passwordTextView = page.getViewById('login_password_tv');
    loginService.login(nameTextView.text, passwordTextView.text).then(function (response) {
        alert(response.content.toString());
        if (response.headers['Set-Cookie']) {
            loginService.updateCookie(response.headers['Set-Cookie'].
                toString().split(";")[0]);
        }
    });
}
exports.loginButtonTap = loginButtonTap;
//# sourceMappingURL=login-page.js.map