import { EventedController as Ctrl } from "ng-harmony/ng-harmony-evented";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/components/hitbutton.jade!";

@Component({
	module: "bee",
	selector: "hitbutton",
	template: tpl,
	restrict: "E",
	scope: {}
})
@Controller({
	module: "bee",
	name: "Hitbutton",
	deps: []
})
export default class HitbuttonController extends Ctrl {
    constructor (...args) {
        super(...args);
    }
    "img.hitbutton::click" () {
        this.$scope.$emit("hit");
    }

}