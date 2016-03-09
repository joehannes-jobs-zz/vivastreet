import { EventedController } from "ng-harmony/ng-harmony-evented";

export default class Hitbutton extends EventedController {
	"img.hitbutton::click" () {
		this.$scope.$emit("hit");
	}
}
