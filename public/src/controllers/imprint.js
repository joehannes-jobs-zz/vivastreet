import { Controller as Ctrl } from "ng-harmony/ng-harmony";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/imprint.jade!";

@Component({
	module: "bee",
	selector: "imprint",
	restrict: "A",
	template: tpl,
	scope: {}
})
@Controller({
	module: "bee",
	name: "Imprint",
	deps: []
})
export default class ImprintController extends Ctrl {
    constructor (...args) {
        super(...args);

        this.$scope.vcard = {
    		name: "DI (FH) Johannes Neugschwentner",
    		aka: "joehannes",
    		email: "johannes.neugschwentner@gmail.com",
    		phone: "+43 (0)660 2398633",
    		github: "http://www.github.com/joehannes",
    		profile: "http://careers.stackoverflow.com/joehannes"
		};
    }
}