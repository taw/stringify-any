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

  ];

 for(let [obj, str] of samples) {
  	t.is(stringify(obj), str);
  }
})

test('one level collections', t => {
  t.is(stringify([1,2,3]), "[\n  1,\n  2,\n  3,\n]")
  t.is(stringify(new Set([1,2,3])), "new Set([\n  1,\n  2,\n  3,\n])")
  t.is(stringify({x: 1, y: 2}), "{\n  \"x\": 1,\n  \"y\": 2,\n}")
  t.is(stringify(new Map([['x', 1], ['y', 2]])), "new Map([\n  [\"x\", 1],\n  [\"y\", 2],\n])")
})

// TODO: multi-indents
// TODO: string escape codes
// TODO: Date
