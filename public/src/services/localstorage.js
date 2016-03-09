import { Service } from "ng-harmony/ng-harmony-annotate";
import LocalStorage from "src/classes/services/localstorage";

@Service({
    module: "bee",
    name: "LocalStorage",
    deps: []
})
LocalStorage;
