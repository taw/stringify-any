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
    "one\ttwo\nthree",
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
    [new Date("2019-03-30T13:47:00.566Z"), 'new Date("2019-03-30T13:47:00.566Z")'],
  ];

 for(let [obj, str] of samples) {
  	t.is(stringify(obj), str);
  }
})

test('impossible to accurately represent', t => {
  let samples = [
    [new WeakMap(), "new WeakMap(?)"],
    [new WeakSet(), "new WeakSet(?)"],
    [() => {}, "function(){?}"],
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

test('multi level collections', t => {
  let str = (
`[
  1,
  {
    "a": [],
    "b": new Set(),
    "c": new Map(),
    "d": {},
  },
  [
    4,
    [],
    5,
  ],
  {
    "a map": new Map([
      ["x", "y"],
      [[
        1,
        2,
      ], [
        3,
        4,
      ]],
    ]),
  },
  [
    new Set([
      1,
      "x",
      [],
      9,
      [
        5,
        42,
      ],
    ]),
  ],
]`)
  let obj = eval(str);
  t.is(stringify(obj), str);
})
