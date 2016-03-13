import { Controller as Ctrl } from "ng-harmony/ng-harmony";
import { Controller } from "ng-harmony/ng-harmony-annotate";

@Controller({
	module: "bee",
	name: "Setup",
	deps: []
})
export default class SetupController extends Ctrl {
    constructor (...args) {
        super(...args);
        this.$scope.$on("forceawakens", (ev, force) => {
            this.$scope.$broadcast("forceawakened", force);
        });
    }

}