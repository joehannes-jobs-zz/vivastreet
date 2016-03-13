import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/components/hitbutton.jade!";
import HitbuttonController from "src/controllers/hitbutton";

@Component({
	module: "bee",
	selector: "hitbutton",
	template: tpl,
	restrict: "E",
	scope: {}
})
class HitbuttonComponent extends HitbuttonController {};
