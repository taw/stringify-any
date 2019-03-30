let stringify_number = (obj) => {
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
}

let stringify_array = (obj, nl) => {
  if (obj.length === 0) {
    return "[]";
  }
  let next_nl = nl + "  ";
  let parts = [];
  parts.push("[" + nl);
  for (let item of obj) {
    parts.push("  " + stringify_rec(item, next_nl) + "," + nl);
  }
  parts.push("]");
  return parts.join("");
}

let stringify_object = (obj, nl) => {
  if (Object.keys(obj).length === 0) {
    return "{}";
  }
  let parts = [];
  let next_nl = nl + "  ";
  parts.push("{" + nl);
  for (let key in obj) {
    parts.push(
      "  " + JSON.stringify(key) + ": " + stringify_rec(obj[key], next_nl) + "," + nl
    );
  }
  parts.push("}");
  return parts.join("");
}

let stringify_map = (obj, nl) => {
  if (obj.size === 0) {
    return "new Map()";
  }
  let parts = [];
  let next_nl = nl + "  ";
  parts.push("new Map([" + nl);
  for (let [key, val] of obj.entries()) {
    parts.push(
      "  [" + stringify_rec(key, next_nl) + ", " + stringify_rec(val, next_nl) + "]," + nl
    );
  }
  parts.push("])");
  return parts.join("");
}

let stringify_set = (obj, nl) => {
  if (obj.size === 0) {
    return "new Set()";
  }
  let parts = [];
  let next_nl = nl + "  ";
  parts.push("new Set([" + nl);
  for (let item of obj) {
    parts.push("  " + stringify_rec(item, next_nl) + "," + nl);
  }
  parts.push("])");
  return parts.join("");
}

let stringify_rec = (obj, nl) => {
  let t = typeof obj;
  if (obj === undefined) {
    return "undefined";
  }
  if (obj === null || obj === true || obj === false || t === "string") {
    return JSON.stringify(obj);
  }
  if (t === "number") {
    return stringify_number(obj);
  }
  if (t === "function") {
    return "function(){?}"
  }
  if (obj instanceof WeakMap) {
    return "new WeakMap(?)";
  }
  if (obj instanceof WeakSet) {
    return "new WeakSet(?)";
  }
  if (obj instanceof Date) {
    return "new Date(" + JSON.stringify(obj.toISOString()) + ")"
  }

  if (Array.isArray(obj)) {
    return stringify_array(obj, nl);
  } else if (obj instanceof Map) {
    return stringify_map(obj, nl);
  } else if (obj instanceof Set) {
    return stringify_set(obj, nl);
  } else if (t === "object") {
    return stringify_object(obj, nl);
  } else {
    // FALLBACK
    return JSON.stringify(obj);
  }
}

let stringify = (obj) => {
  return stringify_rec(obj, "\n");
}

module.exports = stringify;
