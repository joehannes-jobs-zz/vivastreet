import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/menu.jade!";
import MenuController from "src/controllers/menu";

@Component({
	module: "bee",
	selector: "menu",
	restrict: "A",
	template: tpl,
	scope: {}
})
MenuController;
