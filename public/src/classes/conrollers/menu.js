import { EventedController } from "ng-harmony/ng-harmony-evented";
import json from "json/menu.json!text";

export default class Menu extends EventedController {
	constructor (...args) {
		super(...args);

		this.$scope.menu = JSON.parse(json);

		this.$rootScope.$on("$stateChangeSuccess",
			(ev, toState, toParams, fromState, fromParams) => {
				this.$scope.battlecry = this.LocalStorage.fetch().battlecry || toParams.battlecry || "";
				//can't find the error right now ... it's plain not working here
		});
	}
	"a.reset::click" () {
		this.LocalStorage.delete();
	}
}
