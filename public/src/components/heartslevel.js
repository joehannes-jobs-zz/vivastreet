import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/components/heartslevel.jade!";
import HeartslevelController from "src/controllers/heartslevel";

@Component({
	module: "bee",
	selector: "heartslevel",
	template: tpl,
	restrict: "E",
	scope: {
		"type": "@",
        "lifes": "@"
	}
})
HeartslevelController;
