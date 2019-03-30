Did you ever do this?

    console.log(JSON.stringify(object))

This package supports this use case, except properly, so:

* pretty printing by default
* support for special values like `null`, `undefined`, `-0`, infinities, NaN
* support for `Date`, ES6 `Map`, and ES6 `Set`
* partial support ES6 `WeakMap`, and ES6 `WeakSet` (full support is impossible without special engine hooks)
