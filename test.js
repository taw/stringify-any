import test from 'ava';
import stringify from './index';

test('basic data types', t => {
  let samples = [
    0,
    123,
    19.3,
    -45.7,
    "",
    "hello",
    [],
    {},
    true,
    false,
    null,
  ];

  for(let obj of samples) {
  	t.is(stringify(obj), JSON.stringify(obj));
  }
})

test('special cases data types', t => {
  let samples = [
    [undefined, "undefined"],
    [-0, "-0"],
    [Number.POSITIVE_INFINITY, "Infinity"],
    [Number.NEGATIVE_INFINITY, "-Infinity"],
    [Number.NaN, "NaN"],
    [new Map(), "new Map()"],
    [new Set(), "new Set()"],
    [new WeakMap(), "new WeakMap(?)"],
    [new WeakSet(), "new WeakSet(?)"],
    // new Date(),  // FIXME
  ];

 for(let [obj, str] of samples) {
  	t.is(stringify(obj), str);
  }
})

// TODO: indents
// TODO: string escape codes
