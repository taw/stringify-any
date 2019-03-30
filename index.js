let stringify = (obj) => {
  if (obj === undefined) return "undefined";
  let t = typeof obj;
  if (t === "number") {
    if (!Number.isFinite(obj)) {
      if (Number.isNaN(obj)) return "NaN";
      if (obj > 0) return "Infinity";
      return "-Infinity";
    } else if (obj === 0) {
      if (1 / obj > 0) {
        return "0";
      } else {
        return "-0";
      }
    } else {
      return JSON.stringify(obj);
    }
  } else if (obj instanceof Map) {
    return "new Map()";
  } else if (obj instanceof Set) {
    return "new Set()";
  } else if (obj instanceof WeakMap) {
    return "new WeakMap(?)";
  } else if (obj instanceof WeakSet) {
    return "new WeakSet(?)";
  } else {
    return JSON.stringify(obj);
  }
}

module.exports = stringify;
