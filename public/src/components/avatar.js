import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/components/avatar.jade!";
import AvatarController from "src/controllers/avatar";

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
AvatarController;
