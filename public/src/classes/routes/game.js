import { Controller as Ctrl } from "ng-harmony/ng-harmony";
import { Controller } from "ng-harmony/ng-harmony-annotate";

import json from "data.json!text";

@Controller({
    module: "bee",
    name: "Game",
    deps: ["LocalStorage", "$timeout", "$state"]
})
export default class GameController extends Ctrl {
    constructor (...args) {
        super(...args);
        this.LocalStorage.fetch();
        this.beeAccessor = ["queen", "workerbee", "drone"];
        this.$scope.feed = this.LocalStorage.game.feed || [];
        this.$scope.flow = JSON.parse(json);
        this.beeCount = [this.$scope.flow[0].name.length, this.$scope.flow[1].name.length, this.$scope.flow[2].name.length];
        this.settings = {
            key: "flow",
            value: this.$scope.flow
        };
        this.LocalStorage.save(this.settings);
        this.$scope.bees = [];
        for (let [i, bee] of this.$scope.flow.entries()) {
            for(let [j, name] of bee.name.entries()) {
                this.$scope.bees.push(name);
            }
        }
        this.$scope.force = this.LocalStorage.game.force;
        this.$scope.battlecry = this.LocalStorage.game.battlecry;
        this.cheers = [
            "Holymoly",
            "Yabbadabbadoo",
            "Yackomacko",
            "Cheeriohhhs",
            "HakunaMatata",
            "YippiehYayYoe",
            "Aye Karamba"
        ];
        this.$timeout(this.digest, 1000);
        this.$scope.$on("hit", () => {           
            let bee = this.getRandomBee(),
                data = this.getFlowDataByName(bee);
            if (this.scorePoints(data)) {
                this.youWon();
            }
            this.$scope.$broadcast("lovescore", data.type);
        });
    }
    getRandomBee () {
        var random = this.$scope.bees[Math.floor(Math.random() * this.$scope.bees.length)];
        var data = this.getFlowDataByName(random);
        if (this.$scope.flow[data.typeNr].score[data.beeNr] < 1) {
            let check = false;
            for (let [i, b] of this.$scope.flow.entries()) {
                for (let [j, s] of b.score.entries()) {
                    if (s > 1) { 
                        check = true; 
                    } 
                }
            }
            if (!check) { return; }
            return this.getRandomBee();
        }
        return random;
    }
    getFlowDataByName (beeName) {
        for (let [i, bee] of this.$scope.flow.entries()) {
            for(let [j, name] of bee.name.entries()) {
                if (name === beeName) {
                    return {
                        type: bee.type,
                        typeNr: i,
                        beeNr: j
                    };
                }
            }
        }
    }
    scorePoints (beeData) {
        var category = 0;//this.beeAccessor.indexOf[beeData.type]; //doesn't work, don't get it why though
        if (beeData.type === "workerbee") {
            category = 1;
        } else if (beeData.type === "drone") {
            category = 2;
        }
        var score = this.$scope.flow[category].score[beeData.beeNr] -= this.$scope.flow[category].hitpoints;
        this.feedMsg(score, beeData.type, this.$scope.flow[category].name[beeData.beeNr], this.$scope.flow[category].hitpoints);
        this.LocalStorage.save(this.settings);
        if (score < 1) {
            this.beeCount[category]--;
            this.$scope.$broadcast("beeup", beeData.type);
            this.feedMsg(null, beeData.type, this.$scope.flow[category].name[beeData.beeNr]);
        }
        return this.gameWon(category);
    }
    gameWon (category) {
        if (!this.beeCount[0]) {
            //haha, it's always the queen that says you win
            return true;
        }
        return false;
    }
    youWon () {
        this.$scope.feed.push({
            avatar: "assets/" + this.LocalStorage.fetch("force") + ".jpg",
            msg: "You made it! Congrats!!!! You won!!!"
        });
        this.digest();
        this.$timeout(() => { this.$state.go("goodbye"); }, 2500);
    }
    feedMsg (points, beeType, beeName, score) {
        var nr = this.getFlowDataByName(beeName).beeNr;
        if (beeType == "drone") {
            nr = Math.floor(nr / 4);
        }
        this.$scope.feed.push({
            tstamp: new Date().getTime(),
            avatar: "assets/" + beeType + nr + ".jpg",
            msg: points ? `You scored ${score}!! ${points} points left on ${beeName} - ${this.getRandomCheerup()}!!!` : `Yay! ${beeName}'s lovetank is full. Scored!!`
        })
        this.digest();
    }
    getRandomCheerup () {
        return this.cheers[Math.floor(Math.random() * 7)];
    }
}