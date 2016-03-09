import { Controller } from "ng-harmony/ng-harmony-annotate";
import Battlecry from "src/classes/controllers/battlecry";

@Controller({
	module: "bee",
	name: "Battlecry",
	deps: ["LocalStorage", "$state"]
})
export default Battlecry;
