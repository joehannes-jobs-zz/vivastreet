import { Controller } from "ng-harmony/ng-harmony-annotate";
import Imprint from "src/classes/controllers/imprint";

@Controller({
	module: "bee",
	name: "Imprint",
	deps: []
})
export default class ImprintController extends Imprint {};
