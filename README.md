Did you ever do this?

    console.log(JSON.stringify(object))

This package supports this use case, except properly, so:

* pretty printing by default
* with final comma for all multiline data structures
* support for special values like `null`, `undefined`, `-0`, infinities, NaN
* support for `Date`, `Map`, and `Set`
* partial support `WeakMap`, and `WeakSet` (full support is impossible without special engine hooks)

If you're in browser, the browser will usually provide a much better interface than this package. But if you need to print some objects to terminal, send them to logs etc., this package could be very useful.

### Future plans

* custom identation (not just 2 spaces)
* support for other JS-style languages like Imba, CoffeeScript etc.
