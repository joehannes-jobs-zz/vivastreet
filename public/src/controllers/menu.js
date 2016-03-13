import { Controller } from "ng-harmony/ng-harmony-annotate";
import Menu from "src/classes/controllers/menu";

@Controller({
	module: "bee",
	name: "Menu",
	deps: ["LocalStorage", "$rootScope"]
})
export default class MenuController extends Menu {};
