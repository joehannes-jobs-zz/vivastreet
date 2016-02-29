# Ng-Harmony-Annotate
=====================

## Development

![Harmony = 6 + 7;](logo.png "Harmony - Fire in my eyes")

A (sample) ES7-proposal (babel-feature) annotation collection mimicking the upcoming Angular 2.0 code-style.
Write your own, contribute, and feel like a hero ... it's easy!

## Concept

This extra lib to ng-harmony will serve the purpose of providing annotation in Angular 2 style and more, designed for own purposes ...

Use it in conjunction with

* [literate-programming](http://npmjs.org/packages/literate-programming "click for npm-package-homepage") to write markdown-flavored literate JS, HTML and CSS
* [jspm](https://www.npmjs.com/package/jspm "click for npm-package-homepage") for a nice solution to handle npm-modules with ES6-Module-Format-Loading ...

## Files

This serves as literate-programming compiler-directive

[build/index.js](#Compilation "save:")

You can extend these literate-programming directives here ... the manual is (on jostylr@github/literate-programming)[https://github.com/jostylr/literate-programming]

## Compilation

The Decorator foos are annotation-driving translators that allow you to use Angular 2.0 like styles!

```javascript
    export function Component(val) {
        return function decorator(target) {
            angular.module(val.module).directive(val.selector, () => {
                return {
                    controller: target,
                    restrict: val.restrict || "A",
                    replace: val.replace || false,
                    templateUrl: val.templateUrl || null,
                    template: val.template || null,
                    scope: val.scope === true ? {} : (val.scope || null)
                };
            })
        }
    }

    export function Controller(val) {
        return function decorator(target) {
            let r = {};
            r[val.module] = {
                type: "controller",
                name: val.name
            }
            target.$register = r;
            if (val.deps !== null && typeof val.deps !== "undefined") {
                target.$inject = val.deps;
            }
        }
    }

    export function Service(val) {
        return function decorator(target) {
            let r = {};
            r[val.module] = {
                type: "service",
                name: val.name
            }
            target.$register = r;
            if (val.deps !== null && typeof val.deps !== "undefined") {
                target.$inject = val.deps;
            }
        }
    }
```

## CHANGELOG

*v0.1.9* Battle Testing and Debugging on the way
*v0.1.10* Renaming decision of directive to component
