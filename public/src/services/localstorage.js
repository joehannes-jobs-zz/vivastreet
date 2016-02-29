import { Service as S } from "ng-harmony/ng-harmony";
import { Service } from "ng-harmony/ng-harmony-annotate"; 

@Service({
    module: "bee",
    name: "LocalStorage",
    deps: []
})
export default class LocalStorageService extends S {
    static get STORAGE_ID () {
        return "honeybee_game";
    }
    constructor (...args) {
        super(...args);
        this.game = {};
        this.fetch();
    }
    _getFromLocalStorage () {
		return JSON.parse(localStorage.getItem(LocalStorageService.STORAGE_ID) || "{}");
	}
	_saveToLocalStorage (game) {
		localStorage.setItem(LocalStorageService.STORAGE_ID, JSON.stringify(game));
	}

    delete () {
        this._saveToLocalStorage({});
    }
    fetch (key) {
        angular.copy(this._getFromLocalStorage(), this.game);
        return key ? this.game[key] : this.game;
    }
    save (setting) {
        this.game[setting.key] = setting.value;
        this._saveToLocalStorage(this.game);
    }
}