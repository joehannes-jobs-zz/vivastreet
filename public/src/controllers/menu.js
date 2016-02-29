import { EventedController as Ctrl } from "ng-harmony/ng-harmony-evented";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/menu.jade!";

@Component({
	module: "bee",
	selector: "menu",
	restrict: "A",
	template: tpl,
	scope: {}
})
@Controller({
	module: "bee",
	name: "Menu",
	deps: ["LocalStorage", "$rootScope"]
})
export default class MenuController extends Ctrl {
    constructor (...args) {
        super(...args);

        this.$scope.menu = [
        	{
        		name: "Story",
        		route: "intro",
        		icon: "info circle"
			},
			{
				name: "Setup",
				route: "setup",
				icon: "wrench"
			},
			{
				name: "Play",
				route: "game",
				icon: "game"
			}
		];

		this.$rootScope.$on("$stateChangeSuccess", (ev, toState, toParams, fromState, fromParams) => {
			this.$scope.battlecry = this.LocalStorage.fetch().battlecry || toParams.battlecry || "";
			//can't find the error right now ... it's plain not working here
		});
    }
    "a.reset::click" () {
    	this.LocalStorage.delete();
    }
}