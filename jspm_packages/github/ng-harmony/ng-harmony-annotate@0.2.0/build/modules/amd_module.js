export function Component(val) {
    return function decorator(target) {
        angular.module(val.module).directive(val.selector, () => {
            return {
                controller: target,
                restrict: val.restrict || "A",
                replace: val.replace || false,
                templateUrl: val.templateUrl || null,
                template: val.template || null,
                scope: val.scope === true ? {} : val.scope || null
            };
        });
    };
}

export function Controller(val) {
    return function decorator(target) {
        let r = {};
        r[val.module] = {
            type: "controller",
            name: val.name
        };
        target.$register = r;
        if (val.deps !== null && typeof val.deps !== "undefined") {
            target.$inject = val.deps;
        }
    };
}

export function Service(val) {
    return function decorator(target) {
        let r = {};
        r[val.module] = {
            type: "service",
            name: val.name
        };
        target.$register = r;
        if (val.deps !== null && typeof val.deps !== "undefined") {
            target.$inject = val.deps;
        }
    };
}

//# sourceMappingURL=amd_module.js.map