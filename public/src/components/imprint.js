import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/imprint.jade!";
import ImprintController from "src/controllers/imprint";

@Component({
	module: "bee",
	selector: "imprint",
	restrict: "A",
	template: tpl,
	scope: {}
})
ImprintController;
