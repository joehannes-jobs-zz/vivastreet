import { Controller } from "ng-harmony/ng-harmony-annotate";
import Avatar from "src/classes/controllers/avatar";

@Controller({
	module: "bee",
	name: "Avatar",
	deps: ["LocalStorage"]
})
export default class AvatarController extends Avatar {
	constructor (...args) {
		super(...args);
	}
};
