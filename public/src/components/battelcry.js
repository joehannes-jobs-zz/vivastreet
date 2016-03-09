import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/components/battlecry.jade!";
import BattlecryController from "src/controllers/battlecry";

@Component({
	module: "bee",
	selector: "battlecry",
	template: tpl,
	restrict: "E",
	scope: {
		"slogan": "@"
	}
})
BattlecryController;
