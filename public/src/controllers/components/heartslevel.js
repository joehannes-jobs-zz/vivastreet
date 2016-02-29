import { EventedController as Ctrl } from "ng-harmony/ng-harmony-evented";
import { Controller, Component } from "ng-harmony/ng-harmony-annotate";

import tpl from "views/components/heartslevel.jade!";

@Component({
	module: "bee",
	selector: "heartslevel",
	template: tpl,
	restrict: "E",
	scope: {
		"type": "@",
        "lifes": "@"
	}
})
@Controller({
	module: "bee",
	name: "Heartslevel",
	deps: ["LocalStorage", "$timeout"]
})
export default class HeartslevelController extends Ctrl {
    constructor (...args) {
        super(...args);

        this.flow = this.LocalStorage.fetch("flow");

        this.$scope.avatar = `assets/heartslevel/${this.$scope.type}.jpg`;
        this.$scope.level = this.calcLevel();

        this.$scope.$on("lovescore", (ev, type) => {
            console.log("lovescore");
        	if (type === this.$scope.type) {
                console.log("type");
                this.$timeout(() => { 
                    this.$scope.level = this.calcLevel(); 
                    this.digest();
                }, 50);
            }
        });
        this.$scope.$on("beeup", (ev, type) => {
            if (type === this.$scope.type) {
                this.$scope.lifes -= 1;
                this.digest();
            }
        });
    }
    calcLevel () {
        let lvl = 0,
            typedBee = this.LocalStorage.game.flow[["queen", "workerbee", "drone"].indexOf(this.$scope.type)];
        typedBee.score.forEach((el, i, arr) => {
            lvl += (typedBee.total - el);
        });
        let cheat = [104, 107, 120]; //sorry, it's late ...
        cheat = cheat[["queen", "workerbee", "drone"].indexOf(this.$scope.type)];
        return Math.round(lvl / (typedBee.total * typedBee.score.length) * 100 / cheat * 100);
    }
}