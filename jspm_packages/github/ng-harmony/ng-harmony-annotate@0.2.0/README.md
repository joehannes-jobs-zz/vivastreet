![Harmony = 6 + 7;](src/logo.png "Harmony - Fire in my eyes")

## Synopsis

A (sample) ES7-proposal (babel-feature) annotation collection mimicking the upcoming Angular 2.0 code-style.
Write your own, contribute, and feel like a hero ... it's easy!

~~I'm about to battle test the code ... when done I'll come up with samples here and integrate in ng-harmony.github.io/ng-harmony demo todomvc-site ...~~

Roughly tested, considered beta now ... on hands on how to see gh-pages todomvc demo of ng-harmony/ng-harmony

## Code Example

```javascript
import { Controller, Service } from "ng-harmony/ng-harmony";
import { SomeUtilityClass, OtherUtilityClass} from "my-org/my-repo";
```

We can use this lib in such a way *[...]*

```javascript
class YourThingy extends Controller.mixin(SomeUtilityClass, OtherUtilityClass) {
```

## Motivation

* I wanted to be part of this because I liked it
* I am a secret agent and want to test my superpowers
* I had this idea ...
* I want to stick with Angular 1 for now and missed this feature

## Installation

I recommend the usage of jspm.
This way, just base your project upon jspm and start using this lib as in the code example above.

```bash
jspm i github:ng-harmony/...
```

## API Reference

### `MyMainUtil` (Root-Class)

`myMethod`: that's a foo figther
`myOtherMethod`: that's just a bar of gold


### `MyOtherUtil`

`digest`: my stomach is full, too much pizzs, should have left it for the cat

## Contributors

Drop me an email at <you> at <your-email-provider> dot <domain>

## License

MIT
