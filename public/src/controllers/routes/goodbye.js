import { Controller as Ctrl } from "ng-harmony/ng-harmony";
import { Controller } from "ng-harmony/ng-harmony-annotate";

@Controller({
	module: "bee",
	name: "Goodbye",
	deps: []
})
export default class GoodbyeController extends Ctrl {
    constructor (...args) {
        super(...args);
        this.$scope.msg = "Cheers, happy day!!!"
    }

}