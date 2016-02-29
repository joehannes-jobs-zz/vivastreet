import { EventedController as Ctrl } from "ng-harmony/ng-harmony-evented";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/components/feedmsg.jade!";

@Component({
	module: "bee",
	selector: "feedmsg",
	template: tpl,
	restrict: "E",
	scope: {
		"avatar": "@",
		"msg": "@"
	}
})
@Controller({
	module: "bee",
	name: "Feedmsg",
	deps: []
})
export default class FeedmsgController extends Ctrl {
    constructor (...args) {
        super(...args);   
    }
}