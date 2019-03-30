Did you ever do this?

    console.log(JSON.stringify(object))

This package supports this use case, except properly, so:

* pretty printing by default
* with final comma for all multiline data structures
* support for special values like `null`, `undefined`, `-0`, infinities, NaN
* support for `Date`, `Map`, and `Set`
* partial support `WeakMap`, and `WeakSet` (full support is impossible without special engine hooks)
