import { Controller } from "ng-harmony/ng-harmony";
import json from "json/vcard.json!text";

export default class Imprint extends  Controller {
	constructor (...args) {
		super(...args);

		this.$scope.vcard = JSON.parse(json);
	}
}
