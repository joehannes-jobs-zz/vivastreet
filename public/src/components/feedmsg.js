import { Component } from "ng-harmony/ng-harmony-annotate";
import tpl from "views/components/feedmsg.jade!";
import FeedmsgController from "src/controllers/feedmsg";

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
FeedmsgController;
