import http = require("http");
import appSettings = require("application-settings");;


const COOKIE_KEY: string = "COOKIE";

export function login(name: string, password: string): Promise<http.HttpResponse> {
	return http.request({
	    url: "http://expa.ir:8585/user/login",
	    method: "POST",
	    content: `name=${name}&password=${password}`
	});
}

export function updateCookie(cookie: string) {
	appSettings.setString(COOKIE_KEY, cookie);
}

export function getCookie(): string {
	return appSettings.getString(COOKIE_KEY, '');
}
