import { EventData } from 'data/observable';
import { GestureEventData } from 'ui/gestures';
import { Page } from 'ui/page';
import { TextView } from 'ui/text-view';

import loginService = require('../../services/login-service');

let page: Page;

export function onPageLoaded(eventData: EventData) {
	page = <Page> eventData.object;

}

export function loginButtonTap(gesture: GestureEventData) {
	let nameTextView = 
		<TextView> page.getViewById('login_name_tv');
	let passwordTextView = 
		<TextView> page.getViewById('login_password_tv');

	loginService.login(
		nameTextView.text, passwordTextView.text).then(
			(response) => {
				alert(response.content.toString());
				
				if (response.headers['Set-Cookie']) {
					loginService.updateCookie( 
						response.headers['Set-Cookie'].
							toString().split(";")[0]
					);
				}
			}
		);
}