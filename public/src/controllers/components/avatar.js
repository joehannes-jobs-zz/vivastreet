import { EventedController as Ctrl } from "ng-harmony/ng-harmony-evented";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/components/avatar.jade!";

@Component({
	module: "bee",
	selector: "avatar",
	template: tpl,
	restrict: "E",
	scope: {
		"force": "@",
        "team": "@",
        "size": "@"
	}
})
@Controller({
	module: "bee",
	name: "Avatar",
	deps: ["LocalStorage"]
})
export default class AvatarController extends Ctrl {
    constructor (...args) {
        super(...args);
        this.settings = {
        	key: "force",
        	value: this.$scope.force
        }
        if (!this.$scope.force) {
            this.$scope.force = this.LocalStorage.fetch().force;
        }
        this.$scope.url = "assets/" + this.$scope.force + ".jpg";
        this.$scope.active = false;

        this.$scope.$on("forceawakened", (ev, force) => {
        	if (force !== this.$scope.force) {
        		this.$scope.active = false;
        		this.digest();
        	}
        });
    }
    "img.force::click" () {
    	if (this.$scope.active || this.$scope.team) {
    		return;
    	}
    	this.$scope.active = true;
    	this.LocalStorage.save(this.settings);
    	this.$scope.$emit("forceawakens", this.$scope.force);
    }
}