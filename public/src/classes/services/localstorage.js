import { Service } from "ng-harmony/ng-harmony";

export default class LocalStorage extends Service {
	static get STORAGE_ID () {
		return "honeybee_game";
	}
	constructor (...args) {
		super(...args);
		this.game = {};
		this.fetch();
	}
	_getFromLocalStorage () {
		var raw = (localStorage.getItem(LocalStorageService.STORAGE_ID) || "{}");
		return JSON.parse(raw);
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
