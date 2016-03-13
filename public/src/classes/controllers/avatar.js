import { EventedController } from "ng-harmony/ng-harmony-evented";

export default class Avatar extends EventedController {
	constructor (...args) {
		super(...args);
		this.settings = {
			key: "force",
			value: this.$scope.force
		};
		if (!this.$scope.force) {
			this.$scope.force = this.LocalStorage.fetch().force;
		}
		this.$scope.url = "assets/" + this.$scope.force + ".jpg";
		this.$scope.active = false;

		this.$scope.$on("forceawakened", (ev, force) => {
			if (force !== this.$scope.force) {
				this.$scope.active = false;
				this.digest();
			}
		});
	}
	"img.force::click" () {
		console.log("clicked");
		console.log(this.$scope);
		if (this.$scope.active || this.$scope.team) {
			return;
		}
		this.$scope.active = true;
		this.LocalStorage.save(this.settings);
		this.$scope.$emit("forceawakens", this.$scope.force);
	}
}
