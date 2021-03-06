import bean from 'fat/bean';
import zest from 'zest';
import { Controller } from 'ng-harmony/ng-harmony';

export class StateController extends Controller {
    constructor(...args) {
        super(...args);

        for (let [key, fn] of this.iterate(this.constructor.prototype)) {
            if (typeof fn !== "function" || !! ~["constructor", "initialize"].indexOf(key) || ! ~["§"].indexOf(key[0])) {
                continue;
            }
            (_fn => {
                this.$scope.$on(key.match(/w+/)[0], (event, state, ...args) => {
                    if (event.defaultPrevented) {
                        return;
                    } else {
                        event.preventDefault();
                        let _args = _fn();
                        this.$scope.$broadcast(key.match(/w+/)[1], ..._args).then((title, ...args) => {
                            this.$scope.$emit(title, ...args);
                        }).then(msg => {
                            console.warn({
                                msg: "Promise not fulfilled in Broadcast-Session",
                                origin: this
                            });
                        });
                    }
                });
            })(fn);
        }
    }
}

export class EventedController extends Controller {
    constructor(...args) {
        super(...args);

        for (let [key, fn] of this.iterate(this.constructor.prototype)) {
            if (typeof fn !== "function" || !! ~["constructor", "initialize"].indexOf(key) || !! ~["_", "§", "$"].indexOf(key[0])) {
                continue;
            }
            if (key.match("::")) {
                let tokens = key.split("::");
                if (typeof tokens[2] !== "undefined" && tokens[2] !== null && !! ~tokens[2].indexOf("<")) {
                    tokens.splice(2, 1, ...tokens[2].split("<"));
                }
                let element = this.$element ? this.$element.context : document.body;
                for (let [i, el] of tokens[0] ? zest(tokens[0], element).entries() : [element].entries()) {
                    ((_i, _el, _fn) => {
                        let __fn = (ev, ...args) => {
                            if (typeof tokens[2] !== "undefined" && tokens[2] !== null) {
                                if (typeof tokens[3] !== "undefined" && tokens[3] !== null) {
                                    let __el = ev.currentTarget.parentNode;
                                    while (!zest.matches(__el, tokens[3])) {
                                        __el = __el.parentNode;
                                    }
                                    let list = Array.prototype.slice.call(__el.parentNode.children);
                                    this.$scope.i = list.indexOf(__el);
                                } else {
                                    let __el = ev.currentTarget;
                                    let list = Array.prototype.slice.call(__el.parentNode.children);
                                    this.$scope.i = list.indexOf(__el);
                                }
                            }
                            _fn.call(this, ev, ...args);
                            this.digest();
                        };
                        bean.on(_el, tokens[1], tokens[2] || __fn, tokens[2] ? __fn : null);
                    })(i, el, fn);
                }
            }
        }
    }
}
EventedController.$inject = "$element";

//# sourceMappingURL=system_module.js.map