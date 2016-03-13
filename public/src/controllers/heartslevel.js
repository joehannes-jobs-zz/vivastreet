import { Controller } from "ng-harmony/ng-harmony-annotate";
import Heartslevel from "src/classes/controllers/heartslevel";

@Controller({
	module: "bee",
	name: "Heartslevel",
	deps: ["LocalStorage", "$timeout"]
})
export default class HeartslevelController extends Heartslevel {};
